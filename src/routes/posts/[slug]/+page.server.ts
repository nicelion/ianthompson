/**
 +page.server.ts
 iancthompson
 
 Created by Ian Thompson on February 25th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { Post, Response } from '$lib/utils/types/Blog';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
 
export const load = (async ({ params, fetch }) => {
  const post = await fetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${params.slug}&populate=*`);
  const response: Response = await post.json();

  if (response.data.length == 1) {

    let blogPost: Post = response.data[0]
    
    return blogPost;
  }
 

  throw error(404, 'Not found');
}) satisfies PageServerLoad;