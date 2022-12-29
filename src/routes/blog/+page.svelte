<!--
 +page.svelte
 ianthompson
 
 Created by Ian Thompson on December 16th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import PostRow from "$lib/components/blog/PostRow.svelte";
	import type { Post, Response } from "$lib/utils/types/Blog";

    /** @type {import('./$types').PageData} */
    export let data: Response;


</script>

<svelte:head>
    <title>The Blog - iancthompson.dev</title>
</svelte:head>

<div class="space-y-4">
    {#each data.data as post}
        <PostRow data={post} />
    {/each}
</div>