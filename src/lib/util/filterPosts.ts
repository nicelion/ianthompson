/**
 filterPosts.ts
 iancthompson
 
 Created by Ian Thompson on July 28th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import { Posts } from '$lib/manifest/Posts';
import type { Post } from '$lib/types/Post';
import Fuse from 'fuse.js';

const fuseOptions = {
	keys: ['title', 'description', 'tags'],
	threshold: 0.6
};

/**
 * Filter the Post manifest to specified criteria
 *
 * Utilizes Fuse.js for fuzzy search
 *
 *
 * @param query general text query to search for
 * @param order the order the results should be returned in (default is newest first)
 * @param tag tag to search for
 * @returns array of Posts that match the search criteria
 */
export const getFilteredPosts = (query: string, order?: string, tag?: string) => {
	return new Promise<Post[]>((resolve, reject) => {
		/**
		 * Initialize a temp variable to host the Posts manifest by default
		 *
		 * We will eventually modify this later should we need to. This provides
		 * a baseline for us to build our query against.
		 */
		let results = Posts;

		/**
		 * We will check to see if a text query is present. If it is, then we will
		 * initiate a fuzzy search again the fuseOptions keys defined above. We will
		 * then set the results variable to whatever the fuse search has returned.
		 */
		if (query != null) {
			const fuse = new Fuse(Posts, fuseOptions);
			results = fuse.search(query).map((res) => res.item);
		}

		/**
		 * If the order is in ascending, then we will sort the results array
		 */
		if (order == 'asc') {
			results = results.sort((a, b) => b.postDate - a.postDate);
			// resolve(asc)
		}

		/**
		 * We will now check to see if tags are present in the query. If so, we will ensure that
		 * we are only returning posts that match the correct tag.
		 */
		if (tag != null) {
			results = results.filter((post) => post.tags?.includes(tag));
		}

		resolve(results);
	});
};
