# `|` 基于 Vue.js 的UI组件库
[![npm version](https://img.shields.io/npm/v/@cgj/k-view.svg?style=flat-square)](https://www.npmjs.org/package/@cgj/k-view)
[![build status](https://img.shields.io/travis/SoldierAb/k-view/master.svg?style=flat-square)](https://travis-ci.org/SoldierAb/k-view)
[![install size](https://packagephobia.now.sh/badge?p=@cgj/k-view)](https://packagephobia.now.sh/result?p=@cgj/k-view)
[![npm downloads](https://img.shields.io/npm/dm/@cgj/k-view.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@cgj/k-view)
![LICENSE](https://img.shields.io/badge/License-MIT-yellow.svg)

## 安装
```shell
  npm i @cgj/k-view -S
```

## 快速开始
```javascript
import KView from '@cgj/k-view'
import '@cgj/k-view/lib/kview/style.css'
Vue.use(KView);

// 或
import {
  Loading,
  Tree
  // ...
} from '@cgj/k-view'

Vue.use(Loading);
Vue.use(Tree);

```

## 语言支持
```javascript
// import zhCN from "@cgj/k-view/lib/locale/lang/zh-CN"; //  默认使用
import en from "@cgj/k-view/lib/locale/lang/en";

import KView from '@cgj/k-view'
Vue.use(KView,{lang:en}); 
// 或

KView.locale.use(en);
```

## 按需加载
通过 [babel-plugin-kimport](https://github.com/SoldierAb/babel-plugin-kimport) 插件的帮助，我们可以按需引入使用的组件以减小打包体积.

首先，安装 [babel-plugin-kimport](https://www.npmjs.com/package/babel-plugin-kimport):

```bash

  npm i -D babel-plugin-kimport

```

修改 babel.config.js 的 plugins 配置项:

```javascript

module.exports = {
  plugins:[
    [
      'kimport',
      {
        libraryName: '@cgj/k-view',
        camel2DashComponentName: true,
      },
      'k-view'
    ],
  ],
};

```

## 浏览器支持
 Internet Explorer 10+ 等现代浏览器


## 版本日志
[release notes](https://github.com/SoldierAb/k-view/releases).


## LICENSE
[MIT](LICENSE)
