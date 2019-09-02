<template>
  <div class="col-table-container">
    <table>
      <tr v-for="(thItem,thIndex) in headerData" :class="`${thIndex===0?'col-tr-one':''}`" :key="thItem+thIndex">
        <td :style="`width:${tdWidth}px`">
          <el-cell>
            <slot :name="`h-${thItem.key}`" v-bind="thItem">
              <el-text>{{thItem.label}}</el-text>
            </slot>
          </el-cell>
        </td>
        <td
          v-for="(tdItem,tdIndex) in bodyData"
          :key="tdItem+tdIndex"
          @mouseover="tdOver(thItem.event,tdIndex)"
        >
          <el-cell>
            <slot :name="thItem.key" v-bind="{$th:thItem,$index:tdIndex,$data:bodyData}">
              <component
                v-if="thItem.comp"
                :is="`El${thItem.comp}`"
                v-bind="{...thItem.props,...tdItem}"
                v-model="tdItem[thItem.bind]"
                @click.native.prevent="cellClick(thItem.event,tdIndex,bodyData)"
              >
                <async-options v-if="thItem.comp==='Select'" :url="thItem.url"></async-options>
                <el-text v-if="thItem.comp==='Button'">{{tdItem[thItem.key]}}</el-text>
              </component>
              <el-text v-else>{{tdItem[thItem.key]}}</el-text>
            </slot>
          </el-cell>
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss">
.col-table-container {
  table {
    border-collapse:collapse;
    border: 1px solid $border-color-light;
    td {
      color: $font-color-light;
      border-left: 1px solid $border-color-light;
      border-bottom: 1px solid $border-color-light;
      
    }
  }
  .col-tr-one{
    background: $table-bg-odd;
  }
}
</style>

<style lang="less">
.col-table-container {
  table {
    table-layout: fixed;
    width: 100%;
    td {
      box-sizing: border-box;
      text-overflow: ellipsis;
      vertical-align: middle;
      position: relative;
    }
  }
}
</style>


<script>
export default {
  name: "ColTable",
  props: {
    headerData: {
      type: Array
    },
    bodyData: {
      type: Array
    },
    tdWidth: {
      type: Number,
      default() {
        return 120;
      }
    }
  },
  data() {
    return {
      eventType: "",
      index: -1
    };
  },
  watch: {
    bodyData: {
      deep: true,
      handler(val) {
        this.$emit("on-change", this.eventType, this.index, val);
      }
    }
  },
  methods: {
    tdOver(eventType, index) {
      this.eventType = eventType;
      this.index = index;
    },
    cellClick(eventType, index, data) {
      this.$emit("cell-click", eventType, index, data);
    }
  }
};
</script>

