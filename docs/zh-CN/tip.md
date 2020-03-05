# Tip

:::kview

```html
<template>
    <k-tip :content="contentString" :text="contentString"><p>{{contentString}}</p></k-tip>
</template>

<script>
    export default {
        data() {
            return {
                arr:[1,2,3],
                contentString: "今天天气真不错，适合去打球，但是没人一起，就算了吧",
            }
        },
        mounted() {},
    };
</script>
```
:::

