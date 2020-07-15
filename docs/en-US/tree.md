# Tree

### Basic usage

:::kview

```html
<template>
    <k-tree 
        v-model="selectValue" 
        :show-checkbox="showCheckbox" 
        :only-leaf="onlyLeaf" 
        :multiple="multiple" 
        :label-key="labelKey" 
        :value-key="valueKey" 
        :data-source="list" 
        @on-toggle-expand="toggleExpand" 
        @on-select-change="selectChange" 
        @on-check-change="checkChange" 
    />
    <div class="attrs-box">
        <button class="btn" @click="onlyLeaf=!onlyLeaf"> onlyLeaf : {{onlyLeaf}}</button>
        <button class="btn" @click="showCheckbox = !showCheckbox"> showCheckbox : {{showCheckbox}}</button>
        <button class="btn" @click="multiple = !multiple;showCheckbox = false">multiple select mode (showCheckbox should be false)-> multiple : {{multiple}} </button>
    </div>
    <div class="data-box">
        <p>v-model -> {{selectValue}}</p>
    </div>
</template>

<script>
   

    export default {
        data() {
            return {
                onlyLeaf: true,
                showCheckbox: true,
                multiple: true,
                defaultExpandAll: true,
                list: [{
                    name: "Node-1",
                    pId: "341500000000000",
                    open: "False",
                    id: "341525000000000",
                    children: [
                        {
                            name: "Node-1-1",
                            pId: "341525000000000",
                            open: "False",
                            id: "341525100000000",
                            children: [{
                                    name: "Node-1-1-1",
                                    pId: "341525000000000",
                                    open: "False",
                                    id: "341525100000000"
                                },
                                {
                                    name: "Node-1-1-2",
                                    pId: "341525000000000",
                                    open: "False",
                                    id: "341525104000000"
                                },
                            ]
                        },
                        {
                            name: "Node-1-2",
                            pId: "341525000000000",
                            open: "False",
                            id: "341525104000000"
                        },
                        {
                            name: "Node-1-3",
                            pId: "341525000000000",
                            open: "False",
                            id: "341525105000000"
                        },
                        {
                            name: "Node-1-4",
                            pId: "341525000000000",
                            open: "False",
                            id: "341525106000000"
                        },
                        {
                            name: "Node-1-5-Overflow Content Node",
                            pId: "341525000000000",
                            open: "False",
                            id: "341525401000000"
                        }
                    ]
                }],
                showCheckBox: false,
                type: 'select',
                labelKey: "name",
                valueKey: "id",
                childrenKey: 'children',
                selectValue: '341525401000000', // binding value
            };
        },
        mounted() {
            setTimeout(() => {
                this.selectValue = "341525106000000";
            }, 3000)
        },
        watch: {
            selectValue() {
                console.log('selectValue', this.selectValue);
            },
        },

        methods: {
            toggleExpand(node) {
                console.log('toggleExpand', node);
            },
            selectChange(node) {
                console.log('selectChange', node);
            },
            checkChange(nodes) {
                console.log('checkChange', nodes);
            },
        }
    };
</script>

<style>
    .attrs-box {
        margin: 10px;
    }
    .btn {
            padding: 4px 10px;
            color: #409eff;
            background: #ecf5ff;
            border-color: #b3d8ff;
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            background: #fff;
            border: 1px solid #dcdfe6;
            color: #606266;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            outline: none;
            margin: 0;
            transition: .1s;
            font-weight: 500;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            padding: 12px 20px;
            font-size: 14px;
            border-radius: 4px;
        }

    .data-box p {
        margin: 10px;
    }
</style>
```

:::

## Attributes

<div class="markdown-table">

|  Attribute  |  Description   |  Type|Accepted Value|Default|Require|
|-------|---------|---|---|---|---|
|dataSource|tree data| Array | - |-  |true|
|width|node content width  (unit: px)|Number| -|260|-|
|position|position of node's Tip|string|top、left、right、bottom|top|-|
|labelKey|specify which key of node object is used as the node's label|String| -|label|true
|valueKey|specify which key of node object is used as the node's value (return node object when it's empty)|String|-|value|-|
|childrenKey|specify which node object is used as the node's subtree|String|-|children|-|
|v-model|binding value , ` valueKey field is required; string composed of the value of the object's valueKey and the comma ` |String|-|-|-|
|multiple|单击多选|-|-|-|-|
|only-leaf|only binding leaf node value|-|-|-|-|
|show-checkbox|whether node is selectable|-|-|-|-|
|props|configuration dataSource options, see the following table|-|-|-|-|

</div>

##  Props

<div class="markdown-table">

|  Attribute  |  Description   | Type  | Default|  Require|
|-------|---------|------|--------|----------|
|selected|node selected|Boolean|-|-
|checked|node checked|Boolean|-|-
|expand|node expanded|Boolean|-|-

</div>

## Events

<div class="markdown-table">

| Event Name | Description | Attribute|
| ------ |----- | ---- |
|on-toggle-expand|triggers when current node open|parameter: node （  `expand`  ）
|on-select-change|(`show-checkbox is false`)triggers when the selected state of the node changes|paramter: the currently selected array of nodes |
|on-check-change|(`show-checkbox is true`)triggers when the checked state of the node changes|paramter: the currently checked array of nodes  |

</div>

###  methods

<div class="markdown-table">

| Event Name | Description | Attribute|
| ------ |----- | ---- |
|getSelectedNodes|(`show-checkbox is false`)If the node can be selected , it returns the currently selected array of nodes|-|
|getCheckedNodes|(`show-checkbox is true`)If the node can be checked , it returns the currently checked array of nodes|-|

</div>

