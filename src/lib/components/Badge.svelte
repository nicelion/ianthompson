<!--
 Badge.svelte
 iancthompson
 
 Created by Ian Thompson on December 20th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
    export let title: string = ""

    import ColorHasher from "$lib/utils/ColorHasher";

    let color = ColorHasher(title);

</script>

<a href={`/blog?tag=${title}`} class="m-1 badge py-3 text-white hover:opacity-75 transition-all ease-in-out duration-200" style={`background-color: #${color};`}>#{title}</a>
