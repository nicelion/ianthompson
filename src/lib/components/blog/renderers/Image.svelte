<!--
 ImageRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	export let title: string = undefined;
	export let src: string = undefined;
	export let alt: string = undefined;

	console.log('image is being loaded');
</script>

<div class="my-6 flex flex-col items-center justify-center space-y-3 align-middle">
	<img {src} {alt} class="h-96 rounded-md object-contain" />
	<p class="px-12 text-center italic">{alt}</p>
</div>
