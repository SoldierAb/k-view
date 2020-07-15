# Select Search

### Basic usage

:::kview

```html
<template>
    <k-select-search :options="keyOption" v-model="searchObj" />
    <div class="select-text">
        current searchObj: {{searchObj}}
    </div>
</template>

<script>

    export default {
        data() {
            return {
                keyOption: [
                    {
                        key: "",
                        label: "any",
                    },
                    {
                        key: "condition1",
                        label: "label-one",
                    },
                    {
                        key: "condition2",
                        label: "label-two",
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

|  Attribute  |  Description   | Type  | Default|  Require|
|-------|---------|------|--------|----------|
|size|size（normal、small、mini）|string|normal|-
|value / v-model|binding value|if key is truthy return {key:"input content"} ;if key is falsy return the input content|-|-
|options|options |Array\<object\>|-|-
|preWidth|Select bar width |Number （unit: px）|120|-

</div>
