#  Loading 加载动画

### 使用

:::kview 

```html
<template>
    <chat-box :data-source="data"/>
    <textarea style="width:100%;height:100px;" v-model="value"/>
     <button class="btn" @click="send">send</button>
</template>

<style>
   .btn {
            padding: 4px 10px;
            color: #409eff;
            background: #ecf5ff;
            border-color: #b3d8ff;
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            background: #fff;
            border: 1px solid #dcdfe6;
            color: #606266;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            outline: none;
            margin: 0;
            transition: .1s;
            font-weight: 500;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            padding: 12px 20px;
            font-size: 14px;
            border-radius: 4px;
        }


</style>

<script>
import Vue from 'vue'
    import ChatBox from '../../src/components/chat-box'
    import Text from '../../src/components/text'
    import Image from '../../src/components/image'
    Vue.use(ChatBox);
    Vue.use(Text);
    Vue.use(Image);
    
    export default {
        data() {
            return {
                data:[
                     {
                        position:"center",
                        comp:"text",
                        content:"welcome chat room",
                    },
                    {
                        position:"left",
                        comp:"text",
                        content:"Hello , I'm Gorge",
                    },
                    {
                        position:"right",
                        comp:"text",
                        content:"Hello, I'm Chen , Nice to meet you.",
                    },
                    {
                        position:"left",
                        comp:"image",
                        content:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhISEhIPDxIVEhAPDw8PDw8PDw8QFRIWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAPFS0dFR0tKy0tLS0rLy8tKy0rKy03Ky0rKy0rMDcvLSstNzA1KystMC0rKystLC8wLTc3NysrN//AABEIAMUBAAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EADYQAAIBAwMDAwMCBAUFAQAAAAABAgMEEQUSITFBUQZhcRMigTKRFGKhsRUjcsHRBzNCUpIW/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQGBf/EACYRAQEAAgEEAQMFAQAAAAAAAAABAhEDBBIhMUFRcfATFCIjMgX/2gAMAwEAAhEDEQA/ALGaxwJXlZRTYWpUfLOb1u8be1duonRc/BG9uHORlJC6GY8Fxja3jkLkWczPq8lJGmwNSZFzASmLYFUjJAoslOQgnsNxgZCQRvAzkFhEdsKTbyhPcXvp6llP5JyrTCeWV7ZYyCtXhlxqdHEVL8MqKf8AyRK0rV9BSg/ZopJxwy0qVcRkvdFVcS5NJWWadeRlnL7gVxLHBuxeWFOOhspZFtQp8sNpzN3a5M16c/V4ZUXqxLJdX2MlVeLJXwzsAoVnGSa+TvNK1BVILz3+TzvJeemr3bPa+j4Iqsa7ZSXc3t4BqcTbz2Gdb5IyJ5McchsBG0ZUI5BI19UjGDl+yOKrT3Sb8vJfeo6sY/ZF/Jz6HKmtwQSrLCIxBXMyoVjW40pEGzIsNkJUfAJGqszIIAnk02aNSYwNFjFR8JicGHT+38oFQVS4Or9KLKON3nZ+kuIkZNcFxrUV9J/DZyarcfuXGv3bcZc8dEjl8SZMO+WXVbH55EHUyzV1V5AU/JcrK+zNSpkNpnLYm1k6HQ7Lak2ueotqkWlnQwgFz3ZaxpNrH7id/S4JaVyd/PliFznC+C5uLXc+ndL+pYarpMdmUsNDiLHCT6hLGpia+SV9QcWKxfII9V6bp1Nyih+Nqyi9NXMpRST5x39i/UavlCVtJ0SLtjMVfYzbV8oehtCdq2Y7ZksVfYz/ADfb9xDbjdRrbpsUiZVn1NQZcQmnyLXT+4PTfItcP7mBVmTMgskkxEyTCU3wBbC0SoBIIHV4YZAbhcgqIUp8jsP0v8FfDqPU+j+AlDUI5aXudrokcQXwcfpccyTfTqdZbTls+1YXeX+yIrbGeCus1MyUFzjl/IlXahH3wOOg08ldc0pSeOW30QlaU045YxC2eC7s9H8rLHXp2Ow0zFU6TpuZbpL4R1llZgLO2wdHY25K5Crt8Iqb+B187bg5rVKWHgKFLG25T98llUo5i15J2lHPI7UlBLlpfI4HnXqawxFvHTk5NnqOsxhOM8NNbZdPg8zlDhfJTDPw6n0/XcYxa6pnZQlUaT48nBen6vWLO702rmC9uBEnmp7GbqnsMmAZbdU8IzdU8IYMDYeaTZiZGTIxlyVUGYClTq/kahIVq9X8gQbZtMizfYA0hmihaCG6EeBgRx4YC4/8fgbpvqvYXrriIKLU1yOtYi/wDoUuG/gOo7ntXsKK0f8AT1m2tz88fB2VvbtxXHAho9liKWC/p4UUidtscVVXtG+MC86dKisyay+76v2SGdSu6nSnHc/PYU0/T8vfVzOfXn9MfZIJNqy8RWXfqynTyqdPc+jlN4X7IHp3qKpWb+xcLOIvt+RDV/Tld1p/TpuUW8xaxjku/SvparTblVxBNbducyeepVkY43K102kUlVhGceU3j4fg6ews+OSOi6dCEFCEdsVz7t+WXkKaQpGtuiztljocprVi92cHbrAlqNqprhchkmV5br06tKnJwe3Ec5XX4R59Xvqs5tuU38ts9svtOjJNOKfZprj4OUvfSVu3lRnT/wBL+39mG4VwyrkYTmopptJrlduhT0ae94R6JU0PauMNYx05OEtY/TruMu0nF/uJGcFhbSpNPs+Uzq9Cus49/wC4tUoKpTcO6eYsr9MqunPa+Of2YJdyYCo1U0mFyI2GjbZrIB5hkjDqSa4Ir9aNGY030F6vUYqLoDuI8/gABIyZs1U6iAkEPQXAlSHI9BnA1LEjVRZa+DJrkNCIKkSxiCXnkf0K13VV85FYRy0vCwdN6Wtf8xvxH+7IrXGOq02x74LCjp+c58scs6SSHqFPgW2sVH+FR8G1pcV2L1RRvahn3KFafLtiP45GbXS0nl5b8sttqJKIFc26FNJE5sjkFVmPfhnrdS3ExaM0lllbU16nlxjKLa4aTTaJ2rt2cvqEevf+5W1bZMXudV68hNKvVUT5z3T8iXJovWs14PM/XelfSqxrRXEnh/6j1+pTycv6y0v6tvUil9yW6PyuQlLkx3NuOtJ/bF+Vn8AtZtelSP5/5IaTVUqEfMG4/gep1YyjteO6KcxvQLqM4Jd1x+S4+nHwcRptX6VZxbwn0+Tr6N7FpcgDH0o+DPpIH/ER8m/rx8iJ5tJEKKzJv8Epvk3bLj92aIbn1I1jcupGoMAxXJCXUPt4ALqIQemhp9AFNcje3gFwKKJxn1A15C8KuWkTaqOg02jlbn0zwdj6VgsSl5f9EjmLLP0ox6HUaHLCM7XRhHX058D9KXBRW9XJaUqottO05vMUwCmSTK2XaYUyW4WySUik9o7kCqRyacicALWlBqs6u2UEpJtNKSWeq6nL6X6dlR+9qUpcty7t9z0pwI/SXhE6PvecXtnWq8JOMe/lrwXvp20dOLTWFwlnwWWsajRpcYi5ePBSf/oo56JL2F6rSYZWbdGVGv3kKNKU5duEu8m+iLChcRlFNHHf9RKj2Ul23vP/AM8BfDXpuOcnJjjfTkKCS3NLG5uTS6fAxheFn+4vQYdGO69dOk4bh23CaAnaKU845WC/0qyVWUKUUnOTxmTws48ldSYWE3FpxbTTymnhpj7rvyy/YcWHHcePGSnL3S3SqujKX3Lw884zj9maWn/zMTuLicqsJSk5Sc4tt9W8nQbTXHLby3/U6WcGeOvdnn7vLnLqMwWEhSmv7jmTZ8hBrkhUCsDMCY5YQOC7mVJBKceAOJUX3CzuEQXgDOiJcQr1Mk7Gjzlm4UUPUYkVpjF7p3MfgutMqFLpfQtrZYeSK3xdJazLWjMo7SRZ0ZiarKMgimKQqBVMobH3mnUAuRvcA8COqEp1hORGpX2ocZ5VbKqVWua3CjBvKz2Ki51Su+IU3j/3lJJFTcWCq/8Aem5N84TxFBari4+6uQ1rXJyk5PIrpmofUfLOvren7VrmOflsSpembeEt0Mx9tzwLw6phlPsvtBvHja32ygfqa0dek0uZRe6Pu+6/YHY0lCf2+MMsqj4DXhzzO8fJ3T3HmtKWHh8ew5GWSWvKP1ZtcYw3ju8CNKp5MssbHqui67j5sfF8/Q/CWA31F17CTqrzn4HLLTZ1eZ5hT8f+UhTG109R1fHwY92dF0ik6tTfj7IdPeXY6EhRpRjFRikkuiRM3xmo8R1vV3qeW5318PLaS4QdgqfZewSfQ2rgEku4s3yML9ApHqLYE2Za8E5vsgNSp2CCOJ0zczcFwRYlCRpPAeC6BbWPBGtJJ4JrSLXTJlzbs5uwrYZf2sydNZV7ayLGjMqKE8DlKqJrFrGQWMxCnVDKoMze8z6go6hp1QI25kVDcLQllllSp4QIpK6t01xwznL+lKP/ACjsKlMqdSs20x6OZXH046rdNdGQV1UfRD8dO+7lDtLThaX+vmhpdJpNy5b/AKB7m4wgs4bUc9r19sg+eXxH3k+g4wyy92uXuLlyrVc95cL2XA0lmCTXK6PvgQ1GH6aq74UvkfsKyeM8/wC5djLDkyxvdjdU3oFo985PnGFH2fU6aCEdOo7Y89W9z/PYfgTrQz5Ms7vK7qRhhgIeW0HljE1wK2j5HJGiUaf6cC2OQ2cAu4ED3DxkBXULSAGJ8RJqGcAa8uMB7aXQVaQehLApue55Gaj2y9gd1Sw8oVUJRkX1hcdDnqDHrapgirjrqNQap1CitLosadYGkyWkawRVysVUkqolbWarmlVEFVJRqgNrm1mkPwuDnY3OA9O6Al+qxuUkyjV57kJ6ljuMllOlHPYjPbFFN/iYrd6r7gmj6ldJZ5PM9e1X6tVbX9sJZXu0+o76q1/OaUHy/wBTXZeDlKTKZZZbdfqFP7ZJdJRU4/gR0642uOezHJ1N1vSl3X2srqUOB1Ed7b1U0muUxmDKT05Ubhh9uC8SFQmzDRgg8ospcjzK6xfJYs1RsGqzVNG58kaTEYDfIRPBqpH7jc1yFJvcMUZdBZoJRkJcOXTykwlOe6HuAk+CNrUw8CqpRaT5GqbFprDD0mTVHqUmh6hcMSoh0hNIsY3BNVyviye4AeVwTVwV243vAbWH8SRleNCDqAqlwkA2sJXsgE7mXkrbi9UU34WTk731DVm2ovZH264HIi56dhdarCmvukvjPJz91rsqjcY8Jrr3KiqnKmp5beWpC1Gbi8lyMbnajPq8+RmlH7fyCqyTk35GaS+xgUXFhVzQ2+JInBYwhDT5YWPJbW0cyTfshVTqNEt9sc4xktUgFCaSXwG+oiaE8GsEfqIx1F5DQeQWU+S1RUWiLeHQ1QFT7mqa5N0nyySXIjgVXqRmTrLk1VXQKIyLMiuTSRjZKobTA9GSjIiwMzvygtFi0GGpMmri0tmOxRXW7LOgw0tmwmohdpmwAHtISCyQGqAAqSFpch5o1tEm1R+oam2lju+Dk4l56orZnGPjkp3SxwaYscva20tKdOcPyivlHGUEtKrpvJu5knJtd+SkwGI5D9ItSXJYRpkVUZQ7HQVIbYw/DKKksMv4yU6cfKwI1xb3awuGMK6/lkRtqcUl8DMVH2AAfxP8sjP4r+VjWI+xjUQDyyziXFK1m10ePPYQtIbWn/Q6yd6p0ofao4XYvZTGqO1tN0pLwDcMSaLTRlmVR+wjffrYDRKsuWQjyhiuujBNATGgbG1HKAzpEKQpSCtAoRDxQGjB4GaaBOmHtX2YHDlsyxoSK2MMMboSJaSrKMgiYtTkFUhqSkgFVB9wKXItkWcQdXoNyiJXfRgmuW1CkpSc+vOCtr4yXdlR3xqR7rLKWpSeWVtFjTmmjUUajEZp0h7Rpq3hyN1JgYx5N1ApxKnMvNInn7TnYs67/pzdRjXrPL3q3qSpronhpye7D2tJcec4Hjj3WT6lll2y2/C0p06mPbGej6eQsKVR9H78LsdvWq7vqRcpRX+cqlFQeylSVPbuU+jSTg9q7yG7aqlCnte2CVLFTa5NxVPKTjhdUstcrkXP/Trfz+fl9M8OWZS3Tgf4er0zz4xySnZ1kk3lJ/pbjhP4fc7O5xHdVy1VVOEXKWVxJtRaxy5tJPHyDrKco1XUbkoxnGpmnthGa/7TjHGVw1088vg04+K58f6m9QrzSZzHXmvOHp9OHCX5YjevHCNGGT0XWYY44eI1pTf39uBC8m92TRhb4Vbqr7QMGYYApmj0NVehhhFV8F6fUaUcGzAONoPKktuTDAgSpzbQ1QZhgquHqYdGGBWjDNpswlIcxK6XBhgFVbo1JfVq/wCkptQglOXyYYUmEnHkbT+0wwpFL05vIWqYYIA5DaVqNWhUVSm0pJSjzFSjKMlhxlF8NM2YAru9F9aXE2ounbrCe2UISi47v1PG7Dy+eeDobLWqsYqOKcsRUYucE5KKWNuV1WOOTDAy/l/ryjtk9Qb/ABuq5bsQxt2fT+7ZjO5PrlvPuY9Tn9yUaUdykm40oxf3dcNeTDBy2TU9H2z3p//Z",
                    },
                   
                ],
                value:"",
            }
        },
        mounted(){
            setTimeout(()=>{
                this.data.push(
                    {
                        position:"right",
                        comp:"text",
                        content:"hello  ...",
                    }
                );
            },1000)
            setTimeout(()=>{
                this.data.splice(1,1,
                    {
                        position:"center",
                        comp:"text",
                        content:"person 1 ---  Withdraw message ...",
                    }
                )
            },3000)
        },

        methods:{
            send(){
                this.data.push(
                    {
                        position:"right",
                        comp:"text",
                        content:this.value,
                    } 
                );
                this.value = "";
            }
        },
       
    };

</script>
```

:::

###  Attributes
<div class="markdown-table">

|  属性  |  说明   |  类型|可选值|默认值|是否必须
|-------|---------|---|---|---|---|
|callback|回调函数|Function|-|-|-
|background|背景色|String|-|rgba(0, 0, 0, .6)|-
|color|加载图标颜色|String|-|#4b9cdb|-

</div>


###  Events
<div class="markdown-table">

| 方法名 | 说明 |
| ------ |----- | 
| show | 显示提示 | 详见Attributes表 |
| hide | 隐藏提示 | 详见Attributes表 |

</div>

