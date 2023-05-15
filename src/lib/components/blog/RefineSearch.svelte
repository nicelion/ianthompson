<!--
 RefineSearch.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
	import { goto } from "$app/navigation";
	// import Badge from "$lib/components/Badge.svelte";

    let showSidebar = false;

    let searchParam = ""

    const handleToggle = () => {
        showSidebar = !showSidebar
    }

    const handleSearch = () => {
        // alert("Searching for "+ searchParam)
        goto(`/blog?q=${searchParam}`, { replaceState: true })
    }
</script>


<!-- MOBILE
<div class="" id="sidebar">
    show me the sidebar
</div> -->


<!-- Full Size -->
<div id="sidebar" class="w-full bg-black-lighter p-2 space-y-5 rounded h-fit md:sticky md:top-20">
    <button class={`md:hidden btn btn-ghost w-full text-xs`} on:click={handleToggle}>{`${showSidebar ? "Close" : "Search Blog"}`}</button>
    <form on:submit|preventDefault={handleSearch} class={`${showSidebar ? "" : "hidden"} md:block space-y-5`}>
        <h2 class="font-bold text-center text-xl">Refine Your Search</h2>
        <div class="flex flex-col space-y-5">
            <input type="text" placeholder="Search blog" class="input w-full" bind:value={searchParam}/>
            <button class="btn btn-primary ">Search</button>
        </div>
        <div class="flex flex-col space-y-2">
            <h2>Filter by Tag:</h2>
            <div class="flex flex-wrap">
                <!-- <Badge title="code"/>
                <Badge title="opinions"/>
                <Badge title="politics"/>
                <Badge title="religion"/>
                <Badge title="personal"/>
                <Badge title="how-to"/> -->
            </div>
        </div>
    
        <!-- <select class="select w-full">
            <option disabled selected>Sort By</option>
            <option>Date - Newest to Oldest</option>
            <option>Date - Oldest to Newest</option>
          </select> -->
    </form>

</div>