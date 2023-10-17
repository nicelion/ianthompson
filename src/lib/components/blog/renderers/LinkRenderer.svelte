<!--
 LinkRenderer.svelte
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

{#if text == 'Spotify'}
	<div class="flex items-center justify-center">
		<a
			{href}
			{title}
			target="_blank"
			rel="noreferrer"
			class="rounded-md bg-spotify-green px-3 py-2">
			<i class="fa fa-spotify pr-2" />
			Listen on Spotify
		</a>
	</div>
{:else}
	<a {href} {title} target="_blank" rel="noreferrer" class="url"><slot /></a>
{/if}
