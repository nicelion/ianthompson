<!--
 +page.svelte
 ianthompson
 
 Created by Ian Thompson on December 16th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
    /** @type {import('./$types').PageData} */
    export let data;

    console.log("data!!", data);
	import PostRow from "$lib/components/blog/PostRow.svelte";

</script>

<svelte:head>
    <title>The Blog - iancthompson.dev</title>
</svelte:head>

<div class="space-y-4">
    {#each data.data as post}
        <PostRow data={post} />
    {/each}
</div>