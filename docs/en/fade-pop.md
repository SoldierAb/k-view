## FadePop

### Basic usage
:::kview
```html
<template>
    <a class="k-link" @click="showPop = true">click show</a>
   <k-fade-pop v-model="showPop" draggable modal-hidden footer title="title" :width="800" :height="400" @submit="submit">
       inner content
   </k-fade-pop>
</template>

<style>
    .k-link{
        padding:10px 20px;
        color:#3a8ee6;
      
    }
    .k-link:hover{
        cursor:pointer;
    }

</style>

<script>
    export default{
        data(){
            return {
                showPop:false,
            }
        },
        methods:{
            submit(){
                alert('submit');
            },
        },
    }
</script>

```
:::

##  Props

<div class="markdown-table">

|  Attribute  |  Description   | Type  | Default|  Require|
|-------|---------|------|--------|----------|
|value/v-model|binding value for display|Boolean|false|-
|modalHidden|whether FadePop can be closed by clicking the mask|Boolean|true|-
|title|title text|String|-|-
|beforeClose|hook function before closing |Function|-|-
|width|box width|String、Number|'60%'|-
|height|box height|String、Number|'80%'|-
|draggable|whether FadePop is draggable|boolean|false|-
|footer|FadePop footer|boolean ( true - display footer bar，justify-content:flex-end ) or String ( justify-content property support，default : flex-end ) |false|-

</div>