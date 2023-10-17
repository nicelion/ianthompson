<!--
 Interest.svelte
 iancthompson.dev
 
 Created by Ian Thompson on August 12th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
	export let interest = '';
	export let color = '';
	export let url = '';
</script>

{#if url == ''}
	<p class={`px-2 py-1 ${color} mx-2 my-1 h-fit rounded-md font-mono`}>{interest}</p>
{:else}
	<a
		href={url}
		target="_blank"
		class={`px-2 py-1 ${color} mx-2 my-1 h-fit rounded-md font-mono text-cornsilk hover:underline`}
		>{interest}</a>
{/if}
