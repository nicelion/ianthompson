/**
 +page.ts
 iancthompson
 
 Created by Ian Thompson on December 20th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { Response } from "$lib/utils/types/Blog"

// /** @type {import('./$types').PageLoad} */
// export async function load({fetch, params}) {
    
//   console.log("PRARMS", params);
  
  

//   const res = await fetch('/posts');
//   const response: Response = await res.json();
  
//   return response

//   }

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const load = (async ({ fetch, url }) => {

    // console.log("url!!", url.searchParams.get("q"));
  
    let searchParam: string | null = null
    let tagsParam: string | null = null

    if (url.searchParams.get("q") != null) {
      console.log("From page, this isnot nyll!!");
      searchParam = url.searchParams.get("q") as string
    }

    if (url.searchParams.get("tag") != null) {
      tagsParam = url.searchParams.get("tag") as string
    }

    console.log("accessing " + `/posts?q=${searchParam}`);
    

    const res = await fetch(`/posts?q=${searchParam}&tag=${tagsParam}`);
    const response: Response = await res.json();
  
    return response

 
  throw error(404, 'Not found');
}) satisfies PageLoad;