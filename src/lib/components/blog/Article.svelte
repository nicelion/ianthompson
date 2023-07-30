<!--
 Article.svelte
 iancthompson
 
 Created by Ian Thompson on July 4th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import type { Post } from "$lib/types/Post";
	import Badge from "./Badge.svelte";

    // export let coverImg = ""
    // export let title = ""
    // export let description = ""
    // export let tags = []

    export let postData: Post
</script>

<svelte:head>
    <title>{postData.title}</title>
    <meta name="description" content={postData.description}>
</svelte:head>

<article class="bg-black-lighter rounded-md text-cornsilk">
    <div class="w-full h-1/3">    
        <img src={postData.cover} alt="" class="w-full h-72 object-cover rounded-md">  
    </div>
    <div class="py-5 px-1">
        <div class="flex flex-col md:flex-row justify-between border-b-2 border-eerie-black px-3 pb-4">
            <div class="w-full">
                <h1 class="text-4xl mb-2">{postData.title}</h1>
                <p>
                    By <a class="url" href="/">Ian Thompson</a> on {new Date(postData.postDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})}
                </p>
                <p class="mt-2 text-sm">
                    <!-- Updated on {new Date(data.attributes.updatedAt).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})} -->
                </p>
                <p class="mt-6 italic text-sm">
                    {postData.description}
                </p>

            </div>
            <div class="md:w-1/4 mt-4">
                {#each postData.tags as tag}
                    <Badge title={tag} />
                {/each}
            </div>
        </div>

        <div class="space-y-6 mt-9 px-3 leading-relaxed">

            <slot />
            <!-- <div class="rounded-md p-2 border-b-2 border-eerie-black px-4 pb-4 ">
                <h2 class="text-2xl mb-3 font-bold">Table of Contents</h2>
                <SvelteMarkdown source={generateTableOfContents(post.attributes.content)} renderers={{list: ListRenderer, listitem: ListItemRenderer, heading: HeadingRenderer, link: TOCLinkRenderer}}/>
            </div>


            <SvelteMarkdown source={post.attributes.content} renderers={{strong: StrongRenderer, image: ImageRenderer, heading: HeadingRenderer, codespan: CodespanRenderer, link: LinkRenderer, html: HtmlRenderer, list: ListRenderer, listitem: ListItemRenderer, paragraph: ParagraphRenderer, code: CodeRenderer}} />  -->
        </div>
        <div class="mt-24 text-xs p-3">
            <p class="text-neutral-content">
                * This post may contain affiliate marketing links. By clicking these links, a portion of money you spend on the websites you are referred to may be shared with the owner of this site.
            </p>
        </div>
    </div>
</article>