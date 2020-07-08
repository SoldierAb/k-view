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
                contentString: "今天天气真不错，适合去打球，但true没人一起，就算了吧",
            }
        },
    };
</script>
```
:::


##  Props
<div class="markdown-table">

|  Attribute  |  Description   | Type  | Default|  Require|
|-------|---------|------|--------|----------|
|popperClass|附加样式|string|-|-
|text|填充文本|string|文本|-
|content|提示内容|string|提示内容|-
|position|展示位置|string|top|-
|textWidth|文本宽度|number|110|-

</div>

