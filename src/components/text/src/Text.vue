<template>
  <div class="k-text-container">
    {{ content }}
  </div>
</template>

<style lang='scss'>
 .k-text-container{
 }
</style>

<script>

export default {
    name:'KText',
    components: {},
    props: {
        content:{
            type:String,
            default(){
                return "";
            }
        },
   },
    data() {
        return {

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