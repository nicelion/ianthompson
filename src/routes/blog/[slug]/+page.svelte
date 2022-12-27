<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on December 20th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
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
	import { onMount } from 'svelte';
  import SvelteMarkdown from 'svelte-markdown'

    export let data;

// console.log("data", data.data);
    let content = data.attributes.content;

    // onMount(async () => {
    //     const marked = (await import('marked')).default;
    //     content = marked(data.attributes.content);
    // })

console.log(data.attributes.tags);


    // const date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 

</script>

<svelte:head>
    <title>{data.attributes.title} - iancthompson.dev</title>
    <meta name="description" content={data.attributes.description}>

</svelte:head>

<article class="bg-black-lighter rounded-md text-cornsilk">
    <div class="w-full h-1/3">    
        <img src={`http://localhost:1337${data.attributes.cover.data.attributes.formats.small.url}`} alt="" class="w-full h-72 object-cover rounded-md">  
    </div>
    <div class="p-5">
        <div class="flex justify-between">
            <div class="w-full">
                <h1 class="text-4xl mb-1">{data.attributes.title}</h1>
                <p>
                    By <a class="url" href="#">Ian Thompson</a> on {new Date(data.attributes.createdAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}
                </p>
                <p class="mt-6 italic text-sm">
                    {data.attributes.description}
                </p>

            </div>
            <div class="w-1/4">
                {#each data.attributes.tags as tag}
                    <Badge title={tag} />
                {/each}
            </div>
        </div>
        <div class="my-5 ">
            <div class="border border-eerie-black px-7" />
        </div>
        <div class="space-y-6 mt-9">
            <!-- {@html content} -->
            
            <!-- <div class="flex flex-col text-center justify-center rounded-lg h-96">
                <img src={`http://localhost:1337${data.attributes.cover.data.attributes.formats.small.url}`} alt="" class="border-2 border-white rounded-lg h-full object-contain">
                <p>This is a description of the image</p>
            </div> -->

            <!-- {paragraph: ParagraphRenderer, heading: HeadingRenderer, strong: StrongRenderer, image: ImageRenderer} -->
            <SvelteMarkdown source={data.attributes.content} renderers={{strong: StrongRenderer, image: ImageRenderer, heading: HeadingRenderer, codespan: CodespanRenderer, link: LinkRenderer, html: HtmlRenderer, code: CodeRenderer, list: ListRenderer, listitem: ListItemRenderer}} />
        </div>
    </div>
</article>

<style>

</style>

