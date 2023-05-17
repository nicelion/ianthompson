<!--
 PostRow.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->
<script lang="ts">
	import type { Post } from "$lib/types/Blog";
	import Badge from "./Badge.svelte";

    export let post: Post

    // console.log(post);
    
</script>
<a href={`/posts/${post.attributes.slug}`} class="my-5 bg-black-lighter w-full rounded-md flex flex-col lg:flex-row p-4 items-center">
    <div class="lg:w-1/5 h-1/5 lg:h-full mb-5">
        <img src={`http://localhost:1337${post.attributes.cover.data.attributes.formats.thumbnail?.url}`} alt="" class="h-48 w-full rounded-md object-cover">
    </div>
    <div class="px-4 w-full">
        <div class="flex w-full justify-between">        
            <h1 class="text-2xl font-bold">{post.attributes.title}</h1>
            <!-- {#if post.pinned}
                <i class="fa-solid fa-thumbtack text-2xl text-yellow-300 hover:animate-wiggle"></i>

            {/if} -->
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