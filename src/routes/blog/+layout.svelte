<script>
	import Badge from "$lib/components/Badge.svelte";

</script>
<!--
 +layout.svelte
 ianthompson
 
 Created by Ian Thompson on December 16th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<div class="flex flex-col md:flex-row w-full h-full p-4 ">
    <div id="sidebar" class="w-full md:w-1/4 bg-black-lighter p-2 space-y-5 rounded h-fit md:sticky md:top-20">
        <h2 class="font-bold text-center text-xl">Refine Your Search</h2>

        <div class="flex flex-col space-y-5">
            <input type="text" placeholder="Search blog" class="input w-full" />
            <button class="btn btn-primary ">Search</button>
        </div>
        <div class="flex flex-col space-y-2">
            <h2>Filter by Tag:</h2>
            <div class="flex flex-wrap">
                <Badge title="code"/>
                <Badge title="opinions"/>
                <Badge title="politics"/>
                <Badge title="religion"/>
                <Badge title="personal"/>
                <Badge title="how-to"/>

            </div>
        </div>

        <select class="select w-full">
            <option disabled selected>Sort By</option>
            <option>Date - Newest to Oldest</option>
            <option>Date - Oldest to Newest</option>
          </select>
    </div>
    <main class="w-full md:px-8">
        <div class="text-sm breadcrumbs">
            <ul>
              <li><a href="/blog" class="url">Blog</a></li> 
            </ul>
          </div>
        <slot />
    </main>
</div>