<!--
 ListRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
    export let ordered
    // export let start
  </script>
  
{#if ordered}
    <ol class="list-disc list-inside"><slot></slot></ol>
{:else}
    <ul class="list-disc list-inside"><slot></slot></ul>
{/if}