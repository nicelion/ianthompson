<!--
 /src/lib/components/blog/renderers/CodespanRenderer.svelte
 CodespanRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on December 25th 2022
 ianthompson@nicelion.com
 
 https://iancthompson.dev
 
--->

<script lang="ts">
    export let raw: string
</script>

<code class="text-neutral-content font-mono bg-code-background p-2 font-bold rounded-md">
    {raw.replace(/`/g, '')}
</code>