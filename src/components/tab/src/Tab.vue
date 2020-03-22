<template>
  <div class="k-tab-container">
    <k-radio-group v-model="radioValue">
      <k-radio-button
        v-for="item in options"
        :key="item.label"
        :label="item.value"
      >
        {{
          item.label
        }}
      </k-radio-button>
    </k-radio-group>
  </div>
</template>

<style lang="scss">
.k-tab-container {
  display: inline-block;
}
</style>

<script>
import { RadioGroup, RadioButton } from "element-ui";

export default {
  name: "KTab",
  components: {
    KRadioGroup: RadioGroup,
    KRadioButton: RadioButton,
  },
  model: {
    prop: "tabVal",
    event: "change",
  },
  props: {
    // eslint-disable-next-line vue/require-prop-types
    tabVal:{
      default(){
        return "";
      },
    },
    options: {
      type: Array,
      default() {
        return [
          {
            label: "tab1",
            value: "1",
          },
          {
            label: "tab2",
            value: "2",
          },
        ];
      },
    },
  },
  data() {
    return {
      radioValue: this.tabVal,
    };
  },
  watch: {
    radioValue(val) {
      this.$emit("change", val);
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
