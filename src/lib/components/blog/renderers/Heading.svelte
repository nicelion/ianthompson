<!--
 HeadingRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	export let depth: number;
	export let text: string;

	// console.log("DATA", depth);
</script>

{#if depth == 1}
	<h1 id={text} class="my-6 border-b border-b-slate-500 pb-2 text-3xl">
		<a href={`#${text}`} class="text-sm">📎</a>
		{text}
	</h1>
{:else if depth == 2}
	<h2 id={text} class="my-6 text-2xl"><a href={`#${text}`} class="text-sm">📎</a> {text}</h2>
{:else if depth == 3}
	<h3 id={text} class="my-6 text-xl"><a href={`#${text}`} class="text-sm">📎</a> {text}</h3>
{:else if depth == 4}
	<h4 id={text} class="text-md my-6"><a href={`#${text}`} class="text-sm">📎</a> {text}</h4>
{:else if depth == 5}
	<h5 id={text} class="my-6 text-sm"><a href={`#${text}`} class="text-sm">📎</a> {text}</h5>
{:else if depth == 6}
	<h6 id={text} class="my-6 text-sm"><a href={`#${text}`} class="text-sm">📎</a> {text}</h6>
{:else}
	{text}
{/if}
