/**
 +server.ts
 iancthompson
 
 Created by Ian Thompson on December 20th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import { error } from '@sveltejs/kit';
// import { Response } from '$lib/utils/types/Blog';

/** @type {import('./$types').RequestHandler} */
export async function GET({url}) {

    // console.log("URL IS", url);
    
    let baseURL = "http://localhost:1337/api/posts?populate=*&sort[0]=publishedAt%3Adesc"

    let searchParams = url.searchParams.get("q")
    let tagsParam = url.searchParams.get("tag")

    console.log("SEARCH PARMAS IN SERVER", searchParams);

    if (searchParams != "null") {
        console.log("\tsestch present");
        
        baseURL = baseURL + `&filters[title][$contains]=${searchParams}`
    }

    if (tagsParam != "null") {
        baseURL = baseURL + `&filters[tags][$contains]=${tagsParam}`
    }

    console.log("\ttring to access " + baseURL);
    
    const res = await fetch(baseURL);
    const data = await res.json() as Response;
    
    return new Response(JSON.stringify(data));
}