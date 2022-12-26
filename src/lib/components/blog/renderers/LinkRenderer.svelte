<!--
 /src/lib/components/blog/renderers/LinkRenderer.svelte
 LinkRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on December 25th 2022
 ianthompson@nicelion.com
 
 https://iancthompson.dev
 
--->

<script lang="ts">
    export let title: string = undefined
    export let href: string = undefined
    export let text: string = undefined
</script>

<a href={href} target="_blank" rel="noreferrer" class="url">{text}</a>