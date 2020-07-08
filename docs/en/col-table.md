#  ColTable 横向表格

### 使用

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

|  参数  |  说明   | 类型  | 默认值|  是否必须|
|-------|---------|------|--------|----------|
|bodyData|数据|Array\<Object\>|[]|-
|headerData|表头配置|Array\<Object\>|[]|是
|headerWidth|表头宽度|Number|120（单位：px）|否

</div>

## Events

<div class="markdown-table">

| 方法名 | 说明 | 参数|
| ------ |----- | ---- |
|cell-click|单元格点击事件|传递 thItem, bodyDataIndex, bodyData|

</div>

