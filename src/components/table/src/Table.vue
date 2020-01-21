<template>
  <div class="k-table-container">
    <el-table
      min-height="400"
      style="width: 100%"
      :data="dataSource"
      :height="height"
      :span-method="spanMethod"
      :default-expand-all="defaultExpandAll"
      @row-click="rowClick"
      @cell-click="cellClick"
      @sort-change="sortChange"
      @selection-change="handleSelectionChange"
    >
      <div
        v-for="(item, index) in headerData"
        :key="item + index"
      >
        <el-table-column
          v-if="item.comps"
          v-bind="item"
        >
          <template slot-scope="scope">
            <span
              v-for="(cp, cindex) in item.comps"
              :key="cp + cindex"
            >
              <slot
                v-if="cp.event"
                :name="`${cp.event}`"
                v-bind="{ $config: cp, $data: dataSource, $index: scope.$index }"
              >
                <component
                  :is="`El${cp.comp}`"
                  v-show="
                    cp.showRules ? cp.showRules({ $data: dataSource, $index: scope.$index }) : true
                  "
                  v-bind="cp.props"
                  :disabled="
                    cp.disableRules
                      ? cp.disableRules({ $data: dataSource, $index: scope.$index })
                      : false
                  "
                  @click.native.prevent="$emit('act', cp.event, scope.$index, dataSource)"
                >
                  <span v-if="cp.label">{{ cp.label }}</span>
                </component>
              </slot>
              <component
                :is="`El${cp.comp}`"
                v-else
                v-show="
                  cp.showRules ? cp.showRules({ $data: dataSource, $index: scope.$index }) : true
                "
                v-bind="cp.props"
                :disabled="
                  cp.disableRules
                    ? cp.disableRules({ $data: dataSource, $index: scope.$index })
                    : false
                "
                @click.native.prevent="$emit('act', cp.event, scope.$index, dataSource)"
              >
                <span v-if="cp.label">{{ cp.label }}</span>
              </component>
            </span>
          </template>
        </el-table-column>
        <span v-else-if="item.type === 'selection'">
          <el-table-column
            v-if="item.showRules ? item.showRules({ $data: dataSource }) : true"
            type="selection"
            fixed="left"
            width="55"
          />
        </span>
        <el-table-column
          v-else
          v-bind="item"
        >
          <template slot-scope="scope">
            <slot
              v-if="item.type === 'expand'"
              name="expand"
              v-bind="{ $data: dataSource, $index: scope.$index }"
            >
              <span>{{ dataSource[scope.$index] }}</span>
            </slot>
            <slot
              v-else
              :name="`${item.prop}`"
              v-bind="{ $data: dataSource, $index: scope.$index }"
            >
              <span>
                {{
                  dataSource[scope.$index][item.prop] | filterAct(item.formatType)
                }}
              </span>
            </slot>
          </template>
        </el-table-column>
      </div>
      <template slot="empty">
        {{ loading ? '' : '暂无数据' }}
      </template>
    </el-table>
  </div>
</template>

<style lang="scss">
.k-table-container {
  $table-header-height: 36px;
  $table-body-tr-height: 48px;
  $table-bg-odd: white;
  $table-bg-even: #eef2f8;
  $table-bg-stripe: #fafafa;
  .el-table {
    thead {
      color: $font-color-base;
      font-weight: 500;
    }

    th {
      background: $table-bg-even;
      padding: 0;
      height: $table-header-height;
    }

    td,
    th.is-leaf {
      padding: 0;
    }

    .el-table__row {
      td {
        height: $table-body-tr-height;
      }
    }

    .el-table__fixed-body-wrapper,
    .el-table__body-wrapper {
      tbody {
        tr:nth-child(even) {
          background: $table-bg-even;
        }

        tr:nth-child(odd) {
          background: $table-bg-odd;
        }
      }
    }
  }

  .el-table--striped .el-table__body tr.el-table__row--striped td {
    background: $table-bg-odd;
  }
}
</style>

<script>
import { Table, TableColumn } from "element-ui";

export default {
  name: "KTable",
  components: {
    ElTable: Table,
    ElTableColumn: TableColumn
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
    spanMethod: {
      type: Function,
      default() {
        return new Function();
      }
    },
    loading: {
      type: Boolean,
      default() {
        return false;
      }
    },
    height,
    defaultExpandAll: {
      type: Boolean,
      default() {
        return true;
      }
    },
    border: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      multipleSelection: []
    };
  },
  computed: {
    dataSource() {
      return this.tableData;
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.$emit("selection-change", val);
    },
    rowClick(row, col, event) {
      this.$emit("row-click", row, col, event);
    },
    cellClick(cell, row, col, event) {
      this.$emit("cell-click", cell, row, col, event);
    },
    sortChange({ column, prop, order }) {
      this.$emit("sort-change", column, prop, order);
    }
  }
};
</script>
