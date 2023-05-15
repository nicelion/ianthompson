
<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">

    import PostRow from "$lib/components/blog/PostRow.svelte";
	import type { Post, PostResponse } from "$lib/types/Blog";
    
    /** @type {import('./$types').PageData} */
    export let data: PostResponse;
    
    $: (data = data)
</script>

<svelte:head>
    <title>Posts - iancthompson.dev</title>
</svelte:head>

<div class="">
    <div class="space-y-3 border-b-2 border-b-slate-500 pb-4">
        <h2 class="text-4xl">Posts</h2>
        <p>Welcome to my "blog." Here, you can find posts about projects I am working on, things I have done, and other things that interest me! This is meant to be very casual, so don't expect anything crazy. </p>
    </div>
    <!-- <PostRow /> -->
    {#each data.data as post}
        <PostRow {post} />
    {/each}
</div>