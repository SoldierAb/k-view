# Table

### Basic usage
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
                label: 'More Detail',
                has: true
            },
            PERMISSION_VOICE_LIB_DEL: {
                label: 'Delete Voice Library',
                has: false
            },
            PERMISSION_VOICE_LIB_DL_VP:{
                label:'Download',
                has:true
            },
            PERMISSION_VOICE_LIB_DEL_VP:{
                label:'Delete Voice',
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
                        label: "ID",
                        prop: "id",
                    },
                    {
                        label: "Voice Library",
                        prop: "name",
                    },
                    {
                        label: "Voice Count",
                        prop: "count",
                    },
                    {
                        label: "Created At",
                        prop: "created_at",
                        sortable:true,
                        formatType: "time", //global Vue.filter
                    },
                    {
                        label: "Actions",
                        fixed: "right",
                        width: 240,
                        comps: [{
                                label: "More Detail",
                                comp: "ElButton", //global component
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
                                label: "Delete",
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
                    "name": "Library One",
                    "is_deleted": 0,
                    "count": 0,
                    "voice_group_id": "6ec878df4f2311ea8cb20233488cb340",
                    "created_at": 1581682418,
                    "updated_at": 1582882719
                }, {
                    "id": 35,
                    "branch_id": 20,
                    "name": "Library Two",
                    "is_deleted": 0,
                    "count": 0,
                    "voice_group_id": "9f1533814eff11ea8bf10233484e9886",
                    "created_at": 1581667038,
                    "updated_at": 1581667038
                }, {
                    "id": 32,
                    "branch_id": 10,
                    "name": "Library Three",
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

|  Attribute  |  Description   | Type  | Default|  Require|
|-------|---------|------|--------|----------|
|tableData|data|Array|[]|-
|height|Table's height. By default it has an auto height. If its value is a number, the height is measured in pixels;|Number|-|true
|headerData|configuration dataSource of Columns , see the following table|Array|[]|true

</div>

## HeaderData
<div class="markdown-table">

|  Attribute  |  Description   | Type  | Default|  Require|
|-------|---------|------|--------|----------|
|label|Column label|String|-|true|
|prop|Column field|String|-|true|
|width|Column width|Number|-|-|
|formatType|function key that formats cell content|String|-|-|
|fixed||String|-|-|
|showRules|display rule|Function return Boolean|-|-|
|disableRules|disabled rule|Function return Boolean|-|-|
|type|Column type|String|-|-|
|sortable|whether column can be sorted|Boolean|-|-|
|comps|configuration dataSource of actions（see the following table - HeaderData-Comps）|Array|-|-|

</div>

## HeaderData-Comps
<div class="markdown-table">

|  Attribute  |  Description   | Type  | Default|  Require|
|-------|---------|------|--------|----------|
|label|component label|String|-|true|
|comp|the component name|String|-|true|
|event|trigger event type|String|-|true|
|props|the component's props|Object|-|-|
|showRules|display rule|Function return Boolean|-|-|
|disableRules|disabled rule|Function return Boolean|-|-|

</div>

## Events

<div class="markdown-table">

| Event Name | Description | Attribute|
| ------ |----- | ---- |
|row-click|triggers when clicking a row|paramters: row, col, event|
|cell-click|triggers when clicking a cell|paramters: cell, row, col, event|
|selection-change|triggers when selection changes|returns the currently selected array of rows |
|sort-change|triggers when Table's sorting changes|paramters: column, prop, order |

</div>

