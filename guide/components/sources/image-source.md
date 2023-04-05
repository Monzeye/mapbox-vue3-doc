---
title: ImageSource
editLink: true
---

# ImageSource

图片数据源




## Apis

### Props

| 参数         | 说明         | 类型                              | 默认值   |
| ------------ | ------------ | --------------------------------- | -------- |
| id?          | SourceId     | string                            | 随机生成 |
| url?         | 图标地址     | ImageSourceOptions['url']         | -        |
| coordinates? | 图片坐标范围 | ImageSourceOptions['coordinates'] | -        |

### Emits

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| 无     | 无   | 无   |

### Slots

| name    | 说明                                               |
| ------- | -------------------------------------------------- |
| default | Layer图层，可以放入多个Layer，应用于此Source数据源 |

