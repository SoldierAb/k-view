<template>
  <div class="tip-test-container">
    <k-tip :content="content">
      {{ content }}}
    </k-tip>
  </div>
</template>

<style lang='scss'>
 .tip-test-container{
     height:100%;
 }
</style>

<script>

export default {
    name:'TipTest',
    components: {},
    props: {

   },
    data() {
        return {
            content:"今天天气真不错，适合去打球，但是没人一起，就算了吧"
        };
    },
    computed: {},
    watch: {},
    created() {

    },
    mounted() {

    },
    methods: {

    },
}
</script>