<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<svelte:head>
    <title>Posts - iancthompson.dev</title>
</svelte:head>

<div class="">
    <a href={`/blog`} class="mt-8 bg-black-lighter w-full rounded-md flex flex-col lg:flex-row p-4 items-center">
        <div class="lg:w-1/5 h-1/5 lg:h-full mb-5">
            <img src={`http://localhost:1337`} alt="" class="h-48 w-full rounded-md object-cover">
        </div>
        <div class="px-4 w-full">
            <div class="flex w-full justify-between">        
                <h1 class="text-2xl font-bold">title</h1>
                <!-- {#if post.pinned}
                    <i class="fa-solid fa-thumbtack text-2xl text-yellow-300 hover:animate-wiggle"></i>
    
                {/if} -->
            </div>
            <p>By: <a href="/" class="url">Ian Thompson</a> on </p>
            <div class="mt-4">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, quis eveniet. Animi sit harum dolor vel tenetur deleniti hic praesentium.</p>
            </div>
            <div class="flex justify-end">
                <!-- {#each post.tags as tag}
                    <Badge title={tag} />
                {/each}
     -->
            </div>
        </div>
    </a>
    <a href={`/blog`} class="mt-8 bg-black-lighter w-full rounded-md flex flex-col lg:flex-row p-4 items-center">
        <div class="lg:w-1/5 h-1/5 lg:h-full mb-5">
            <img src={`http://localhost:1337`} alt="" class="h-48 w-full rounded-md object-cover">
        </div>
        <div class="px-4 w-full">
            <div class="flex w-full justify-between">        
                <h1 class="text-2xl font-bold">title</h1>
                <!-- {#if post.pinned}
                    <i class="fa-solid fa-thumbtack text-2xl text-yellow-300 hover:animate-wiggle"></i>
    
                {/if} -->
            </div>
            <p>By: <a href="/" class="url">Ian Thompson</a> on </p>
            <div class="mt-4">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, quis eveniet. Animi sit harum dolor vel tenetur deleniti hic praesentium.</p>
            </div>
            <div class="flex justify-end">
                <!-- {#each post.tags as tag}
                    <Badge title={tag} />
                {/each}
     -->
            </div>
        </div>
    </a>
</div>