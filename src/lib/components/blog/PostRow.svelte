<!--
 PostRow.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->
<script lang="ts">
	import { PUBLIC_STRAPI_URL } from "$env/static/public";
	import type { Post } from "$lib/types/Post";
	import Badge from "./Badge.svelte";

    export let post: Post

    // console.log(post);
    
</script>
<a href={`/posts/${post.slug}`} class="my-8 bg-black-lighter w-full rounded-md flex flex-col lg:flex-row items-center">
    <div class="w-full mb-5 lg:mb-0 lg:w-1/5 h-full">
    <!-- <div class="lg:w-1/5 h-1/5 lg:h-full mb-5"> -->
        <img src={`${post.cover}`} alt="" class="h-48 w-full rounded-md object-cover">
    </div>
    <div class="px-4 py-2 w-full">
        <div class="flex w-full justify-between">        
            <h1 class="text-2xl font-bold">{post.title}</h1>
        </div>
        <p>By: <a href="/" class="url">Ian Thompson</a> on {new Date(post.postDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})} </p>
        <div class="mt-4">
            <p>{post.description}</p>
        </div>
        <div class="flex justify-end mt-4">
            {#each post.tags as tag}
                <Badge title={tag}/>
            {/each}

        </div>
    </div>
</a>