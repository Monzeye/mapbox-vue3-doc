---
title: VectorTileSource
editLink: true
---

# VectorTileSource

矢量数据源




## Apis

### Props

| 参数     | 说明             | 类型                               | 默认值     |
| -------- | ---------------- | ---------------------------------- | ---------- |
| id?      | SourceId         | string                             | 随机生成   |
| url?     | 矢量数据资源地址 | string                             | -          |
| tiles?   | 矢量数据资源地址 | string[]                           | -          |
| options? | 配置项           | Partial&lt;VectorSourceOptions&gt; | 官方默认值 |

### Emits

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| 无     | 无   | 无   |

### Slots

| name    | 说明                                               |
| ------- | -------------------------------------------------- |
| default | Layer图层，可以放入多个Layer，应用于此Source数据源 |

