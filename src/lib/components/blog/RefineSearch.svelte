<!--
 RefineSearch.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import { goto } from "$app/navigation";
	import Badge from "$lib/components/blog/Badge.svelte";
	import { OrderBy } from "$lib/types/Query";
	import type { Tag } from "$lib/types/Tag";
	import { QueryFactory } from "$lib/util/QueryFactory";

    export let tags: Tag = []

    let showSidebar = false;

    let searchParam = ""

    let queryURL = "/posts?"

    let sortSelect = "Sort By"
    $: {
        console.log(sortSelect);
        
    }

    const handleToggle = () => {
        showSidebar = !showSidebar
    }

    const handleSearch = () => {
        // alert("Searching for "+ searchParam)

        let qs = QueryFactory(location, {
            q: searchParam,
            // page: 1,
            date: (sortSelect == "Date - Oldest to Newest" ? OrderBy.ASC : OrderBy.DESC),
            // tag: "code"
        })
        // if (searchParam.trim() == "") {
        //     queryURL = "/posts"
        // } else {
        //     queryURL += `q=${searchParam}`
        // }

        // if (sortSelect == "Date - Oldest to Newest") {
        //     queryURL += "?date=asc"
        // }

        goto(queryURL + qs, { replaceState: false })

        // queryURL = "/posts?"
    }

    const handleSortSelect = () => {
        if (sortSelect == "Date - Newest to Oldest") {
            // goto(`/posts?date=desc`, { replaceState: true })
        } else if (sortSelect == "Date - Oldest to Newest") {
            // goto(`/posts?date=asc`, { replaceState: true })
        }
    }

</script>




<!-- Full Size -->
<div id="sidebar" class="w-full bg-black-lighter p-2 space-y-5 rounded h-fit md:sticky md:top-20">
    <button class={`lg:hidden btn btn-ghost w-full text-xs`} on:click={handleToggle}>{`${showSidebar ? "Close" : "Search Blog"}`}</button>
    <form on:submit|preventDefault={handleSearch} class={`${showSidebar ? "" : "hidden"} lg:block space-y-5`}>
        <h2 class="font-bold text-center text-xl">Refine Your Search</h2>
        <div class="flex flex-col space-y-5">
            <input type="text" placeholder="Search blog" class="input w-full" bind:value={searchParam}/>
            <button class="btn btn-primary ">Search</button>
        </div>
        <div class="flex flex-col space-y-2">
            <h2>Filter by Tag:</h2>
            <div class="flex flex-wrap">
                {#each tags as tag}
                    <Badge title={tag.attributes.tag} color={tag.attributes.color}/>
                {/each}

            </div>
        </div>
    
        <select class="select w-full" bind:value={sortSelect} on:change={handleSortSelect}>
            <option disabled selected>Sort By</option>
            <option>Date - Newest to Oldest</option>
            <option>Date - Oldest to Newest</option>
        </select>
    </form>
    <a href="/posts" class="btn btn-outline w-full btn-sm">CLEAR FILTERS</a>
</div>