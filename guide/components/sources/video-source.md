---
title: VideoSource
editLink: true
---

# VideoSource

Video数据源



## Apis

### Props

| 参数         | 说明       | 类型                              | 默认值   |
| ------------ | ---------- | --------------------------------- | -------- |
| id?          | SourceId   | string                            | 随机生成 |
| urls?        | 视频地址   | string[]                          | -        |
| coordinates? | 经纬度范围 | VideoSourceOptions['coordinates'] | -        |

### Emits

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| 无     | 无   | 无   |

### Slots

| name    | 说明                                               |
| ------- | -------------------------------------------------- |
| default | Layer图层，可以放入多个Layer，应用于此Source数据源 |

