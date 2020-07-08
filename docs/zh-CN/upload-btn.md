# 上传按钮

### 使用

:::kview 

```html
<template>
  <k-upload-btn />
</template>

<script>

    export default {
        data() {
            return {
            }
        },
        methods: {
           
        },
    };

</script>
```

:::

##  Props
<div class="markdown-table">

|  参数  |  说明   | 类型  | 默认值|  是否必须|
|-------|---------|------|--------|----------|
|multiple|是否多选|Boolean|false|-
|headers|请求头信息|Object|-|-
|fileName|文件字段名|String|file|-
|data|附加上传数据|Object|-|-
|url|上传接口|String|-|是
|withCredentials|是否支持cookie验证|Boolean|false|-
|beforeUpload|上传之前验证函数; 接收参数：（fileName : string, file : File）,需Promise返回过滤后的文件|Function|-|-
|onProgress|上传进度函数；接收参数：（e : Event, file : File, fileList : Array\<File\>）|Function|-|-
|onSuccess|上传成功函数;接收参数：（res : Result, file : File, fileList : Array\<File\>）|Function|-|-
|onError|上传失败函数；接收参数：（err : Error, res：result, file : File, fileList : Array\<File\>）|Function|-|-

</div>


