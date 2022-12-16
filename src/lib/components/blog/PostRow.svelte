<!--
 PostRow.svelte
 ianthompson
 
 Created by Ian Thompson on December 16th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
    export let data;
</script>

<div class="bg-black-lighter w-full rounded-md flex flex-col lg:flex-row p-4 items-center">
    <div class="lg:w-1/5 h-1/5 lg:h-full mb-5">
        <img src={data.img} alt="" class=" w-full rounded-md object-cover">
    </div>
    <div class="px-4 w-full">
        <h1 class="text-2xl font-bold">{data.title}</h1>
        <p>By: <a href="#" class="url">{data.author}</a> on November 29, 2022</p>
        <div class="mt-4">
            <p>{data.description}</p>
        </div>
        <div class="flex justify-end">
            <div class="m-2 badge badge-primary bg-theme-primary">code</div>
            <div class="m-2 badge badge-primary bg-cyan-300">how-to</div>
        </div>
    </div>
</div>