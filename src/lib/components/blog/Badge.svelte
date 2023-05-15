<!--
 Badge.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
    export let title: string = ""
    export let color: string = ""
    // import ColorHasher from "$lib/utils/ColorHasher";
    // let color = ColorHasher(title);
</script>

<a href={`/posts?tag=${title}`} class="m-1 badge py-3 text-white hover:opacity-75 transition-all ease-in-out duration-200" style={`background-color: ${color};`}>#{title}</a>