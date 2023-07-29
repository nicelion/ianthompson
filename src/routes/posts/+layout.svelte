<!--
 +layout.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import RefineSearch from "$lib/components/blog/RefineSearch.svelte";
	import type { Tag } from "$lib/types/Tag";

//    /** @type {import('./$types').PageData} */
//    export let data;   

</script>

<div class="flex flex-col lg:flex-row w-full h-full p-2 md:p-4 ">
    <div class="w-full lg:w-1/5 lg:space-y-20 py-8">
        <RefineSearch />
    </div>
    <main class="w-full lg:px-8 lg:w-4/5">
        <slot />
    </main>
</div>