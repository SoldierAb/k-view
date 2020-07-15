# markdown 编辑器

## 代码演示

### 编辑模式
:::kview

```html
<template>
    <k-markdown v-model="content" @onsave="saveMd" />
</template>

<script>

    export default {
        data() {
            return {
                content: ":laughing: Thank you for using k-markdown at edit mode",
                isMine: true,
            }
        },
        methods: {
            saveMd(str, renderStr) {
                console.log(str, renderStr);
            }
        },
    }
</script>
```

:::

### 预览模式

:::kview

```html
<template>
    <k-markdown v-model="content" mode="preview" @onsave="saveMd" />
</template>

<script>
    export default {
        data() {
            return {
                content: ":kissing_heart: Thank you for using k-markdown at preview mode",
                isMine: true,
            }
        },
        methods: {
            saveMd(str, renderStr) {
                console.log(str, renderStr);
            }
        },
    }
</script>
```

:::

##  Props

<div class="markdown-table">

|  Attribute  |  Description   | Type  | Default|  Require|
|-------|---------|------|--------|----------|
|mode|模式(editor、preview)|string|editor|-
|v-model|双向绑定，markdown 字符串|string|-|-
|markdownOption|markdown配置，[参考链接](https://github.com/hinesboy/mavonEditor#props)|object|详见markkdownOption 默认配置|-

</div>


### markdownOption 默认配置

```javascript
{
    bold: true, // 粗体
    italic: true, // 斜体
    header: true, // 标题
    underline: true, // 下划线
    mark: true, // 标记
    superscript: true, // 上角标
    quote: true, // 引用
    ol: true, // 有序列表
    link: true, // 链接
    imagelink: true, // 图片链接
    help: true, // 帮助
    code: true, // code
    subfield: true, // true -需要分栏
    fullscreen: true, // 全屏编辑
    readmodel: true, // 沉浸式阅读
    undo: true, // 上一步
    trash: true, // 清空
    save: true, // 保存（触发events中的save事件）
    navigation: true,
    boxShadow: false,
    ediMarkDown: false,
    toolbarsFlag: false,
    defaultOpen: "preview",
    toolbars: {
        navigation: true, // 导航目录
    },
```

