<template>
  <ul class="key-value-container">
    <li
      v-for="(key,index) in keys"
      :key="key+index"
    >
      <span class="span-box">{{ key }}:</span>
      <span>
        <em>{{ data[key] }}</em>
      </span>
    </li>
  </ul>
</template>

<style lang='less'>
.key-value-container {
  display: inline-block;
  li {
    text-align: left;
  }
}
</style>

<script>
export default {
  name: "KeyValue",
  components: {},
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {
    keys() {
      return Object.keys(this.data);
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>