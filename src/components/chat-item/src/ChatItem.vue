<template>
  <div
    class="chat-item-container"
    :style="`justify-content:${position}`"
  >
    <div class="chat-item-box">
      <component
        :is="`k-${data.comp}`"
        v-bind="data"
      />
    </div>
  </div>
</template>


<style lang="scss">
    .chat-item-container{
            display: flex;
            align-items: center;
            padding:10px 20px;
        .chat-item-box{
            max-width:60%;
            word-wrap: break-word;
            border:1px solid green;
        }
    }
</style>

<script>

export default {
    name:'ChatItem',
    components: {},
    props: {
        data:{
            type:Object,
            default(){
                return {
                    position:"center",
                    comp:"text",
                    content:"test message",
                }
            }
        },
    },
    data() {
        return {

        };
    },
    computed: {
        position(){
            return {
                center:"center",
                left:"flex-start",
                right:"flex-end"
            }[this.data.position]
        }
    },
    watch: {},
    created() {

    },
    mounted() {

    },
    methods: {

    },
}
</script>