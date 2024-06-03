/**
 +page.ts
 iancthompson
 
 Created by Ian Thompson on June 3rd 2024
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2024 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { PostResponse } from '$lib/utils/types/Blog';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { Posts } from '$lib/manifest/Posts';
import { getFilteredPosts } from '$lib/util/filterPosts';

// const qs = require("qs")

// export const load = (async ({ fetch, url }) => {

//     // console.log("url!!", url.searchParams.get("q"));

//     // The "search parameters" that are to be typed into the text field
//     let searchParam: string | null = null
//     let tagsParam: string | null = null

//     if (url.searchParams.get("q") != null) {
//       console.log("From page, this isnot nyll!!");
//       searchParam = url.searchParams.get("q") as string
//     }

//     if (url.searchParams.get("tag") != null) {
//       tagsParam = url.searchParams.get("tag") as string
//     }

//     console.log("accessing " + `/api/posts?q=${searchParam}`);

//     const res = await fetch(`/api/posts?q=${searchParam}&tag=${tagsParam}`);
//     const response: Response = await res.json();

//     return response

//   throw error(404, 'Not found');
// }) satisfies PageLoad;

export const load = (async ({ fetch, url }) => {
	let posts = Posts;

	console.log('Calling load');

	// The "search parameters" that are to be typed into the text field
	let searchParam: string | null = null;
	let tagsParam: string | null = null;
	let pageParam: string | null = null;
	let sortParam: string | null = null;

	if (url.searchParams.get('q') != null) {
		// console.log("From page, this isnot nyll!!");
		searchParam = url.searchParams.get('q') as string;
	}

	if (url.searchParams.get('tag') != null) {
		tagsParam = url.searchParams.get('tag') as string;
	}

	if (url.searchParams.get('page') != null) {
		pageParam = url.searchParams.get('page') as string;
	}

	if (url.searchParams.get('date') != null) {
		sortParam = url.searchParams.get('date') as string;
	}
	// console.log("\taccessing " + `/api/posts?q=${searchParam}`);

	posts = await getFilteredPosts(searchParam, sortParam, tagsParam);

	console.log('fuse', posts);

	/**
	 * Forward the querystring to the server and query Strapi from there
	 */
	// const res = await fetch(`/api/posts?q=${searchParam}&tag=${tagsParam}&page=${pageParam}&date=${sortParam}`);

	// const response: PostResponse = await res.json();

	return {
		posts: posts
	};

	throw error(404, 'Not found');
}) satisfies PageLoad;