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
	<p class={`py-1 px-2 ${color} rounded-md font-mono h-fit my-1 mx-2`}>{interest}</p>
{:else}
	<a href={url} target="_blank" class={`py-1 px-2 ${color} rounded-md font-mono h-fit my-1 mx-2 hover:underline`}
		>{interest}</a
	>
{/if}
