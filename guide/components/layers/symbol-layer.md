---
title: Layers
editLink: true
---

# SymbolLayer

点标记图层



## Apis

### Props

| 参数         | 说明                                                  | 类型                       | 默认值     |
| ------------ | ----------------------------------------------------- | -------------------------- | ---------- |
| id?          | LayerId                                               | string                     | 随机生成   |
| source?      | 数据源(组件放入Source组件中会自动引用)                | SourceId\|Object           | -          |
| style?       | 样式                                                  | SymbolLayout & SymbolPaint | 官方默认值 |
| filter?      | 过滤项                                                | Expression                 | ['all']    |
| sourceLayer? | 当source type为vector(VectorTileSource组件)时需要传入 | string                     | -          |
| beforeId?    | 图层层级插入此LayerId之后                             | string                     | -          |
| metadata?    | 用于跟踪层的任意属性                                  | object                     | -          |
| visible?     | 图层是否显示                                          | boolean                    | true       |
| minzoom?     | 图层显示的最小层级                                    | number                     | 0          |
| maxzoom?     | 图层显示的最大层级                                    | number                     | 24         |

### Emits

| 事件名      | 说明               | 参数                                                     |
| ----------- | ------------------ | -------------------------------------------------------- |
| register    | source创建后触发   | (acitions:CreateLayerActions&lt;SymbolLayer&gt;,map:Map) |
| click       | 点击元素时触发     | (ev:MapLayerMouseEvent)                                  |
| dblclick    | 双击元素时触发     | (ev:MapLayerMouseEvent)                                  |
| mousedown   | 鼠标按下元素时触发 | (ev:MapLayerMouseEvent)                                  |
| mouseup     | 鼠标抬起元素时触发 | (ev:MapLayerMouseEvent)                                  |
| mousemove   | 鼠标移动元素时触发 | (ev:MapLayerMouseEvent)                                  |
| mouseenter  | 鼠标进入元素时触发 | (ev:MapLayerMouseEvent)                                  |
| mouseleave  | 鼠标离开元素时触发 | (ev:MapLayerMouseEvent)                                  |
| mouseover   | 鼠标移到元素时触发 | (ev:MapLayerMouseEvent)                                  |
| mouseout    | 鼠标移出元素时触发 | (ev:MapLayerMouseEvent)                                  |
| touchstart  | 触摸元素开始时出发 | (ev:MapLayerTouchEvent)                                  |
| touchend    | 触摸元素结束时出发 | (ev:MapLayerTouchEvent)                                  |
| touchcancel | 触摸元素取消时出发 | (ev:MapLayerTouchEvent)                                  |

### Slots

| name | 说明 |
| ---- | ---- |
| 无   | 无   |
