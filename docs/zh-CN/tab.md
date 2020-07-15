# Tab

## 代码演示

:::kview 

```html
<template>
    <k-tab  v-model="tab" :options="options"/>
    <span>
        tab:{{tab}}
    </span>
</template>

<script>

    export default {
        data() {
            return {
                options: [{
                        label: "tab1",
                        value: "1",
                    },
                    {
                        label: "tab2",
                        value: "2",
                    },
                ],
                tab:'',
            }
        },
    };
</script>
```

:::



