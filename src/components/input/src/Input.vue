<template>
  <div class="vue-input-container"
      @mouseenter="hoverIng = true"
      @mouseleave="hoverIng = false">
    <input
      class="input-style"
      type="text"
      :value="labelValue"
      :readOnly="readOnly"
      :disabled="disabled"
      @input="$emit('input',$event.target.value)"
      :placeholder="placeHolder"
      @focus="$emit('focus')"
      :style="`width:calc(100% - ${hoverIng&&value?'52px':0})`"
    />
    <div class="input-icon del-icon"
       v-if="clearable"
       v-show="hoverIng&&value"
       @click="$emit('clear')"
    >
      <icon type="deleteicon"></icon>
    </div>
    <div class="input-icon arrow-icon"
       v-show="true"
    >
      <icon type="caret-down" v-show="!up"></icon>
      <icon type="caretup" v-show="up"></icon>
    </div>
  </div>
</template>

<style lang="scss">
.vue-input-container {
  display: inline-block;
  text-align: left;
  width:180px;
  position: relative;
  border: solid 1px #bed3e8 !important;
  border-radius: 4px;
  overflow: hidden;
  background-color: white;
  .input-style{
    outline:none;
    border:none;
    background-color: white;
    display: inline-block;
    padding-left: 10px;
    height: 32px;
    line-height: 32px;
    font-family: microsoft YaHei !important;
    color: #000;
    -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .del-icon{
    right:16px;
  }
  .arrow-icon{
    right: 0px;
  }
  .input-icon {
    position: absolute;
    top:10px;
    width: 8px;
    height: 8px;
    line-height: 8px;
    display: inline-block;
    text-indent: -20px;
  }
}
</style>

<script>
import Icon from '../../icon'

export default {
  name: "Input",
  components:{
    Icon
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    placeHolder: {
      type: String,
      default: "请选择"
    },
    readOnly: {
      type: Boolean,
      default() {
        return false;
      }
    },
    up: {
      type: Boolean,
      default() {
        return false;
      }
    },
    clearable:{
      type:Boolean,
      default:false,
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data(){
    return {
      hoverIng:false,
    }
  },
  computed:{
    labelValue(){
      return this.value
    },
  }
};
</script>
