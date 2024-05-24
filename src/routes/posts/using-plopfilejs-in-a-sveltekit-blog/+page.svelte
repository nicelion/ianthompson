<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on July 12th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import type { Post } from '$lib/types/Post';
	import PostLoader from '$lib/components/blog/PostLoader.svelte';

	import {
		Article,
		Column,
		ColumnContent,
		Image,
		Section,
		Heading, 
		List,
		ListItem,
		CodespanRenderer,
		CodeRenderer
	} from '$lib/components/blog/renderers';
	import { page } from '$app/stores';

	export let postData: Post = $page.data
</script>

<Article {postData}>
	<Heading depth=1  text="Context"/>
	<p>
		Earlier this year (or maybe even last year-- who is even keeping track of time at this point?), I decided that I wanted a blog. Looking back, I don't know why, as I do not have much to say. Nonetheless, I wanted a personal website (the one you are reading this on) and a place to share any thoughts I may have had or share the various projects I never completed. 
	</p>
	<p>
		Around this time, I began to delve deeper into the world of Svelte with the stable release of SvelteKit version 1.0. 
	</p>
	<Heading depth=1  text="Problem"/>
	<p>
		While I certainly love SvelteKit (and will sing its praises to anyone who listens), the routing system embedded in it is a little odd at first. If you were to git clone this repository right now (which you can totally do because the Licence allows it!), you would see a plethora of repetition in the blog sphere. 
	</p>
	<p>
		Quick, let's take a look at how the filesystem routing works: 
	</p>
	<Heading depth=2  text="Filesystem Structure"/>
	<CodeRenderer gist="https://gist.githubusercontent.com/nicelion/6a52eaac450e2d3831516ba7a7903a00/raw/3867891f27e5106e6e5e9b6e2b314e8a6cf90263/svelte-filesystem-basic" />
	<p>
		In SvelteKit, the routing system works by matching browser URLs to corresponding Svelte components embedded in directories within the routes folder. 
	</p>
	<!-- INSERT LIST -->
	<Heading depth=2  text="The Basics"/>
	<List ordered={true}>
		<ListItem>
			<CodespanRenderer>+page.svelte</CodespanRenderer> files represent individual pages in your application. Each +page.svelte file corresponds to a specific route defined in your routing configuration.
		</ListItem>
		<ListItem>
			<CodespanRenderer>+page.ts</CodespanRenderer> files are optional TypeScript files that can be used alongside +page.svelte files to provide type checking and other TypeScript features.
		</ListItem>
		<ListItem>
			<CodespanRenderer>+layout.svelte</CodespanRenderer> files are used to define the layout structure of your application. They typically contain elements that are common across multiple pages, such as headers, footers, or sidebars. Layouts can be nested to create more complex layouts.
		</ListItem>
		
	</List>

	<p>
		When a user navigates to a specific URL, SvelteKit matches the URL to the corresponding +page.svelte file and renders it. If a +layout.svelte file is specified for the page, the layout is also rendered, and the content of the +page.svelte file is inserted into the layout at the appropriate location.
	</p>
	<p>
		This gets repetitive VERY quickly for a static blog like this one (meaning no CMS manages posts, and each post is "hard-coded" into the codebase). 
	</p>
	<p>
		Whenever I want to create a new post to this blog, I must create a new directory at '/routes/posts/POST/.' I make a +page.svelte and a +page.ts file within that directory. Once created, I append the post to a JS object located elsewhere so SvelteKit knows the posts I want to share.  
	</p>
	<Heading depth=1  text="Plopfile.js"/>
	<p>
		I was toying around with a different project when I first heard of Plopfile.js, a micro-generator framework that simplifies code generation by providing a consistent way to create code or flat text files. 
	</p>
</Article>
