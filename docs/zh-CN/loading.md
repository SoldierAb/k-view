#  Loading 加载动画

### 使用

:::kview 

```html
<template>
    <button class="button" @click="toggleLoading">{{loading}}</button>
</template>

<style lang="css">
    .button{
        position:fixed;
        z-index:999999;
        top:100px;
        right:100px;
    }
</style>

<script>
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
                    this.$loading.hide();
                })
            },
        },
    };

</script>
```

:::

###  Attributes

|  属性  |  说明   |  类型|可选值|默认值|是否必须
|-------|---------|---|---|---|---|
|callback|回调函数|Function|-|-|-
|background|背景色|String|-|rgba(0, 0, 0, .6)|-
|color|加载图标颜色|String|-|#4b9cdb|-

###  Events

| 方法名 | 说明 |
| ------ |----- | 
| show | 显示提示 | 详见Attributes表 |
| hide | 隐藏提示 | 详见Attributes表 |

