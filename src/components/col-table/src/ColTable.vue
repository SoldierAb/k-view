<template>
  <div class="col-table-container">
    <table>
      <tr
        v-for="(thItem,thIndex) in headerData"
        :key="thItem+thIndex"
        :class="`${thIndex===0?'col-tr-one':''}`"
      >
        <td :style="`width:${tdWidth}px`">
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
          @mouseover="tdOver(thItem.event,tdIndex)"
        >
          <span>
            <slot
              :name="thItem.key"
              v-bind="{$th:thItem,$index:tdIndex,$data:bodyData}"
            >
              <component
                :is="`El${thItem.comp}`"
                v-if="thItem.comp"
                v-model="tdItem[thItem.bind]"
                v-bind="{...thItem.props,...tdItem}"
                @click.native.prevent="cellClick(thItem.event,tdIndex,bodyData)"
              >
                <async-options
                  v-if="thItem.comp==='Select'"
                  :url="thItem.url"
                />
                <span v-if="thItem.comp==='Button'">
                  {{ tdItem[thItem.key] }}
                </span>
              </component>
              <span v-else>
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
      color: $font-color-light;
      border-left: 1px solid $border-color-light;
      border-bottom: 1px solid $border-color-light;
       box-sizing: border-box;
      text-overflow: ellipsis;
      vertical-align: middle;
      position: relative;
    }
  }
  .col-tr-one{
    background: $table-bg-odd;
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

