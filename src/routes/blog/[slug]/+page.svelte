<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on December 20th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->
<script lang="ts">
	import { onMount } from 'svelte';
  import SvelteMarkdown from 'svelte-markdown'

    export let data;

// console.log("data", data.data);
    let content = data.attributes.content;

    onMount(async () => {
        const marked = (await import('marked')).default;
        content = marked(data.attributes.content);
    })

</script>

<svelte:head>
    <title>{data.attributes.title}</title>
</svelte:head>

<article class="bg-black-lighter p-5 rounded-md">
    <h1 class="text-3xl">{data.attributes.title}</h1>

    <div class="space-y-6">
        <!-- {@html content} -->
        <SvelteMarkdown source={data.attributes.content} />
    </div>
</article>

<style>
    h1 {
        color: blue;
    }
</style>

