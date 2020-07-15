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
                        label:'姓名',
                        key:'name'
                    },
                    {
                        label:'年龄',
                        key:'age'
                    },
                    {
                        label:'老公',
                        key:'husband'
                    }
                ],
                bodyData:[
                    {
                        name:'迪丽热巴',
                        age:24,
                        husband:'阿兵'
                    },
                    {
                        name:'古力娜扎',
                        age:23,
                        husband:'阿兵'
                    },
                    {
                        name:'佟丽娅',
                        age:25,
                        husband:'阿兵'
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

