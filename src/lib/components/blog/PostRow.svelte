<!--
 PostRow.svelte
 ianthompson
 
 Created by Ian Thompson on December 16th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
	import Badge from "../Badge.svelte";

    export let data;

    // console.log("data", data);

    let post = data.attributes

</script>

<a href={`/blog/${post.slug}`} class="bg-black-lighter w-full rounded-md flex flex-col lg:flex-row p-4 items-center">
    <div class="lg:w-1/5 h-1/5 lg:h-full mb-5">
        <img src={`http://localhost:1337${post.cover.data.attributes.formats.thumbnail.url}`} alt="" class=" w-full rounded-md object-cover">
    </div>
    <div class="px-4 w-full">
        <div class="flex w-full justify-between">        
            <h1 class="text-2xl font-bold">{post.title}</h1>
            {#if post.pinned}
                <i class="fa-solid fa-thumbtack text-2xl text-yellow-300 hover:animate-wiggle"></i>

            {/if}
        </div>
        <p>By: <a href="#" class="url">{post.author}</a> on {new Date(post.createdAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</p>
        <div class="mt-4">
            <p>{post.description}</p>
        </div>
        <div class="flex justify-end">
            {#each post.tags as tag}
                <Badge title={tag} />
            {/each}

        </div>
    </div>
</a>