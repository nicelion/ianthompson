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
    let text: string = ""

    export let gist: null | string = null

    let language: any = javascript

    let copyState = "Copy"

    onMount(async () => {

        if (gist != null) {
            let response = await fetch(gist)
            text = await response.text()
            
        }

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

    const handleCopy = () => {
        // navigator.clipboard.writeText(text)

        copyState = "Copied!"

        setTimeout(() => {
            copyState = "Copy"
        }, 2000)
    }

</script>

<svelte:head>
    {@html atomOneDark}
</svelte:head>

<div class="mockup-code bg-code-background shadow-lg my-3" style="background: #282c34;">
    <div class="flex items-end w-full justify-end px-5 pb-2">
        <button class="hover:opacity-75" on:click={handleCopy}><i class="fa-solid fa-copy mr-1 text-lg"></i> <span class={`${copyState == "Copied!" ? `text-green-300` : `text-content`}`}>{copyState}</span> </button>
    </div>
    <div class="border-t border-eerie-black">
        <Highlight {language} code={text} />
    </div>
</div>