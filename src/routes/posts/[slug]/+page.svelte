<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	import Badge from '$lib/components/blog/Badge.svelte';
    // import ContentContainer from '$lib/components/blog/ContentContainer.svelte';
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
    import TOCLinkRenderer from '$lib/components/blog/renderers/TOCLinkRenderer.svelte';

	// import TocLinkRenderer from '$lib/components/blog/renderers/TOCLinkRenderer.svelte';
	
    import type { Post } from '$lib/types/Blog';
	import { onMount } from 'svelte';
    import SvelteMarkdown from 'svelte-markdown'
    // import toc from "markdown-toc"
    
    export let data: Post;
    let post: Post = data

    // console.log("POST!!!!", post);

    function generateTableOfContents(markdown) {
        const headings = markdown.match(/^(#{1,6})\s+(.*)$/gm);
        let tableOfContents = '';
        let currentLevel = 0;
        let index = 1;

        headings.forEach(heading => {
            const level = heading.indexOf(' ')
            const text = heading.slice(level + 1);

            const link = text.toLowerCase().replace(/\s/g, '-')

            // console.log(level, text, link);

            tableOfContents = tableOfContents + '\t'.repeat(level - 1) + `- [${text}](#${link})` + "\n"
        })


        return tableOfContents;
}


// console.log( generateTableOfContents(post.attributes.content));

    
</script>

<svelte:head>
    <title>{post.attributes.title} - iancthompson.dev</title>
    <meta name="description" content={post.attributes.description}>

</svelte:head>

<article class="bg-black-lighter rounded-md text-cornsilk">
    <div class="w-full h-1/3">    
        <img src={`${data.attributes.cover.data.attributes.url}`} alt="" class="w-full h-72 object-cover rounded-md">  
    </div>
    <div class="py-5 px-1">
        <div class="flex flex-col md:flex-row justify-between border-b-2 border-eerie-black px-7 pb-4">
            <div class="w-full">
                <h1 class="text-4xl mb-1">{post.attributes.title}</h1>
                <p>
                    By <a class="url" href="/">Ian Thompson</a> on {new Date(data.attributes.postDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})}
                </p>
                <p class="mt-2 text-sm">
                    Updated on {new Date(data.attributes.updatedAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})}
                </p>
                <p class="mt-6 italic text-sm">
                    {data.attributes.description}
                </p>

            </div>
            <div class="md:w-1/4 mt-4">
                {#each post.attributes.tags.data as tag}
                    <Badge title={tag.attributes.tag} color={tag.attributes.color} />
                {/each}
            </div>
        </div>

        <div class="space-y-6 mt-9 px-3">
            <div class="rounded-md p-2 border-b-2 border-eerie-black px-7 pb-4 ">
                <h2 class="text-2xl mb-3 font-bold">Table of Contents</h2>
                <SvelteMarkdown source={generateTableOfContents(post.attributes.content)} renderers={{list: ListRenderer, listitem: ListItemRenderer, heading: HeadingRenderer, link: TOCLinkRenderer}}/>
            </div>


            <SvelteMarkdown source={post.attributes.content} renderers={{strong: StrongRenderer, image: ImageRenderer, heading: HeadingRenderer, codespan: CodespanRenderer, link: LinkRenderer, html: HtmlRenderer, list: ListRenderer, listitem: ListItemRenderer, paragraph: ParagraphRenderer, code: CodeRenderer}} /> 
        </div>
        <div class="mt-24 text-xs p-3">
            <p class="text-neutral-content">
                * This post may contain affiliate marketing links. By clicking these links, a portion of money you spend on the websites you are referred to may be shared with the owner of this site.
            </p>
        </div>
    </div>
</article>