<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on February 25th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import AdContainer from "$lib/components/AdContainer.svelte";
    import PostRow from "$lib/components/blog/PostRow.svelte";
	import type { Post, PostResponse } from "$lib/utils/types/Blog";
    
    /** @type {import('./$types').PageData} */
    export let data: PostResponse;
    
    $: (data = data)


</script>

<svelte:head>
    <title>The Blog - iancthompson.dev</title>
</svelte:head>

<div id="post contianer" class="space-y-4">
    {#if data.data.length != 0}
            {#each data.data as post, i}
                <PostRow data={post} />
                <!-- <p>{post.attributes.title}</p> -->
                <!-- 
                    Here, were checking the post row index to determine if we will display an ad or not. We want to display an ad every nth post, which is determined by changing the number after the modulo operator. 
        
                    Then, we want to ensure that we don't place an ad after the first post and we don't place an ad at the last post. The reasoning for the later is because we already have an ad placed at the end in +layout, since we always want to display an ad at the end of the PostRows
                -->
                {#if ((i % 2 == 0) && (i != data.data.length - 1) && (i != 0)) }
                    <AdContainer />
                {/if}
            {/each}
    {:else}
        <div class="flex justify-center flex-col w-full items-center py-6">
            <img src="https://media.tenor.com/tEEjB0RnxyAAAAAM/puppet-awkward.gif" alt="" class="rounded-md h-56 w-fit">
            <p class="text-3xl mt-8">Your search did not yield any results...</p>
        </div>
    {/if}
</div>