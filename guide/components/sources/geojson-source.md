---
title: GeoJsonSource
editLink: true
---

# GeoJsonSource

geojson矢量数据源




## Apis

### Props

| 参数     | 说明         | 类型                                 | 默认值     |
| -------- | ------------ | ------------------------------------ | ---------- |
| id?      | SourceId     | string                               | 随机生成   |
| data?    | 数据源       | GeoJSONSourceOptions['data']         | -          |
| options? | 数据源配置项 | Partiall&lt;GeoJSONSourceOptions&gt; | 官方默认值 |

### Emits

| 事件名   | 说明             | 参数                                  |
| -------- | ---------------- | ------------------------------------- |
| register | source创建后触发 | (acitions:CreateGeoJsonSourceActions) |

### Slots

| name    | 说明                                               |
| ------- | -------------------------------------------------- |
| default | Layer图层，可以放入多个Layer，应用于此Source数据源 |

