<!--
 hymns.svelte
 iancthompson
 
 Created by Ian Thompson on June 3rd 2024
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2024 Nice Lion Technologies LLC. All Rights Reserved.
 
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
		Heading
	} from '$lib/components/blog/renderers';

	import { page } from '$app/stores';
	let {postData}: Post = $page.data

</script>

<Article postData={postData}>
	<p>Hello, this is a template!</p>
	<Column>
		<ColumnContent slot="left">
			<p>
				Column content to the left!
			</p>
		</ColumnContent>
		<Image
			src="https://storage.googleapis.com/iacthompson-dev-bucket/3_2d91ac0434/3_2d91ac0434.jpg"
			alt="A screenshot of the App Store provided screenshot of my first game: Click Quick!"
			slot="right" />
	</Column>
	<Column>
		<Image
			src="https://storage.googleapis.com/iacthompson-dev-bucket/IMG_5660_8d1ac28c99/IMG_5660_8d1ac28c99.jpg"
			alt="2019 graduating seniors back on the elementary school's playground"
			slot="left" />
		<ColumnContent slot="right">
			<p>
				Column content to the right!
			</p>
		</ColumnContent>
	</Column>
</Article>
