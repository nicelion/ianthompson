<!--
 /src/lib/components/blog/renderers/HTMLRenderer.svelte
 HTMLRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on December 25th 2022
 ianthompson@nicelion.com
 
 https://iancthompson.dev
 
--->

<script lang="ts">
	import AdContainer from "$lib/components/AdContainer.svelte";
import { onMount } from "svelte";


    export let text: string = undefined

    let isAd: boolean = false
    

    onMount(() => {
        var doc = new DOMParser().parseFromString(text, "text/html")

        if (doc.getElementById("ad") != null) {
            isAd = true            
        }

    })
</script>

{#if isAd}
    <AdContainer />
{:else}
    {@html text}
{/if}

<!-- <div class="w-full h-fit flex justify-center items-center"> -->
   <!-- <h1>hello</h1> -->
<!-- </div> -->
