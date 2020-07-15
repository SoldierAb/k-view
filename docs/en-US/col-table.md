##  ColTable 

### Basic usage

:::kview 

```html
<template>
   <k-col-table :header-data="headerData" :body-data="bodyData" @cell-click="cellClick"/>
</template>

<script>

    export default {
        data() {
            return {
                headerData:[
                    {
                        label:'name',
                        key:'name'
                    },
                    {
                        label:'age',
                        key:'age'
                    },
                    {
                        label:'husband',
                        key:'husband'
                    }
                ],
                bodyData:[
                    {
                        name:'Rose',
                        age:24,
                        husband:'John'
                    },
                    {
                        name:'Jane',
                        age:23,
                        husband:'Richart'
                    },
                    {
                        name:'Maria',
                        age:25,
                        husband:'Mick'
                    },
                ]
            }
        },
        methods: {
           cellClick(thItem, index, data){
               console.log(thItem, index, data)
           },
        },
    };

</script>
```

:::
## Attributes

<div class="markdown-table">

|  Attribute  |  Description   | Type  | Default|  Require|
|-------|---------|------|--------|----------|
|bodyData|table data|Array\<Object\>|[]|-
|headerData|table header columns|Array\<Object\>|[]|true
|headerWidth|table header columns width|Number|120（unit: px）| -

</div>

## Events

<div class="markdown-table">

| Event Name | Description | Parameters|
| ------ |----- | ---- |
|cell-click|triggers when clicking a cell| thItem, bodyDataIndex, bodyData|

</div>

