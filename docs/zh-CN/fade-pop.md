# 弹窗

## 代码演示

### 基础用法
:::kview
```html
<template>
    <a class="k-link" @click="showPop = true">点击弹出，点击阴影消失</a>
   <k-fade-pop v-model="showPop" modalHidden title="标题" :width="800" :height="200">
       展示内容
   </k-fade-pop>
</template>

<style>
    .k-link{
        padding:10px 20px;
        color:#3a8ee6;
      
    }
    .k-link:hover{
        cursor:pointer;
    }

</style>

<script>
    import Vue from 'vue'
    import FadePop from '../../src/components/fade-pop'
    Vue.use(FadePop);
    export default{
        data(){
            return {
                showPop:false,
            }
        }
    }
</script>

```
:::

##  Props

<div class="markdown-table">

|  参数  |  说明   | 类型  | 默认值|  是否必须|
|-------|---------|------|--------|----------|
|v-model|双向绑定，是否显示|Boolean|false|-
|modalHidden|点击阴影消失|Boolean|true|-
|title|标题头|String|-|-
|beforeClose|关闭前钩子函数|Function|-|-
|width|宽度|String、Number|'60%'|-
|height|高度|String、Number|'80%'|-

</div>