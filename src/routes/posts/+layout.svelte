<!--
 +layout.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import BioSidebar from '$lib/components/blog/BioSidebar.svelte';
	import RefineSearch from '$lib/components/blog/RefineSearch.svelte';
	import type { Tag } from '$lib/types/Tag';

	//    /** @type {import('./$types').PageData} */
	//    export let data;
</script>

<div class="flex h-full w-full flex-col p-2 md:p-4 lg:flex-row">
	<div class="flex w-full flex-col py-3 md:sticky md:top-20 lg:w-1/5 lg:space-y-10">
		<BioSidebar />
		<RefineSearch />
	</div>
	<main class="w-full lg:w-4/5 lg:px-8">
		<slot />
	</main>
</div>
