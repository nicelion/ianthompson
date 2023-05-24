<!--
 CodespanRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
    export let raw: string
</script>

<code class="text-neutral-content font-mono bg-code-background p-2 font-bold rounded-md">
    {raw.replace(/`/g, '')}
</code>