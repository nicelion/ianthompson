<!--
 /src/lib/components/blog/renderers/CodeRenderer.svelte
 CodeRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on December 25th 2022
 ianthompson@nicelion.com
 
 https://iancthompson.dev
 
--->


<script>

    import PrismJsRenderer from "./PrismJSRenderer.svelte";
    import Highlight from "svelte-highlight";
    import typescript from "svelte-highlight/languages/typescript";
    import python from "svelte-highlight/languages/python"
    import atomOneDark from "svelte-highlight/styles/atom-one-dark";
    export let lang
    export let text
</script>

<svelte:head>
    {@html atomOneDark}
</svelte:head>

<div class="mockup-code bg-code-background shadow-lg" style="background: #282c34;">
    <div class="border-t border-eerie-black">
        <Highlight language={python} code={text} />
    </div>
</div>


