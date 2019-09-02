<template>
  <el-table
    :data="dataSource"
    :height="height"
    @row-click="rowClick"
    @cell-click="cellClick"
    @sort-change="sortChange"
    stripe
    style="width: 100%"
    min-height="400"
  >
    <div v-for="(item,index) in headerData" :key="item+index">
      <el-table-column v-if="item.comps" v-bind="item">
        <template slot-scope="scope">
          <span v-for="(cp,index) in item.comps" :key="cp+index">
            <slot
              v-if="cp.event"
              :name="`${cp.event}`"
              v-bind="{$config:cp,$data:dataSource,$index:scope.$index}"
            >
              <component
                :is="`El${cp.comp}`"
                @click.native.prevent="$emit('act',cp.event,scope.$index, dataSource)"
                v-bind="{...dataSource[scope.$index],...cp.props}"
              >
                <el-text v-if="cp.label">{{cp.label}}</el-text>
              </component>
            </slot>
            <component
              v-else
              :is="`El${cp.comp}`"
              @click.native.prevent="$emit('act',cp.event,scope.$index, dataSource)"
              v-bind="{...dataSource[scope.$index],...cp.props}"
            >
              <el-text v-if="cp.label">{{cp.label}}</el-text>
            </component>
          </span>
        </template>
      </el-table-column>
      <el-table-column v-bind="item" v-else>
        <template slot-scope="scope">
          <el-text>{{dataSource[scope.$index][item.prop]|filterAct(item.formatType)}}</el-text>
        </template>
      </el-table-column>
    </div>
  </el-table>
</template>

<script>
import {Table,TableColumn} from 'element-ui'

export default {
  name: "DataTable",
  components: {
    ElTable:Table,
    ElTableColumn:TableColumn
  },
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      }
    },
    headerData: {
      type: Array,
      default() {
        return [];
      }
    },
    height: {
      type: Number
    }
  },
  data() {
    return {};
  },
  computed: {
    dataSource() {
      return this.tableData;
    }
  },
  methods: {
    rowClick(row, col, event) {
      this.$emit("row-click", row, col, event);
    },
    cellClick(cell, row, col, event) {
      this.$emit("cell-click", cell, row, col, event);
    },
    sortChange({column,prop,order}){
      this.$emit('sort-change',column,prop,order);
    },
  }
};
</script>

