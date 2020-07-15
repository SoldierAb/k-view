# 左侧菜单

## 代码演示

:::kview

```html
<template>
    <el-button type="primary" size="small" @click="changeData">修改数据</el-button>
    <k-side-nav :data-source="menuData" />
</template>

<script>

    export default {
        data() {
            return {
                menuData: [{
                    "label": "首页",
                    "value": "home",
                    "icon": "home"
                }, {
                    "label": "电话信道管理",
                    "value": "black",
                    "icon": "black"
                }, {
                    "label": "网路信道管理",
                    "value": "white",
                    "icon": "white"
                }, {
                    "label": "声纹应用",
                    "value": "voice",
                    "icon": "voice",
                    "children": [{
                        "label": "声纹比对",
                        "value": "voice-compare",
                        "props": {
                            "style": "padding-left:10px;"
                        }
                    }, {
                        "label": "声纹验证",
                        "value": "voice-verify",
                        "props": {
                            "style": "padding-left:10px;"
                        }
                    }, {
                        "label": "声纹检索",
                        "value": "voice-check",
                        "props": {
                            "style": "padding-left:10px;"
                        }
                    }]
                }, {
                    "label": "企业管理",
                    "value": "company",
                    "icon": "company",
                    "children": [{
                        "label": "账号管理",
                        "value": "company-account",
                        "props": {
                            "style": "padding-left:10px;"
                        }
                    }, {
                        "label": "角色管理",
                        "value": "company-role",
                        "props": {
                            "style": "padding-left:10px;"
                        }
                    }]
                }, {
                    "label": "失败记录",
                    "value": "fail",
                    "icon": "fail"
                }, {
                    "label": "操作日志",
                    "value": "log",
                    "icon": "log"
                }]
            }
        },
        methods:{
            changeData(){
                this.menuData=[{
                    "label": "失败记录",
                    "value": "fail",
                    "icon": "fail"
                }, {
                    "label": "操作日志",
                    "value": "log",
                    "icon": "log"
                }]
            }
        }
    };
</script>
```

:::



