/**
 +page.ts
 iancthompson
 
 Created by Ian Thompson on June 3rd 2024
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2024 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { Post } from '$lib/types/Post';
import { getPostData } from '$lib/util/getPostData.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    
	let {slug} = params
    
	const post = await import(`../${slug}.svelte`);
	
	const postData: Promise<Post> = await getPostData(slug)
	

	// const { title, dir } = post.metadata;
	const content = post.default;

	return {
		content,
		postData
		// title,
		// dir
	};
}
