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

   /** @type {import('./$types').PageData} */
   export let data;   

</script>

<div class="flex flex-col md:flex-row w-full h-full p-4 ">
    <div class="w-full md:w-1/4 md:space-y-20 ">
        <RefineSearch tags={data.tags}/>
        
      <!-- <RefineSearch />
      <AdContainer /> -->
    </div>
    <main class="w-full md:px-8">
        <!-- <div class="text-sm breadcrumbs">
            <ul>
              <li><a href="/blog" class="url">Blog</a></li> 
              <li>Blog Post Title</li> 
            </ul>
          </div> -->
        <slot />
        <!-- <AdContainer /> -->

    </main>
</div>