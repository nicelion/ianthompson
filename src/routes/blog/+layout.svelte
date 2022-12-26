<!--
 +layout.svelte
 ianthompson
 
 Created by Ian Thompson on December 16th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
	import Badge from "$lib/components/Badge.svelte";
	import RefineSearch from "$lib/components/blog/layout/RefineSearch.svelte";

</script>

<div class="flex flex-col md:flex-row w-full h-full p-4 ">
    <RefineSearch />
    <main class="w-full md:px-8">
        <div class="text-sm breadcrumbs">
            <ul>
              <li><a href="/blog" class="url">Blog</a></li> 
            </ul>
          </div>
        <slot />
    </main>
</div>