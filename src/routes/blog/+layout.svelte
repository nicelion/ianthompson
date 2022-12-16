<!--
 +layout.svelte
 ianthompson
 
 Created by Ian Thompson on December 16th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<div class="flex flex-col md:flex-row w-full h-full p-4 space-y-8">
    <div id="sidebar" class="w-full md:w-1/4 bg-black-lighter p-2 space-y-5 rounded h-fit md:sticky md:top-20">
        <h2 class="font-bold text-center text-xl">Refine Your Search</h2>

        <div class="flex flex-col space-y-5">
            <input type="text" placeholder="Search blog" class="input w-full" />
            <button class="btn btn-primary ">Search</button>
        </div>
        <div class="flex flex-col space-y-2">
            <h2>Filter by Tag:</h2>
            <div class="flex flex-wrap">
                <div class="m-2 badge badge-primary bg-theme-primary">code</div>
                <div class="m-2 badge badge-primary bg-orange-400">opinions</div>
                <div class="m-2 badge badge-primary bg-red-400">politics</div>
                <div class="m-2 badge badge-primary bg-emerald-400">religion</div>
                <div class="m-2 badge badge-primary bg-purple-400">recipies</div>
                <div class="m-2 badge badge-primary bg-cyan-300">how-to</div>
            </div>
        </div>

        <select class="select w-full">
            <option disabled selected>Sort By</option>
            <option>Date - Newest to Oldest</option>
            <option>Date - Oldest to Newest</option>
          </select>
    </div>
    <main class="w-full md:px-8">
        <slot />
    </main>
</div>