<!--
 /src/lib/components/blog/renderers/HeadingRenderer.svelte
 HeadingRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on December 21st 2022
 ianthompson@nicelion.com
 
 https://iancthompson.dev
 
--->


<script lang="ts">
    export let depth;
    export let text: string;

    console.log("DATA", depth);
</script>

<h1 id={text} class="text-3xl my-6"><a href={`#${text}`} class="">📎</a> {text}</h1>


