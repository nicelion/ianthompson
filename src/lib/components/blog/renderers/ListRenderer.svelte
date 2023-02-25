<!--
 /src/lib/components/blog/renderers/ListRenderer.svelte
 ListRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on December 25th 2022
 ianthompson@nicelion.com
 
 https://iancthompson.dev
 
--->

<script>
    export let ordered
    export let start
  </script>
  
{#if ordered}
    <ol class="list-disc list-inside" {start}><slot></slot></ol>
{:else}
    <ul class="list-disc list-inside"><slot></slot></ul>
{/if}