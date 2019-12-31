# `|` Loading 加载动画
### 可定制化加载动画插件


## 使用
```html
<script>
  
    import Loading from "loading";
    
    Vue.use(Loading);

    //个性化定制
    // Vue.use(Loading,{
    //     background:'rgba(0,0,0,.5)',
    //     color:'blue'
    // });
  
     this.$loading.show(()=>{
     });
  
     this.$loading.hide(() => {
     
     });

<script>
    
```



### `|` Attributes
|  属性  |  说明   |  类型|可选值|默认值|是否必须
|-------|---------|---|---|---|---|
|callback|回调函数|Function|-|-|-
|background|背景色|String|-|rgba(0,0,0,.6)|-
|color|加载图标颜色|String|-|#4b9cdb|-



### `|` Events



| 方法名 | 说明 |
| ------ |----- | 
| show | 显示提示 | 详见Attributes表 |
| hide | 隐藏提示 | 详见Attributes表 |
