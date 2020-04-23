<template>
  <div class="chat-image-container">
    <img :src="content">
  </div>
</template>

<style lang='scss'>
 .chat-image-container{
 }
</style>

<script>

export default {
    name:'KImage',
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