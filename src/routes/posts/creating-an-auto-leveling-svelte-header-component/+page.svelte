<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on July 18th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on July 12th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import Article from '$lib/components/blog/renderers/Article.svelte';
	import type { Post } from '$lib/types/Post';
	import { page } from '$app/stores';
	import { getPostData } from '$lib/util/getPostData';
	import Heading from '$lib/components/blog/renderers/Heading.svelte';
	import Image from '$lib/components/blog/renderers/Image.svelte';
	import PostLoader from '$lib/components/blog/PostLoader.svelte';
	import Section from '$lib/components/blog/renderers/Section.svelte';
	import CodespanRenderer from '$lib/components/blog/renderers/CodespanRenderer.svelte';
	import CodeRenderer from '$lib/components/blog/renderers/CodeRenderer.svelte';
	import Error from '$lib/components/blog/Error.svelte';

	let postData: Promise<Post> = getPostData($page.url.pathname);
</script>

{#await postData}
	<PostLoader />
{:then post}
	<Article postData={post}>
		<Section title="Introduction">
			<p>
				When creating this blog, I came across a minor inconvience: Keeping track of <CodespanRenderer
					content="<h#> </h#>" />tags and the appropriate depths they should be at. Specifically, I
				have created a <CodespanRenderer content="<Section title=''>" /> Svelte components. These components
				take a <CodespanRenderer content="<slot>" /> wherein content for for a specific section should
				be rendered.
			</p>
			<p>
				Inside <CodespanRenderer content="<Section />" /> components, I will render a <CodespanRenderer
					content="<h>" /> tag with the text of the passed <CodespanRenderer content="title" /> prop.
				To handle nested sections (and headers of different levels that I would wish to display), I had
				the component take a <CodespanRenderer content="depth" /> prop as well.
			</p>
			<p>
				As posts began to grow, and as sections became more and more nested, I didn't want to have
				to keep track of what "depth" each section should be rendered at.
			</p>
			<p>
				Thus, I had to find a solution. And I knew I had to reduce as much boilerplate as possible.
			</p>
		</Section>
		<Section title="The Code">
			<Section title="Heading.svelte">
				<p>
					In <CodespanRenderer content="Heading.svelte" />, we define a component that takes a <CodespanRenderer
						content="depth" /> and <CodespanRenderer content="text" /> prop. Incase the below code isn't
					clear enough, this component will render the appropriate <CodespanRenderer
						content="<h> </h>" /> based on the <CodespanRenderer content="depth" /> prop (which should
					be a number). Inside the tag, we will render the string passed in the <CodespanRenderer
						content="text" /> prop. This will be important later.
				</p>
				<CodeRenderer
					lang="javascript"
					gist="https://gist.githubusercontent.com/nicelion/d2ab36ce97961d3033bed5dcaa5f6cf6/raw/8cc91d4c455839fdfe646d6210e13b35fc9b608c/Header.svelte" />
			</Section>
			<Section title="Section.svelte" />
		</Section>
	</Article>
{:catch error}
	<Error />
{/await}
