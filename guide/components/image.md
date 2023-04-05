---
title: Image
editLink: true
---

# Image

图片资源



## Apis

### Props

| 参数     | 说明       | 类型         | 默认值     |
| -------- | ---------- | ------------ | ---------- |
| options? | 图片配置项 | ImageOptions | 官方默认值 |
| images?  | 图片列表   | ImageItem[]  | []         |

```ts
interface ImageItem {
  id: string;
  image: ImageDatas | string;
  options?: ImageOptions;
}
```



### Emits

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| 无     | 无   | 无   |

### Slots

| name    | 说明                                         |
| ------- | -------------------------------------------- |
| default | 图片资源全部加载完成后（无论成功或失败）渲染 |

