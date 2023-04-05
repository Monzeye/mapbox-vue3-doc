---
title: Popup
editLink: true
---

# Popup

弹出框



## Apis

### Props

| 参数                 | 说明               | 类型         | 默认值     |
| -------------------- | ------------------ | ------------ | ---------- |
| className?           | popup外层classname | string       | -          |
| lnglat?              | 经纬度             | LngLatLike   | -          |
| show? (V-model:show) | 是否显示           | boolean      | false      |
| options?             | 是否可拖拽         | PopupOptions | 官方默认值 |

### Emits

| 事件名 | 说明       | 参数 |
| ------ | ---------- | ---- |
| open   | 显示时触发 | void |
| close  | 关闭时触发 | void |

### Slots

| name    | 说明                          |
| ------- | ----------------------------- |
| default | dom元素用于展示弹窗内容和样式 |

