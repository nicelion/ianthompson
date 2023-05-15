<!--
 CodeRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->


<script lang="ts">
	import { onMount } from "svelte";
    import Highlight from "svelte-highlight";
    // import javascript from "svelte-highlight/languages/javascript";
    // import python from "svelte-highlight/languages/python"
    // import html

    import {python, javascript, cpp} from "svelte-highlight/languages"

    import atomOneDark from "svelte-highlight/styles/atom-one-dark";
    
    export let lang: string
    export let text: string

    let language: any = javascript

    onMount(() => {
        switch (lang) {
            case "javascript": 
                language = javascript
                break;
            case "python":
                language = python;
                break;
            case "cpp":
                language = cpp;
                break;
            default:
                language = javascript;
        }
    })
</script>

<svelte:head>
    {@html atomOneDark}
</svelte:head>

<div class="mockup-code bg-code-background shadow-lg" style="background: #282c34;">
    <div class="border-t border-eerie-black">
        <Highlight {language} code={text} />
    </div>
</div>