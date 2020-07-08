<template>
  <div class="col-table-container">
    <table>
      <tr
        v-for="(thItem,thIndex) in headerData"
        :key="thItem+thIndex"
      >
        <td 
          class="col-td-one"
          :style="`width:${headerWidth}px`"
        >
          <span>
            <slot
              :name="`h-${thItem.key}`"
              v-bind="thItem"
            >
              <span>{{ thItem.label }}</span>
            </slot>
          </span>
        </td>
        <td
          v-for="(tdItem,tdIndex) in bodyData"
          :key="tdItem+tdIndex"
          @click="cellClick(thItem,tdIndex,bodyData)"
        >
          <!-- @mouseover="tdOver(thItem,tdIndex)" -->
          <span>
            <slot
              :name="thItem.key"
              v-bind="{$th:thItem,$index:tdIndex,$data:bodyData}"
            >
              <span>
                {{ tdItem[thItem.key] }}
              </span>
            </slot>
          </span>
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
    table-layout: fixed;
    width: 100%;
    td {
      position: relative;
      color: $font-color-light;
      border-left: 1px solid $border-color-light;
      border-bottom: 1px solid $border-color-light;
      box-sizing: border-box;
      text-overflow: ellipsis;
      vertical-align: middle;
      padding:10px 20px;
    }
  }
  .col-td-one{
    background: $table-bg-stripe;
  }
}
</style>

<script>
export default {
  name: "KColTable",
  props: {
    headerData: {
      type: Array,
      default(){
        return []
      }
    },
    bodyData: {
      type: Array,
      default(){
        return []
      }
    },
    headerWidth: {
      type: Number,
      default() {
        return 120;
      }
    }
  },
  data() {
    return {
    };
  },
  methods: {
    tdOver(thItem, tdIndex) {
    },
    cellClick(thItem, index, data) {
      this.$emit("cell-click", thItem, index, data);
    }
  }
};
</script>

