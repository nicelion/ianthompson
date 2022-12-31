<!--
 +layout.svelte
 ianthompson
 
 Created by Ian Thompson on December 16th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
	import AdContainer from "$lib/components/AdContainer.svelte";
	import Badge from "$lib/components/Badge.svelte";
	import RefineSearch from "$lib/components/blog/layout/RefineSearch.svelte";

</script>

<div class="flex flex-col md:flex-row w-full h-full p-4 ">
    <div class="w-full md:w-1/4 md:space-y-20 ">
      <RefineSearch />
      <AdContainer />
    </div>
    <main class="w-full md:px-8">
        <div class="text-sm breadcrumbs">
            <ul>
              <li><a href="/blog" class="url">Blog</a></li> 
            </ul>
          </div>
        <slot />
        <AdContainer />

    </main>
</div>