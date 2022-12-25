<!--
 /src/lib/components/blog/renderers/ImageRenderer.svelte
 ImageRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on December 25th 2022
 ianthompson@nicelion.com
 
 https://iancthompson.dev
 
--->

<script lang="ts">
    export let title: string = undefined
    export let href: string = undefined
    export let text: string = undefined

    console.log("image is being loaded");
    
</script>

<div class="flex flex-col justify-center items-center space-y-3">
    <img src={href} alt={text} class="h-96 border-4 rounded-md shadow-lg">
    <p class="italic">{text}</p>
</div>
