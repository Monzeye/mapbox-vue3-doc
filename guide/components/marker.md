---
title: Marker
editLink: true
---


# Marker
标记

::: warning

注意Marker为dom元素；不宜用于大量数据的情况下使用

:::

## Apis

### Props

| 参数       | 说明       | 类型          | 默认值     |
| ---------- | ---------- | ------------- | ---------- |
| lnglat?    | 坐标       | LngLatLike    | -          |
| popup?     | 弹出框     | Popup         | -          |
| options?   | 配置项     | MarkerOptions | 官方默认值 |
| draggable? | 是否可拖拽 | boolean       | false      |

### Emits

| 事件名    | 说明         | 参数       |
| --------- | ------------ | ---------- |
| dragstart | 拖拽开始触发 | (ev:Event) |
| drag      | 拖拽触发     | (ev:Event) |
| dragend   | 拖拽结束触发 | (ev:Event) |

### Slots

| name    | 说明                          |
| ------- | ----------------------------- |
| default | dom元素用于展示标记内容和样式 |

