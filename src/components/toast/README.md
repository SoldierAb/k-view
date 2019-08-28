# `|` VUE TOAST 轻消息提示框
### version： 1.0.0
### author： SoldierAb
### 可定制化轻消息提示框

## 安装
```
npm i @idev4/vue-toast
```

## 使用
```html
<script>
    import toast from '@/components/vue-toast'

    Vue.use(toast,{   //样式定制
      color:'red',
      background:'lightblue'
    });


        this.$toast.center('error','提示信息');  
    
        this.$toast.top('info','提示信息',1500);
    
        this.$toast.bottom('success','提示信息',()=>{              //默认为 2000 = 2秒
            //do something
        })  
    
        this.$toast.left('warning','提示信息',1500,()=>{           //设置1.5秒后消失
            //do something
        });
    
        this.$toast.hide();       //隐藏

<script>
    
```



### `|` Attributes
|  属性  |  说明   |  类型|可选值|默认值|是否必须
|-------|---------|---|---|---|---|
|type|提示风格|String|info,success,warning,error|info|-
|msg|提示信息|String|-|提示信息|-
|callback|回调函数|Function|-|-|-



### `|` Events



| 方法名 | 说明 |
| ------ |----- | 
| center | 中心位置提示 | 详见Attributes表 |
| top | 顶部位置提示 | 详见Attributes表 |
| left | 左边位置提示 | 详见Attributes表 |
| right | 右边位置提示 | 详见Attributes表 |
| bottom | 底部位置提示 | 详见Attributes表 |
| hide | 隐藏提示 | 详见Attributes表 |
