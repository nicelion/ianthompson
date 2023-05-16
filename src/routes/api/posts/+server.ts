/**
 +server.ts
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';
// import { Response } from '$lib/utils/types/Blog';
import qs from "qs"

/** @type {import('./$types').RequestHandler} */
export async function GET({url}) {

    let baseQuery = {
        populate: "*",
        sort: ["publishedAt:desc"],
        filters: {}
    }

    let searchParams = url.searchParams.get("q")
    let tagsParam = url.searchParams.get("tag")

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

    // if (tagsParam != "null") {
    //     baseQuery.filters = {
    //         ...baseQuery.filters,
    //         tags: {
    //             $contains: tagsParam
    //         }
    //     }
    // }

    if (tagsParam != "null") {
        baseQuery.filters = {
            ...baseQuery.filters,
            tags: {
                tag: {
                    $eq: tagsParam
                }
            }
        }
    }

    const query = qs.stringify({
        ...baseQuery
    }, {
        encodeValuesOnly: true
    })

    console.log(`\tQUERY IS /api/posts?${query}`);
    console.log(`\tFETCHING ${env.STRAPI_URL}${query}`);
    
    
    const res = await fetch(`${env.STRAPI_URL}${query}`);
    const data = await res.json() as Response;
    
    return new Response(JSON.stringify(data));
}