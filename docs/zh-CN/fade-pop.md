# 弹窗

## 代码演示

### 基础用法
:::kview
```html
<template>
    <a class="k-link" @click="showPop = true">点击弹出，点击阴影消失</a>
   <k-fade-pop v-model="showPop" draggable modalHidden title="标题" :height="200">
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