/**
 +layout.ts
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import { PUBLIC_STRAPI_URL } from "$env/static/public"
import type { Tag } from "$lib/types/Tag"

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    const tags = await fetch(`${PUBLIC_STRAPI_URL}/api/tags`)
    const response = await tags.json()


    return {
        tags: response.data as [Tag]
    }
} 