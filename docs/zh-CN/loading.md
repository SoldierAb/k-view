#  Loading 加载动画

### 使用

:::kview 

```html
<template>
    <a class="k-button" style="color:red" @click="toggleLoading">点击显示/隐藏加载动画{{loading}}</a>
</template>

<style>
    .k-button{
        color:#3a8ee6;
        position:fixed;
        top:0;
        right:100px;
        bottom:0;
        margin:auto;
        z-index:99999;
        border:1px solid #3a8ee6;
        width:300px;
        height:30px;
        display:flex;
        justify-content:center;
        align-items:center;
        background:yellow;
    }
    .k-button:hover{
        cursor:pointer;
    }

</style>

<script>
import Vue from 'vue'
    import Loading from '../../src/components/loading'
    Vue.use(Loading);
    export default {
        data() {
            return {
                loading: false,
            }
        },
        methods: {
            toggleLoading() {
                this.loading = !this.loading;
                console.log('loading', this.loading);
                this.$loading[this.loading ? 'show' : 'hide'](() => {
                    console.log('call-back');
                    setTimeout(()=>{
                        this.loading=false;
                        this.$loading.hide();
                    },3000)
                })
            },
        },
    };

</script>
```

:::

###  Attributes
<div class="markdown-Loading">

|  属性  |  说明   |  类型|可选值|默认值|是否必须
|-------|---------|---|---|---|---|
|callback|回调函数|Function|-|-|-
|background|背景色|String|-|rgba(0, 0, 0, .6)|-
|color|加载图标颜色|String|-|#4b9cdb|-

</div>


###  Events
<div class="markdown-Loading">

| 方法名 | 说明 |
| ------ |----- | 
| show | 显示提示 | 详见Attributes表 |
| hide | 隐藏提示 | 详见Attributes表 |

</div>

