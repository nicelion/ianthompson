<!--
 Section.svelte
 iancthompson
 
 Created by Ian Thompson on July 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import { convertToSlug } from "$lib/util/toSlug";
	import { onMount } from "svelte";
	import Heading from "./Heading.svelte";

    export let title = ""
    let depth = 1

    let sectionElement: HTMLElement

    onMount(() => {
        let parentDepth = Number(sectionElement.parentElement?.parentElement?.dataset.depth)
        if (parentDepth) {
            depth = parentDepth + 1
        }
    })
</script>

<section class="" bind:this={sectionElement} data-depth={depth}>
    <Heading text={title} {depth} />
    <div class="space-y-5">
        <slot />
    </div>
</section>