<!--
 ViewOnGitHubButton.svelte
 iancthompson.dev
 
 Created by Ian Thompson on December 3rd 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
    export let url = "";
</script>

<a href={url} class="group px-4 py-2 rounded-lg text-center flex items-center align-middle border text-white hover:bg-white hover:text-black transition ease-in-out duration-200" target="_blank" rel="noreferrer">
    <i class="fa-brands fa-github group-hover:animate-wiggle text-3xl" />
    <p class="text-lg">View on GitHub</p>
</a>