## mapState | mapGetters 封装

> 主要是意在解决在同时获取多个 store.getters 等 代码给出提示，防止输入错误,让页面代码可读性更高和解决臃肿问题
> _该方案仅提供一种实现方式，具体可根据自己页面业务复杂程度而定_

### 提示

1. 模块之间不能有重复的 Getters 方法/state 名字 ，否则只会取到最后一个，根目录上的待实现

### 使用方法

```js
import { defineComponent, toRefs } from 'vue'
import { useGetters, useState } from "@/hooks/useStoreMap";

<script lang="ts">

export default defineComponent({
    setup() {
      const userInfo = useGetters(['user/getterUserInfo','app/getterBaseUrl'])
      const baseUrl = useState(['user/userInfo','app/baseUrl'])

      return toRefs({baseUrl,userInfo})
  }
</script>;
```

详见 useStoreMap/index.js
