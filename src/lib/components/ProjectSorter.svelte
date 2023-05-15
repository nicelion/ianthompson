<!--
 ProjectSorter.svelte
 iancthompson
 
 Created by Ian Thompson on May 11th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->


<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher<{selection: string}>();

	let active: string = "all"

	$: {
		/** 
		 * Svelte detects that the active variable has changed. Thus, an event is dispatched to be handled 
		 * in the parent.
		 * 
		 * We then pass along the active state as well
		 */
	
		dispatch("selection", active)
	}
</script>

<div class="flex space-x-2 text-xl mb-12">
	<button class={`border-b-2 ${active == "all" ? "border-theme-primary opacity-100" : "border-transparent opacity-75"} hover:border-theme-primary hover:opacity-100`} on:click={() => active = "all"}>#all</button>
	<button class={`border-b-2  ${active == "code" ? "border-theme-primary opacity-100" : "border-transparent opacity-75"} hover:border-theme-primary hover:opacity-100`} on:click={() => active = "code"}>#code</button>
	<button class={`border-b-2 ${active == "music" ? "border-theme-primary opacity-100" : "border-transparent opacity-75"}  hover:border-theme-primary hover:opacity-100`} on:click={() => active = "music"} >#music</button>
	<!-- <button class={`border-b-2 ${active == "#publications" ? "border-theme-primary opacity-100" : "border-transparent opacity-75"} hover:border-theme-primary hover:opacity-100`} on:click={() => active = "publications"}>#publications</button> -->
</div>

