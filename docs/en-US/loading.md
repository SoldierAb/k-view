#  Loading

### Basic usage

:::kview 

```html
<template>
    <el-button @click="toggleLoading">toggle show -> {{loading}}</el-button>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
            }
        },
        methods: {
            toggleLoading() {
                this.loading = !this.loading;
                console.log('loading', this.loading);
                this.$loading[this.loading ? 'show' : 'hide'](() => {
                    console.log('call-back');
                    setTimeout(()=>{
                        this.loading=false;
                        this.$loading.hide();
                    },3000)
                })
            },
        },
    };

</script>
```

:::

###  Attributes
<div class="markdown-table">

|  Attribute  |  Description   |  Type| Accepted Values | Default | Require
|-------|---------|---|---|---|---|
|callback|hook function after show or hide|Function|-|-|-
|background| background color of the mask|String|-|rgba(0, 0, 0, .6)|-
|color|dot color|String|-|#4b9cdb|-

</div>


###  Events
<div class="markdown-table">

| Event Name | Description |
| ------ |----- | 
| show | display |
| hide | hide | 

</div>

