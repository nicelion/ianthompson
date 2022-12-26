<!--
 /src/lib/components/blog/renderers/HTMLRenderer.svelte
 HTMLRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on December 25th 2022
 ianthompson@nicelion.com
 
 https://iancthompson.dev
 
--->

<script lang="ts">
    export let text: string = undefined
</script>

<!-- <div class="w-full h-fit flex justify-center items-center"> -->
   {@html text}
   <!-- <h1>hello</h1> -->
<!-- </div> -->
