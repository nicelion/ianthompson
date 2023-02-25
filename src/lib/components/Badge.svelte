<!--
 Badge.svelte
 iancthompson
 
 Created by Ian Thompson on February 25th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
    export let title: string = ""
    // import ColorHasher from "$lib/utils/ColorHasher";
    // let color = ColorHasher(title);
</script>

<a href={`/posts?tag=${title}`} class="m-1 badge py-3 text-white hover:opacity-75 transition-all ease-in-out duration-200 bg-orange-300">#{title}</a>