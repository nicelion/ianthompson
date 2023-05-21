/**
 +page.server.ts
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { Post, Response } from '$lib/types/Blog';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { STRAPI_URL } from '$env/static/private';
 
export const load = (async ({ params, fetch }) => {
  const post = await fetch(`${STRAPI_URL}/api/posts?filters[slug][$eq]=${params.slug}&populate=*`);
  const response: Response = await post.json();

  if (response.data.length == 1) {
    // console.log("FOUBND!!", response.data[0]);
    
    
    let blogPost: Post = response.data[0]
    
    return blogPost;
  }
 

  throw error(404, 'Not found');
}) satisfies PageServerLoad;