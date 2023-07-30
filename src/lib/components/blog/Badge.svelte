<!--
 Badge.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import { onMount } from "svelte";

    export let title: string = ""
    // export let color: string = ""
    // import ColorHasher from "$lib/utils/ColorHasher";
    // let color = ColorHasher(title);

    let color
    const stringToColour = (str: string) => {
        let hash = 0;
        str.split('').forEach(char => {
            hash = char.charCodeAt(0) + ((hash << 5) - hash)
        })
        let colour = '#'
        for (let i = 0; i < 3; i++) {
            const value = (hash >> (i * 8)) & 0xff
            colour += value.toString(16).padStart(2, '0')
        }
        return colour
    }

    onMount(() => {
        color = stringToColour(title)
    })
</script>

<!-- <a href={`/posts?tag=${title}`} class="m-1 badge py-3 text-white hover:opacity-75 transition-all ease-in-out duration-200" style={`background-color: ${color};`}>#{title}</a> -->

<a href={`/posts?tag=${title}`} class="m-1 badge py-3 text-white hover:opacity-75 transition-all ease-in-out duration-200 italic bg-blue-900">#{title}</a>