<template>
  <div
    ref="box"
    class="chat-box-container"
  >
    <transition-group
      name="fade-list"
      tag="div"
    >
      <div
        v-for="item in dataSource"
        :key="item"
      >
        <chat-item :data="item" />
      </div>
    </transition-group>
  </div>
</template>

<style lang='scss'>
 .chat-box-container{
     height: 500px;
     overflow: auto;
 }
 .fade-list-enter,.fade-list-leave-to{
  opacity: 0;
  transform: translate3d(0,10px,0);
  -webkit-transform: translate3d(0,10px,0);
}
.fade-list-enter-to,.fade-list-leave-active{
  transition: all .3s ease;
  -webkit-transition: all .3s ease;
}
</style>

<script>
import ChatItem from '../../chat-item'

export default {
    name:'ChatBox',
    components: {ChatItem},
    props: {
        dataSource:{
            type:Array,
            default(){
                return [
                   
                ]
            }
        },
    },
    data() {
        return {

        };
    },
    computed: {},
    watch: {
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
}
</script>