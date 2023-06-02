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
	import type { Post } from "$lib/types/Blog";
	import Badge from "./Badge.svelte";

    export let post: Post

    // console.log(post);
    
</script>
<a href={`/posts/${post.attributes.slug}`} class="my-8 bg-black-lighter w-full rounded-md flex flex-col lg:flex-row items-center">
    <div class="w-full mb-5 lg:mb-0 lg:w-1/5 h-full">
    <!-- <div class="lg:w-1/5 h-1/5 lg:h-full mb-5"> -->
        <img src={`${post.attributes.cover.data.attributes.formats.thumbnail?.url}`} alt="" class="h-48 w-full rounded-md object-cover">
    </div>
    <div class="px-4 py-2 w-full">
        <div class="flex w-full justify-between">        
            <h1 class="text-2xl font-bold">{post.attributes.title}</h1>
        </div>
        <p>By: <a href="/" class="url">Ian Thompson</a> on {new Date(post.attributes.postDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})} </p>
        <div class="mt-4">
            <p>{post.attributes.description}</p>
        </div>
        <div class="flex justify-end">
            {#each post.attributes.tags.data as tag}
                <Badge title={tag.attributes.tag} color={tag.attributes.color} />
            {/each}

        </div>
    </div>
</a>