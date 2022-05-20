## 动态组件

## 用法

```js
  <dynamic-component
    :renderMethod="render"
    :sourceData="data"
  />

...

import dynamicComponent from '@/components/dynamic-component'

...

components: {
  dynamicComponent
}

...

```

## props

| field        | description  |   type   |
| ------------ | ------------ | :------: |
| renderMethod | 渲染方法     | function |
| sourceData   | 列表数据源的 |  object  |

## 原理

使用 vue3 的 `h` 方法来渲染，类似 kfang-common 的 kf-dynamic-component 组件，配置基本一致

[ 详见§ ](https://v3.cn.vuejs.org/api/global-api.html#h)
