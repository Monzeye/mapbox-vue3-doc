---
title: useChainCamera
editLink: true
---

# useChainCamera

::: code-group

```vue [Ts]
<template>
	<Mapbox :options="options" @register="register">
		<MapboxTerrain url="mapbox://mapbox.mapbox-terrain-dem-v1" :exaggeration="1.5"></MapboxTerrain>
	</Mapbox>
</template>
<script lang="ts" setup>
import { useMapbox, useChainCamera } from 'mapbox-vue3';
import type { MapboxOptions } from 'mapbox-gl';

const options: Partial<MapboxOptions> = {
	style: 'mapbox://styles/mapbox/satellite-v9',
	center: [107.132759, 34.784138],
	zoom: 4,
	// accessToken: 'pk.xxxxxxx',
};

const { getMapInstance, register } = useMapbox();
useChainCamera({
	map: getMapInstance,
	autoplay: true,
	list: [
		{
			lngLat: [138.73375, 35.41914],
			lookAtLngLat: [138.73036, 35.36197],
			altitude: 7000,
			duration: 0,
		},
		{
			lngLat: [138.72649, 35.33974],
			lookAtLngLat: [138.73036, 35.36197],
			altitude: 6000.0,
			duration: 20000,
		},
		{
			lngLat: [138.72623, 35.31977],
			lookAtLngLat: [138.73036, 35.36197],
			altitude: 6000,
			duration: 15000,
		},
		{
			lngLat: [138.73375, 35.41914],
			lookAtLngLat: [138.73036, 35.36197],
			altitude: 7000,
			duration: 15000,
		}
	],
});
</script>

```

```vue [Js]
<template>
	<Mapbox :options="options" @register="register">
		<MapboxTerrain url="mapbox://mapbox.mapbox-terrain-dem-v1" :exaggeration="1.5"></MapboxTerrain>
	</Mapbox>
</template>
<script lang="ts" setup>
import { useMapbox, useChainCamera } from 'mapbox-vue3';

const options = {
	style: 'mapbox://styles/mapbox/satellite-v9',
	center: [107.132759, 34.784138],
	zoom: 4,
	// accessToken: 'pk.xxxxxxx',
};

const { getMapInstance, register } = useMapbox();
useChainCamera({
	map: getMapInstance,
	autoplay: true,
	list: [
		{
			lngLat: [138.73375, 35.41914],
			lookAtLngLat: [138.73036, 35.36197],
			altitude: 7000,
			duration: 0,
		},
		{
			lngLat: [138.72649, 35.33974],
			lookAtLngLat: [138.73036, 35.36197],
			altitude: 6000.0,
			duration: 20000,
		},
		{
			lngLat: [138.72623, 35.31977],
			lookAtLngLat: [138.73036, 35.36197],
			altitude: 6000,
			duration: 15000,
		},
		{
			lngLat: [138.73375, 35.41914],
			lookAtLngLat: [138.73036, 35.36197],
			altitude: 7000,
			duration: 15000,
		}
	],
});
</script>

```

:::
