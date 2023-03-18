<!--
 PostRow.svelte
 ianthompson
 
 Created by Ian Thompson on December 16th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import type { Post } from "$lib/utils/types/Blog";
	import { onMount } from "svelte";
	import Badge from "../Badge.svelte";

    export let data: Post;

    onMount(() => {
        console.log("data", data);

    })

</script>

<!-- <a href={`/posts/${data.attributes.slug}`} class="bg-black-lighter w-full rounded-md flex flex-col lg:flex-row p-4 items-center">
    <h2>{data.attributes.title}</h2>
    <p>{data.attributes.description}</p>
    <p>Tag= {data.attributes.tags.data[0].attributes.tag}</p>
</a> -->


<!-- <a href={`/posts/${data.attributes.slug}`} class="bg-black-lighter w-full rounded-md flex flex-col lg:flex-row p-4 items-center">
    <div class="lg:w-1/5 h-1/5 lg:h-full mb-5">
        <img src={`http://localhost:1337${data.attributes.cover.data.attributes.formats.thumbnail.url}`} alt="" class="h-48 w-full rounded-md object-cover">
    </div>
    <div class="px-4 w-full">
        <div class="flex w-full justify-between">        
            <h1 class="text-2xl font-bold">{data.attributes.title}</h1> 
        </div>
        <p>By: <a href="/" class="url">Ian Thompson</a> on {new Date(data.attributes.createdAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</p>
        <div class="mt-4">
            <p>{data.attributes.description}</p>
        </div>
    </div>
</a> -->

<a href={`/posts/${data.attributes.slug}`} class="bg-black-lighter w-full rounded-md flex flex-col lg:flex-row p-4 items-center">
    <div class="px-4 w-full">
        <div class="flex w-full justify-between">        
            <h1 class="text-2xl font-bold">{data.attributes.title}</h1>
        </div>
        <p>By: <a href="/" class="url">Ian Thompson</a> on {new Date(data.attributes.createdAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</p>
        <div class="mt-4">
            <p>{data.attributes.description}</p>
        </div>
    </div>
</a>