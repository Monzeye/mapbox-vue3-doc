---
title: Mapbox
editLink: true
---

# Mapbox

地图

## Apis

### Props

| 参数      | 说明       | 类型                         | 默认值     |
| --------- | :--------- | ---------------------------- | ---------- |
| width？   | 宽         | string                       | 100%       |
| height？  | 高         | string                       | 100%       |
| options？ | 地图配置项 | Partial&lt;MapboxOptions&gt; | 官方默认值 |

### Emits

| 事件名   | 说明                                           | 参数                          |
| -------- | ---------------------------------------------- | ----------------------------- |
| register | 地图初始化获取到实例后触发，此时地图还未加载完 | (actions:CreateMapboxActions) |
| load     | 地图加载完成后触发                             | (ev:MapboxEvent)              |
| error    | 地图加载报错后触发                             | (ev:MapboxEvent)              |
| remove   | 地图移除触发                                   | (ev:MapboxEvent)              |
| idle     | 地图加载完成后空闲帧触发                       | (ev:MapboxEvent)              |
| click    | 地图点击是触发                                 | (ev:MapboxEvent)              |
| move     | 地图视图移动是触发                             | (ev:MapboxEvent)              |
| zoom     | 地图缩放是触发                                 | (ev:MapboxEvent)              |
| ....     | ....                                           | ....                          |

### Slots

| name       | 说明                                 |
| ---------- | ------------------------------------ |
| default    | 地图组件加载后触发load事件后开始渲染 |
| beforeLoad | 地图组件生成实例后在load事件之前触发 |

