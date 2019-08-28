# `|` VUE 树形控件
### version： 1.0.0
### author： SoldierAb
### 用清晰的层级结构展示信息，可下拉选择、展开或折叠，提供单选多选功能，支持v-model双向数据绑定

## 使用

```html
<template>
  <div>
   <tree
      only-leaf
      show-checkbox
      type="tree"
      v-model="selectValue"
      :label-key="labelKey"
      :value-key="valueKey"
      :data-source="list"
      @on-toggle-expand="toggleExpand"
      @on-select-change="selectChange"
      @on-check-change="checkChange"
    ></tree>
  </div>
</template>

<script>
import {Tree} from "k-view";

// Vue.use(Tree)  

export default {
  components: {Tree},
  data() {
    return {
        list: [
        {
          name: "霍山县",
          pId: "341500000000000",
          open: "False",
          id: "341525000000000",
          children: [
            {
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
        }
      ],
      showCheckBox: false,
      type:'select',
      labelKey: "name",
      valueKey: "id",
      childrenKey:'children',
      selectValue:'341525401000000',       //双向数据绑定当前选中值
    };
  },
  mounted(){
    setTimeout(()=>{
      this.selectValue = "341525106000000";
    },3000)
  },
  watch:{
      selectValue(){
          console.log('selectValue',this.selectValue);
      },
  },

  methods: {
    toggleExpand(node){
      console.log('toggleExpand',node);
    },
    selectChange(node){
      console.log('selectChange',node);
    },
    checkChange(nodes){
      console.log('checkChange',nodes);
    },
  }
};
</script>




```

### `|` Attributes

|  属性  |  说明   |  类型|可选值|默认值|是否必须|
|-------|---------|---|---|---|---|
|dataSource|数据源| Array | - |-  |是
|type|组件类型|String|tree、select|select|-
|labelKey|数据显示key|String| -|label|是
|valueKey|取值key (不传默认传递节点完整数据)|String|-|value|-
|childrenKey|子集key|String|-|children|-
|v-model|双向数据绑定 , `props需传入valueKey，为 “,” 拼接的字符串`|String|-|-|-|
|multiple|单击多选|-|-|-|-
|only-leaf|只取叶子节点数据|-|-|-|-|
|show-checkbox|开启复选框（`复选框开启，v-model初始化可只传入需要选中的顶层节点的value`）|-|-|-|-|
|props|dataSource数据配置选项具体看下表|-|-|-|-|



### `|` Props


|  参数  |  说明   | 类型  | 默认值|  是否必须|
|-------|---------|------|--------|----------|
|selected|节点单选选中|Boolean|-|-
|checked|节点多选选中|Boolean|-|-
|expand|节点展开|Boolean|-|-



### `|` Events
| 方法名 | 说明 | 参数|
| ------ |----- | ---- |
|on-toggle-expand|节点被点击展开收缩的时触发|传递 `dataSource` 属性的数组中该节点所对应的对象 （ 对象中`expand`属性即当前展开状态 ）
|on-select-change|Attributes不含show-checkbox，节点被点选的时触发|传递 `dataSource` 属性的数组中所选中的对象 |
|on-check-change|Attributes含show-checkbox，节点checkbox被点击的时触发|传递 `dataSource` 属性的数组中所选中的对象 |


### `|` methods
| 方法名 | 说明 | 参数|
| ------ |----- | ---- |
|getSelectedNodes|获取当前单击选中的所有节点|-|
|getCheckedNodes|获取当前多选选中的所有节点|-|
