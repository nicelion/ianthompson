/**
 +server.ts
 iancthompson
 
 Created by Ian Thompson on December 20th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
 
export const load = (async ({ params, fetch }) => {
  const post = await fetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${params.slug}&populate=*`);
  const response = await post.json();
  
  
  if (response.data.length == 1) {

    
    return response.data[0];
  }
 

  throw error(404, 'Not found');
}) satisfies PageServerLoad;