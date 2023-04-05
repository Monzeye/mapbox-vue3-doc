import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/guide/introduction',
        activeMatch: '^/guide/',
      },
      {
        text: 'Hooks',
        link: '/hooks/introduction',
        activeMatch: '^/hook/',
      },
    ],
    sidebar: {
      '/guide': [
        {
          text: '指南',
          items: [
            {
              text: '介绍',
              link: '/guide/introduction.md',
            },
            {
              text: '起步',
              link: '/guide/getting-started.md',
            },
          ],
        },
        {
          text: '组件',
          items: [
            {
              text: 'Mapbox',
              link: '/guide/components/mapbox.md',
            },
            {
              text: 'Sources',
              link: '/guide/components/sources/geojson-source.md',
              collapsed: true,
              items: [
                {
                  text: 'GeoJsonSource',
                  link: '/guide/components/sources/geojson-source.md',
                },
                {
                  text: 'ImageSource',
                  link: '/guide/components/sources/image-source.md',
                },
                {
                  text: 'RasterDemSource',
                  link: '/guide/components/sources/raster-dem-source.md',
                },
                {
                  text: 'RasterSource',
                  link: '/guide/components/sources/raster-source.md',
                },
                {
                  text: 'VectorTileSource',
                  link: '/guide/components/sources/vector-tile-source.md',
                },
                {
                  text: 'CanvasSource',
                  link: '/guide/components/sources/canvas-source.md',
                },
                {
                  text: 'VideoSource',
                  link: '/guide/components/sources/video-source.md',
                },
              ]
            },
            {
              text: 'Layers',
              link: '/guide/components/layers/symbol-layer.md',
              collapsed: true,
              items: [
                {
                  text: 'SymbolLayer',
                  link: '/guide/components/layers/symbol-layer.md',
                },
                {
                  text: 'CircleLayer',
                  link: '/guide/components/layers/circle-layer.md',
                },
                {
                  text: 'LineLayer',
                  link: '/guide/components/layers/line-layer.md',
                },
                {
                  text: 'BackgroundLayer',
                  link: '/guide/components/layers/background-layer.md',
                },
                {
                  text: 'FillExtrusionLayer',
                  link: '/guide/components/layers/fill-layer.md',
                },
                {
                  text: 'FillLayer',
                  link: '/guide/components/layers/fill-layer.md',
                },
                {
                  text: 'HeatmapLayer',
                  link: '/guide/components/layers/heatmap-layer.md',
                },
                {
                  text: 'HillshadeLayer',
                  link: '/guide/components/layers/hillshade-layer.md',
                },
                {
                  text: 'RasterLayer',
                  link: '/guide/components/layers/raster-layer.md',
                },
                {
                  text: 'CustomLayer',
                  link: '/guide/components/layers/custom-layer.md',
                },
                {
                  text: 'SkyLayer',
                  link: '/guide/components/layers/sky-layer.md',
                }
              ]
            },
            {
              text: 'Controls',
              link: '/guide/components/controls/attribution-control.md',
              collapsed: true,
              items: [
                {
                  text: 'AttributionControl',
                  link: '/guide/components/controls/attribution-control.md',
                },
                {
                  text: 'FullscreenControl',
                  link: '/guide/components/controls/fullscreen-control.md',
                },
                {
                  text: 'GeolocateControl',
                  link: '/guide/components/controls/geolocate-control.md',
                },
                {
                  text: 'NavigationControl',
                  link: '/guide/components/controls/navigation-control.md',
                },
                {
                  text: 'ScaleControl',
                  link: '/guide/components/controls/scale-control.md',
                },
                {
                  text: 'CustomControl',
                  link: '/guide/components/controls/custom-control.md',
                },
              ]
            },
            {
              text: 'Image',
              link: '/guide/components/image.md',
            },
            {
              text: 'Marker',
              link: '/guide/components/marker.md',
            },
            {
              text: 'Popup',
              link: '/guide/components/popup.md',
            },
            {
              text: 'Terrain',
              link: '/guide/components/terrain.md',
            },
            {
              text: 'Fog',
              link: '/guide/components/fog.md',
            },
            {
              text: 'Light',
              link: '/guide/components/light.md',
            },
          ]
        }
      ],
      '/hooks': [
        {
          text: '说明',
          link: '/hooks/introduction.md',
        },
        {
          text: '相机动画相关',
          items: [
            {
              text: 'useFlyTo',
              link: '/hooks/camera/use-fly-to.md',
            },
            {
              text: 'useJumpTo',
              link: '/hooks/camera/use-jump-to.md',
            },
            {
              text: 'useChainCamera',
              link: '/hooks/camera/use-chain-camera.md',
            }

          ]
        },
        {
          text: '地图相关',
          items: [
            {}
          ]
        }
      ]
    }
  }
}