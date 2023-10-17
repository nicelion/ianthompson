<!--
 +layout.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import RefineSearch from '$lib/components/blog/RefineSearch.svelte';
	import type { Tag } from '$lib/types/Tag';

	//    /** @type {import('./$types').PageData} */
	//    export let data;
</script>

<div class="flex h-full w-full flex-col p-2 md:p-4 lg:flex-row">
	<div class="w-full py-8 lg:w-1/5 lg:space-y-20">
		<RefineSearch />
	</div>
	<main class="w-full lg:w-4/5 lg:px-8">
		<slot />
	</main>
</div>
