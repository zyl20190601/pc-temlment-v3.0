import { ElSelect, ElOption } from 'element-plus'
// import 'element-plus/es/components/select/style/css'
// import 'element-plus/es/components/option/style/css'

import { ref, createVNode, computed } from 'vue'
const cityTree = [
  {
    id: '1',
    name: '湖北',
    children: [
      {
        id: '11',
        name: '武汉',
        children: [
          {
            id: '111',
            name: 'A区'
          },
          {
            id: '112',
            name: 'B区'
          }
        ]
      },
      {
        id: '12',
        name: '宜昌',
        children: [
          {
            id: '121',
            name: 'C区'
          },
          {
            id: '112',
            name: 'D区'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: '山东',
    children: [
      {
        id: '21',
        name: '济南',
        children: [
          {
            id: '211',
            name: 'E区'
          },
          {
            id: '212',
            name: 'F区'
          }
        ]
      },
      {
        id: '22',
        name: '潍坊',
        children: [
          {
            id: '221',
            name: 'G区'
          },
          {
            id: '222',
            name: 'H区'
          }
        ]
      }
    ]
  }
]

// 将一个子节点创建为ElOption的VNode
const createOptionVNode = ({ id, name }: ObjectType) => {
  return createVNode(ElOption, { value: id, label: name })
}
// 将一个子节点数组，创建为一群ElOption的VNode的数组
const createOptionVNodes = (arr: ObjectType[]) => {
  return arr.map(createOptionVNode)
}

// 公共属性下拉配置
const attrs = {
  filterable: true,
  clearable: true,
  placeholder: '请选择'
}

export const useLinkage = (): ObjectType => {
  // 省
  const currentProvince = ref(null)
  let onProvinceOriginChange: any
  const onProvinceChange = (v: any) => {
    if (onProvinceOriginChange) {
      onProvinceOriginChange(v)
    }
    currentProvince.value = v
    onCityChange(null)
    onAreaChange(null)
  }

  const ProvinceSelect = (props: ObjectType, context: ObjectType) => {
    const provinceOptions = createOptionVNodes(cityTree)
    onProvinceOriginChange = context.attrs['onUpdate:modelValue']
    currentProvince.value = context.attrs.modelValue
    return createVNode(ElSelect, { ...attrs, ...context.attrs, 'onUpdate:modelValue': onProvinceChange }, provinceOptions)
  }

  // 市
  const currentCity = ref(null)
  let onCityOriginChange: any
  const onCityChange = (v: any) => {
    if (onCityOriginChange) {
      onCityOriginChange(v)
    }
    currentCity.value = v
    onAreaChange(null)
  }
  const cities = computed(() => {
    return cityTree.find(t => t.id == currentProvince.value)?.children ?? [];
  })
  const CitySelect = (props: ObjectType, context: ObjectType) => {
    const cityOptions = createOptionVNodes(cities.value)
    onCityOriginChange = context.attrs['onUpdate:modelValue']
    return createVNode(ElSelect, { ...attrs, ...context.attrs, filterable: true, 'onUpdate:modelValue': onCityChange }, cityOptions)
  }

  // 区
  let onAreaOriginChange: any
  const onAreaChange = (v: any) => {
    if (onAreaOriginChange) {
      onAreaOriginChange(v)
    }
  }
  const areas = computed(() => {
    if (currentProvince.value == null && currentCity.value == null) {
      return []
    }
    return cities.value.find(t => t.id == currentCity.value)?.children ?? []
  })

  const AreaSelect = (props: ObjectType, context: ObjectType) => {
    const areaOptions = createOptionVNodes(areas.value)
    onAreaOriginChange = context.attrs['onUpdate:modelValue']
    return createVNode(ElSelect, { ...attrs, ...context.attrs, 'onUpdate:modelValue': onAreaChange }, areaOptions)
  }

  return {
    ProvinceSelect,
    CitySelect,
    AreaSelect
  }
}
