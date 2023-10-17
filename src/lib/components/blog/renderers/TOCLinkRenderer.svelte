<!--
 TOCLinkRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	export let title: string = undefined;
	export let href: string = undefined;
	export let text: string = undefined;
</script>

<a href={`#${text}`} class="url text-lg">{text}</a>
