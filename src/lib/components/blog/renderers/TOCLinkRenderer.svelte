<!--
 /src/lib/components/blog/renderers/TOCLinkRenderer.svelte
 TOCLinkRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on January 1st 2023
 ianthompson@nicelion.com
 
 https://iancthompson.dev
 
--->
<script lang="ts">
    export let title: string = undefined
    export let href: string = undefined
    export let text: string = undefined
</script>

<a href={`#${text}`} class="url">{text}</a>
