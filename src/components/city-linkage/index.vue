<template>
  <div class="city-box">
    <div class="city-title">省：</div>
    <ProvinceSelect
      v-model="formData.province"
      placeholder="请选择"
    />
    <div class="city-title">市：</div>
    <CitySelect
      v-model="formData.city"
      placeholder="请选择"
    />
    <div class="city-title">区：</div>
    <AreaSelect
      v-model="formData.area"
      placeholder="请选择"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from '@vue/reactivity'
import { useLinkage } from '@/hooks/use-linkage/index'
const { ProvinceSelect, CitySelect, AreaSelect } = useLinkage()

const formData = reactive({
  province: '2',
  city: null,
  area: null
})
</script>

<style lang="scss" scoped>
.city-box {
  height: 44px;
  display: flex;
  align-items: center;

  .city-title {
    margin-right: 5px;
    margin-left: 10px;
  }

  ::v-deep {
    .el-select {
      .el-input {
        width: 130px;
      }
    }
  }
}
</style>
