# Table 表格

基于Element 的 Table 进行二次封装，用于展示多条结构类似的数据，可根据配置文件作自定义展示。

## 代码演示

### 基础用法
:::kview

```html
<template>
    <k-table :height="contentHeight" :header-data="headerData" :table-data="tableData" @act="clickAct" @sort-change="sortChange"
    @selection-change="selectChange" />
</template>

<script>
   
    const getPermissionByKey = key => {
        return {
            PERMISSION_VOICE_LIB_DETAIL: {
                label: '查看',
                has: true
            },
            PERMISSION_VOICE_LIB_DEL: {
                label: '删除',
                has: false
            },
            PERMISSION_VOICE_LIB_DL_VP:{
                label:'下载',
                has:true
            },
            PERMISSION_VOICE_LIB_DEL_VP:{
                label:'删除声纹',
                has:true
            }
        } [key]
    }
    export default {
        data() {
            return {
                contentHeight: 300,
                headerData: [{
                        type: "selection",
                        width: 55,
                        fixed: "left",
                        showRules: () => {
                            const {
                                has: PERMISSION_VOICE_LIB_DL_VP
                            } = getPermissionByKey("PERMISSION_VOICE_LIB_DL_VP"), {
                                has: PERMISSION_VOICE_LIB_DEL_VP
                            } = getPermissionByKey("PERMISSION_VOICE_LIB_DEL_VP");
                            return PERMISSION_VOICE_LIB_DL_VP || PERMISSION_VOICE_LIB_DEL_VP;
                        },
                    },
                    {
                        label: "编号",
                        prop: "id",
                    },
                    {
                        label: "声纹库名",
                        prop: "name",
                    },
                    {
                        label: "声纹总量/条",
                        prop: "count",
                    },
                    {
                        label: "建库时间",
                        prop: "created_at",
                        sortable:true,
                        formatType: "time", //全局注册的Vue.filter
                    },
                    {
                        label: "操作",
                        fixed: "right",
                        width: 240,
                        comps: [{
                                label: "查看详情",
                                comp: "ElButton", //全局注册的组件
                                event: "detail",
                                props: {
                                    style: "margin-right:10px;",
                                    size: "mini",
                                },
                                //  showRules: () => {
                                //   const { has } = getPermissionByKey("PERMISSION_VOICE_LIB_DETAIL");
                                //   return has;
                                // },
                                disableRules: () => {
                                    const {
                                        has
                                    } = getPermissionByKey("PERMISSION_VOICE_LIB_DETAIL");
                                    return !has;
                                },
                            },
                            {
                                label: "删除",
                                comp: "ElButton",
                                event: "delete",
                                props: {
                                    type: "danger",
                                    style: "margin-right:10px;",
                                    size: "mini",
                                },
                                // showRules: () => {
                                //   const { has } = getPermissionByKey("PERMISSION_VOICE_LIB_DEL");
                                //   return has;
                                // },
                                disableRules: () => {
                                    const {
                                        has
                                    } = getPermissionByKey("PERMISSION_VOICE_LIB_DEL");
                                    return !has;
                                },
                            },
                        ],
                    },
                ],
                tableData: [{
                    "id": 36,
                    "branch_id": 28,
                    "name": "速度发送方发送刚刚",
                    "is_deleted": 0,
                    "count": 0,
                    "voice_group_id": "6ec878df4f2311ea8cb20233488cb340",
                    "created_at": 1581682418,
                    "updated_at": 1582882719
                }, {
                    "id": 35,
                    "branch_id": 20,
                    "name": "测试库",
                    "is_deleted": 0,
                    "count": 0,
                    "voice_group_id": "9f1533814eff11ea8bf10233484e9886",
                    "created_at": 1581667038,
                    "updated_at": 1581667038
                }, {
                    "id": 32,
                    "branch_id": 10,
                    "name": "测试",
                    "is_deleted": 0,
                    "count": 0,
                    "voice_group_id": "db49acac4ef611ea8bf10233484e9886",
                    "created_at": 1581663273,
                    "updated_at": 1581663273
                }],
            }
        },
        methods: {
            clickAct(event, rowIndex, tableData, ) {
                console.log(event, rowIndex, tableData);
            },
            selectChange(multipleData){
                console.log(multipleData);
            },
            sortChange(column, prop, order) {
                const propSort = Object.prototype.toString.call(order).includes("String");
                const order_by = propSort ? prop : "";
                const desc = propSort ? {
                        descending: true,
                        ascending: false,
                    } [order] :
                    "";
                this.requestParam = {
                    ...this.requestParam,
                    order_by,
                    desc,
                };
            },

        }
    }
</script>
```

:::

##  Props

<div class="markdown-table">

|  参数  |  说明   | 类型  | 默认值|  是否必须|
|-------|---------|------|--------|----------|
|tableData|数据|Array|[]|-
|height|表格高度|Number|-|是
|headerData|表头配置(详见下方HeaderData)|Array|[]|是

</div>

## HeaderData
<div class="markdown-table">

|  参数  |  说明   | 类型  | 默认值|  是否必须|
|-------|---------|------|--------|----------|
|label|表头文本|String|-|是|
|prop|数据项展示key|String|-|是|
|width|列宽|Number|-|-|
|formatType|格式化类型|String|-|-|
|fixed|定位|String|-|-|
|showRules|展示规则|Function类型，返回值为Boolean|-|-|
|disableRules|禁用规则|Function类型，返回值为Boolean|-|-|
|type|表头类型|String|-|-|
|sortable|是否可排序|Boolean|-|-|
|comps|操作项配置（详见下方HeaderData-Comps）|Array|-|-|

</div>

## HeaderData-Comps
<div class="markdown-table">

|  参数  |  说明   | 类型  | 默认值|  是否必须|
|-------|---------|------|--------|----------|
|label|填充文本|String|-|是|
|comp|全局绑定的组件key|String|-|是|
|event|触发的事件key|String|-|是|
|props|当前操作comp接收的额外属性|Object|-|-|
|showRules|展示规则|Function类型，返回值为Boolean|-|-|
|disableRules|禁用规则|Function类型，返回值为Boolean|-|-|

</div>

## Events

<div class="markdown-table">

| 方法名 | 说明 | 参数|
| ------ |----- | ---- |
|row-click|行点击事件|传递row, col, event|
|cell-click|行点击事件|传递cell, row, col, event|
|selection-change|headerData含多选操作配置，表格项被点选的时触发|传递 `tableData` 属性的数组中所选中的对象 |
|sort-change|headerData含排序配置（sortable），排序按钮点击时出发|传递 column, prop, order |

</div>

