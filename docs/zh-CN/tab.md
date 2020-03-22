# Tab

## 代码演示

:::kview 

```html
<template>
    <k-tab  v-model="tab" :options="options"/>
    <span>
        tab:{{tab}}
    </span>
</template>

<script>
    import Tab from '../../src/components/tab';
    import Vue from 'vue';
    Vue.use(Tab);

    export default {
        data() {
            return {
                options: [{
                        label: "tab1",
                        value: "1",
                    },
                    {
                        label: "tab2",
                        value: "2",
                    },
                ],
                tab:'',
            }
        },
    };
</script>
```

:::

##  Props

<div class="markdown-table">

|  参数  |  说明   | 类型  | 默认值|  是否必须|
|-------|---------|------|--------|----------|
|popperClass|附加样式|string|-|-
|text|填充文本|string|文本|-
|content|提示内容|string|提示内容|-
|position|展示位置|string|top|-
|textWidth|文本宽度|number|110|-

</div>

