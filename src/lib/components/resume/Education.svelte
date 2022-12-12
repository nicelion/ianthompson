<!--
 Education.svelte
 iancthompson.dev
 
 Created by Ian Thompson on February 12th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->


<script>
    export let institution
    export let dates
    export let degree
</script>

<div class="py-5 text-xl">
    <h3>{institution}</h3>
    <p>{dates}</p>
    <p>{degree}</p>
</div>