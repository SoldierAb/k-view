# Tip

文本溢出气泡展示

## 代码演示

:::kview 

```html
<template>
    <k-tip position="right" :content="contentString" :text="contentString"></k-tip>
</template>

<script>
    
    
    export default {
        data() {
            return {
                contentString: "今天天气真不错，适合去打球，但是没人一起，就算了吧",
            }
        },
    };
</script>
```
:::


##  Attributes
<div class="markdown-table">

|  参数  |  说明   | 类型  | 默认值| 可选值 | 是否必须|
|-------|---------|------|--------|----------|----|
|popperClass|附加样式|string|-|-|-|
|text|填充文本|string|文本|-|-|
|content|提示内容|string|提示内容|-|-|
|position|展示位置|string|top|-|-|
|textWidth|文本宽度|number|110|-|-|
|trigger|触发展示条件|string|overflow|overflow, hover|-|

</div>


