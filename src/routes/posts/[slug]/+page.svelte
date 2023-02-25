<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on February 25th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import Badge from '$lib/components/Badge.svelte';
    import ContentContainer from '$lib/components/blog/ContentContainer.svelte';
	import CodeRenderer from '$lib/components/blog/renderers/CodeRenderer.svelte';
	import CodespanRenderer from '$lib/components/blog/renderers/CodespanRenderer.svelte';
	import HeadingRenderer from '$lib/components/blog/renderers/HeadingRenderer.svelte';
	import HtmlRenderer from '$lib/components/blog/renderers/HTMLRenderer.svelte';
	import ImageRenderer from '$lib/components/blog/renderers/ImageRenderer.svelte';
	import LinkRenderer from '$lib/components/blog/renderers/LinkRenderer.svelte';
	import ListItemRenderer from '$lib/components/blog/renderers/ListItemRenderer.svelte';
	import ListRenderer from '$lib/components/blog/renderers/ListRenderer.svelte';
	import ParagraphRenderer from '$lib/components/blog/renderers/ParagraphRenderer.svelte';
	import StrongRenderer from '$lib/components/blog/renderers/StrongRenderer.svelte';
	import TocLinkRenderer from '$lib/components/blog/renderers/TOCLinkRenderer.svelte';
	
    import type { Post } from '$lib/utils/types/Blog';
	import { onMount } from 'svelte';
    import SvelteMarkdown from 'svelte-markdown'
    export let data: Post;
</script>

<svelte:head>
    <title>{data.attributes.title} - iancthompson.dev</title>
    <meta name="description" content={data.attributes.description}>

</svelte:head>

<article class="bg-black-lighter rounded-md text-cornsilk">
    <div class="w-full h-1/3">    
        <img src={`http://localhost:1337${data.attributes.cover.data.attributes.url}`} alt="" class="w-full h-72 object-cover rounded-md">  
    </div>
    <div class="p-5">
        <div class="flex flex-col md:flex-row justify-between">
            <div class="w-full">
                <h1 class="text-4xl mb-1">{data.attributes.title}</h1>
                <p>
                    By <a class="url" href="/">Ian Thompson</a> on {new Date(data.attributes.createdAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})}
                </p>
                <p class="mt-6 italic text-sm">
                    {data.attributes.description}
                </p>

            </div>
            <div class="md:w-1/4">
                {#each data.attributes.tags as tag}
                    <Badge title={tag} />
                {/each}
            </div>
        </div>
        <div class="my-5 ">
            <div class="border border-eerie-black px-7" />
        </div>
        <div class="space-y-6 mt-9">
            <!-- <SvelteMarkdown source={data.attributes.content} renderers={{image: ImageRenderer, heading: HeadingRenderer, codespan: CodespanRenderer, link: LinkRenderer, html: HtmlRenderer, code: CodeRenderer, list: ListRenderer, listitem: ListItemRenderer, paragraph: ParagraphRenderer, strong: StrongRenderer}} /> -->
            {#if data.attributes.toc != null}
                <div class="bg-eerie-black rounded-md p-2 ">
                    <h2 class="text-2xl mb-3">Table of Contents</h2>
                    <SvelteMarkdown source={data.attributes.toc} renderers={{list: ListRenderer, listitem: ListItemRenderer, heading: HeadingRenderer, link: TocLinkRenderer}}/>
                </div>
            {/if}
            <SvelteMarkdown source={data.attributes.content} renderers={{strong: StrongRenderer, image: ImageRenderer, heading: HeadingRenderer, codespan: CodespanRenderer, link: LinkRenderer, html: HtmlRenderer, list: ListRenderer, listitem: ListItemRenderer, paragraph: ParagraphRenderer, code: CodeRenderer}} />
        </div>
        <div class="mt-24 text-xs">
            <p class="text-neutral-content">
                * This post may contain affiliate marketing links. By clicking these links, a portion of money you spend on the websites you are referred to may be shared with the owner of this site.
            </p>
        </div>
    </div>
</article>

<style>
</style>