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
import qs from "qs"

/** @type {import('./$types').RequestHandler} */
export async function GET({url}) {

    let baseURL = "http://localhost:1337/api/posts?"

    let baseQuery = {
        populate: "*",
        sort: ["publishedAt:desc"],
        filters: {}
    }

    let searchParams = url.searchParams.get("q")
    let tagsParam = url.searchParams.get("tag")

    // console.log("SEARCH PARMAS IN SERVER", searchParams);

    if (searchParams != "null") {
        console.log("\tsestch present");
        baseQuery.filters = {
            ...baseQuery.filters, 
            $or: [
                {
                    title: {
                        $containsi: searchParams,
                    }
                },
                {
                    description: {
                        $containsi: searchParams
                    }
                }
            ]
        }
    }

    if (tagsParam != "null") {
        baseQuery.filters = {
            ...baseQuery.filters,
            tags: {
                $contains: tagsParam
            }
        }
    }

    const query = qs.stringify({
        ...baseQuery
    }, {
        encodeValuesOnly: true
    })

    console.log(`QUERY IS /api/posts?${query}`);

    
    const res = await fetch(`${baseURL}${query}`);
    const data = await res.json() as Response;
    
    return new Response(JSON.stringify(data));
}