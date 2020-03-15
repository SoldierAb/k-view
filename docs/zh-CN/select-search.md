# 选择查找

:::kview

```html
<template>
    <k-select-search :options="keyOption" v-model="searchObj" />
    <div class="select-text">
        当前搜索对象 searchObj: {{searchObj}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                keyOption: [
                    {
                        key: "",
                        label: "全部",
                    },
                    {
                        key: "condition1",
                        label: "黄金糕",
                    },
                    {
                        key: "condition2",
                        label: "双皮奶",
                    },
                ],
                searchObj: {
                    
                },
            }
        },
    }
</script>

<style>
    .select-text{
        padding:10px;
    }
</style>
```

:::


##  Props

<div class="markdown-table">

|  参数  |  说明   | 类型  | 默认值|  是否必须|
|-------|---------|------|--------|----------|
|size|尺寸（normal、small、mini）|string|normal|-
|v-model|双向绑定，当前选项数据|选项key为truthy则为对应选项的key和输入内容组成的对象{key:"输入内容"}， 选项key为falsy 则为对应输入的字符串|-|-
|options|下拉选项|Array\<object\>|-|-

</div>
