# Upload Button

### Basic usage

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

|  Attribute  |  Description  | Type  | Default|  Require |
|-------|---------|------|--------|----------|
|multiple|whether uploading multiple files is permitted|Boolean|false|-
|headers|request headers|Object|-|-
|fileName|key name for uploaded file|String|file|-
|data|additions options of request|Object|-|-
|url|request URL|String|-|true
|withCredentials|whether cookies are sent|Boolean|false|-
|beforeUpload|hook function before uploading with the file to be uploaded as its parameter. If false is returned or a Promise is returned and then is rejected, uploading will be aborted; Paramters：（fileName : string, file : File）|Function|-|-
|onProgress|hook function when some progress occurs; Paramters:（e : Event, file : File, fileList : Array\<File\>）|Function|-|-
|onSuccess|hook function when uploaded successfully; Paramters:（res : Result, file : File, fileList : Array\<File\>）|Function|-|-
|onError|hook function when some errors occurs; Paramters:（err : Error, res：result, file : File, fileList : Array\<File\>）|Function|-|-

</div>


