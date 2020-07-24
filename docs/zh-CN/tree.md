# VUE 树形控件

  用清晰的层级结构展示信息，可下拉选择、展开或折叠，提供单选多选功能，支持v-model双向数据绑定

## 代码演示

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
        <button class="btn" @click="onlyLeaf=!onlyLeaf">是否只绑定叶子节点数据-> onlyLeaf : {{onlyLeaf}}</button>
        <button class="btn" @click="showCheckbox = !showCheckbox">是否展示多选-> showCheckbox : {{showCheckbox}}</button>
        <button class="btn" @click="multiple = !multiple;showCheckbox = false">是否打击多选 (showCheckbox should be false)-> multiple : {{multiple}} </button>
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
                    name: "霍山县",
                    pId: "341500000000000",
                    open: "False",
                    id: "341525000000000",
                    children: [{
                            name: "衡山镇",
                            pId: "341525000000000",
                            open: "False",
                            id: "341525100000000",
                            children: [{
                                    name: "衡山镇",
                                    pId: "341525000000000",
                                    open: "False",
                                    id: "341525100000000"
                                },
                                {
                                    name: "与儿街镇",
                                    pId: "341525000000000",
                                    open: "False",
                                    id: "341525104000000"
                                },
                            ]
                        },
                        {
                            name: "与儿街镇",
                            pId: "341525000000000",
                            open: "False",
                            id: "341525104000000"
                        },
                        {
                            name: "黑石渡镇",
                            pId: "341525000000000",
                            open: "False",
                            id: "341525105000000"
                        },
                        {
                            name: "诸佛庵镇",
                            pId: "341525000000000",
                            open: "False",
                            id: "341525106000000"
                        },
                        {
                            name: "高桥湾现代产业园",
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
                selectValue: '341525401000000', //双向数据绑定当前选中值
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

|  属性  |  说明   |  类型|可选值|默认值|是否必须|
|-------|---------|---|---|---|---|
|dataSource|数据源| Array | - |-  |是|
|width|占用宽度(溢出文本将展示tip)|Number| -|260|-|
|position|文本溢出tip展示位置|string|top、left、right、bottom|top|-|
|labelKey|数据显示key|String| -|label|是
|valueKey|取值key (不传默认传递节点完整数据)|String|-|value|-|
|childrenKey|子集key|String|-|children|-|
|v-model|双向数据绑定 , `props需传入valueKey，为 “,” 拼接的字符串` |String|-|-|-|
|multiple|单击多选|-|-|-|-|
|only-leaf|只取叶子节点数据|-|-|-|-|
|show-checkbox|开启复选框（ `复选框开启，v-model初始化可只传入需要选中的顶层节点的value` ）|-|-|-|-|
|props|dataSource数据配置选项具体看下表|-|-|-|-|

</div>

##  Props

<div class="markdown-table">

|  参数  |  说明   | 类型  | 默认值|  是否必须|
|-------|---------|------|--------|----------|
|selected|节点单选选中|Boolean|-|-
|checked|节点多选选中|Boolean|-|-
|expand|节点展开|Boolean|-|-

</div>

## Events

<div class="markdown-table">

| 方法名 | 说明 | 参数|
| ------ |----- | ---- |
|on-toggle-expand|节点被点击展开收缩的时触发|传递 `dataSource` 属性的数组中该节点所对应的对象 （ 对象中 `expand` 属性即当前展开状态 ）
|on-select-change|Attributes不含show-checkbox，节点被点选的时触发|传递 `dataSource` 属性的数组中所选中的对象 |
|on-check-change|Attributes含show-checkbox，节点checkbox被点击的时触发|传递 `dataSource` 属性的数组中所选中的对象 |

</div>

### Methods

<div class="markdown-table">

| 方法名 | 说明 | 参数|
| ------ |----- | ---- |
|getSelectedNodes|获取当前单击选中的所有节点|-|
|getCheckedNodes|获取当前多选选中的所有节点|-|

</div>


### Slot

<div class="markdown-table">

|  插槽名 | 描述 | 接收参数 |
| ------ |----- | ---- |
|custom-node|自定义树节点的内容|{ nodeData,children }|

</div>

