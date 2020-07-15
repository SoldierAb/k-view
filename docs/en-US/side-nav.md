# SideNav

### Basic usage

:::kview

```html
<template>
    <el-button type="primary" size="small" @click="changeData">changeData</el-button>
    <k-side-nav :data-source="menuData" />
</template>

<script>

    export default {
        data() {
            return {
                menuData: [{
                    "label": "Home",
                    "value": "home",
                    "icon": "home"
                }, {
                    "label": "Black List",
                    "value": "black",
                    "icon": "black"
                }, {
                    "label": "White List",
                    "value": "white",
                    "icon": "white"
                }, {
                    "label": "Voice Menu",
                    "value": "voice",
                    "icon": "voice",
                    "children": [{
                        "label": "voice conpare",
                        "value": "voice-compare",
                        "props": {
                            "style": "padding-left:10px;"
                        }
                    }, {
                        "label": "voice verify",
                        "value": "voice-verify",
                        "props": {
                            "style": "padding-left:10px;"
                        }
                    }, {
                        "label": "voice check",
                        "value": "voice-check",
                        "props": {
                            "style": "padding-left:10px;"
                        }
                    }]
                }, {
                    "label": "Company Management",
                    "value": "company",
                    "icon": "company",
                    "children": [{
                        "label": "Account Manage",
                        "value": "company-account",
                        "props": {
                            "style": "padding-left:10px;"
                        }
                    }, {
                        "label": "Role Manage",
                        "value": "company-role",
                        "props": {
                            "style": "padding-left:10px;"
                        }
                    }]
                }, {
                    "label": "Fail Record",
                    "value": "fail",
                    "icon": "fail"
                }, {
                    "label": "Logs",
                    "value": "log",
                    "icon": "log"
                }]
            }
        },
        methods:{
            changeData(){
                    this.menuData=[{
                            "label": "Fail Logs",
                            "value": "fail",
                            "icon": "fail"
                        }, {
                            "label": "Actions Records",
                            "value": "log",
                            "icon": "log"
                     }]
            }
        }
    };
</script>
```

:::

