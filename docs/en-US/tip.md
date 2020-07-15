# Tip

### Basic usage

:::kview 

```html
<template>
    <k-tip position="right" :content="contentString" :text="contentString"></k-tip>
</template>

<script>
    
    
    export default {
        data() {
            return {
                contentString: "Hello world Hello world Hello world Hello world Hello world",
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
|popperClass|custom class name|string|-|-
|text|text|string|文本|-
|content|display content|string|提示内容|-
|position|position of Tip|string|top|-
|textWidth|text width limit|number (unit: px) |110|-

</div>

