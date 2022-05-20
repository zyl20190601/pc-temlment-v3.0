## useLinkage 封装

> 省市区 饿了么三级联动二次分装，解决代码的臃肿问题
> _该方案仅提供一种实现方式，具体可根据自己页面业务复杂程度而定，主要是填过 hooks 进行封装_

### 使用方法

```html
<template>
  <div class="city-box">
    <div class="city-title">省：</div>
    <ProvinceSelect v-model="formData.province" :clearable="false" />
    <div class="city-title">市：</div>
    <CitySelect v-model="formData.city" />
    <div class="city-title">区：</div>
    <AreaSelect v-model="formData.area" />
  </div>
</template>
```

```js
import { defineComponent } from 'vue'
import { useLinkage } from '@/hooks/use-linkage/index'

<script lang="ts" setup>

import { reactive } from '@vue/reactivity'
import { useLinkage } from '@/hooks/use-linkage/index'
const { ProvinceSelect, CitySelect, AreaSelect } = useLinkage()

const formData = reactive({
  province: '2',
  city: null,
  area: null
})
</script>;
```

详见 useLinkage/index.js 及 components/city-linkage/index.vue
