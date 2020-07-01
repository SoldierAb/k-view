# `|` A high quality UI Toolkit built on Vue.js
[![npm version](https://img.shields.io/npm/v/@cgj/k-view.svg?style=flat-square)](https://www.npmjs.org/package/@cgj/k-view)
[![build status](https://img.shields.io/travis/SoldierAb/k-view/master.svg?style=flat-square)](https://travis-ci.org/SoldierAb/k-view)
[![install size](https://packagephobia.now.sh/badge?p=@cgj/k-view)](https://packagephobia.now.sh/result?p=@cgj/k-view)
[![npm downloads](https://img.shields.io/npm/dm/@cgj/k-view.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@cgj/k-view)
![LICENSE](https://img.shields.io/badge/License-MIT-yellow.svg)

## Install
```shell
  npm i @cgj/k-view -S
```

## Quick Start
```javascript
import KView from '@cgj/k-view'
import '@cgj/k-view/lib/kview/style.css'
Vue.use(KView);

// or
import {
  Loading,
  Tree
  // ...
} from '@cgj/k-view'

Vue.use(Loading);
Vue.use(Tree);

```

## Language Support
```javascript
// import lang from '@cgj/k-view/lib/locale/lang/zh-CN' //  Use by default
import lang from '@cgj/k-view/lib/locale/lang/en'  
Vue.use(KView,{lang});

```

## On demand
With the help of [babel-plugin-kimport](https://github.com/SoldierAb/babel-plugin-kimport), we can import components we actually need, making the project smaller than otherwise.

First, install [babel-plugin-kimport](https://www.npmjs.com/package/babel-plugin-kimport):

```bash

  npm i -D babel-plugin-kimport

```

Then edit babel.config.js:

```javascript

module.exports = {
  [
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

## Browser Support
Modern browsers and Internet Explorer 10+.

## Development
Skip this part if you just want to use K-VIEW.

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/SoldierAb/k-view/releases).


## LICENSE
[MIT](LICENSE)
