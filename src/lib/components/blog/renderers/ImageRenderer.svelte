<!--
 ImageRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
    export let title: string = undefined
    export let href: string = undefined
    export let text: string = undefined

    console.log("image is being loaded");
    
</script>

<div class="flex flex-col justify-center items-center space-y-3 my-6">
    <img src={href} alt={text} class="h-96 rounded-md  object-contain">
    <p class="italic">{text}</p>
</div>