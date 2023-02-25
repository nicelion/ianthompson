<!--
 +layout.svelte
 iancthompson
 
 Created by Ian Thompson on February 25th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import AdContainer from "$lib/components/AdContainer.svelte";
	import Badge from "$lib/components/Badge.svelte";
	import RefineSearch from "$lib/components/blog/layout/RefineSearch.svelte";
  
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<div class="flex flex-col md:flex-row w-full h-full p-4 ">
    <div class="w-full md:w-1/4 md:space-y-20 ">
      <RefineSearch />
      <AdContainer />
    </div>
    <main class="w-full md:px-8">

        <slot />
        <AdContainer />

    </main>
</div>