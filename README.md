# 丁香通 PC 端 组件库

## 业务组件库产生背景

在实际项目中，同一条业务线一般都有自己的一套规范，这套规范可能是基于 antd 等通用 UI 组件的改造，很多时候业务场景都是相似的，为保证多个项目的通用组件统一视觉和交互，因此根据实际业务场景，抽出通用组件形成业务组件库就很有必要，同时也更容易维护。

## 一、技术栈

基于 react + antd 根据统一设计规范抽出业务通用组件库文档站基于 react-styleguildist + webpack 最终的业务组件用 rollup 打包

## 二、业务组件开发原则

和交互设计确定好规范，梳理业务场景，把可通用复用的部分抽成业务组件库

## 三、开发组件&文档

### 安装依赖

```
yarn install
or
npm install
```

### 调试、开发组件库启动文档服务

```
yarn doc
or
npm run doc
```

### 组件开发

新组件以文件夹形式统一放到 `components` 下，最终在 `components` 下的 `index.js` 文件中导出

### 文档打包

```
yarn build_doc
or
npm run build_doc
```

## 二、组件库打包

```
yarn build
or
npm run build
```

## 三、发布到 npm

```
npm publish
```
