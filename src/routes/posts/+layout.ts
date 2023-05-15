/**
 +layout.ts
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { Tag } from "$lib/types/Tag"

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    const tags = await fetch("http://localhost:1337/api/tags")
    const response = await tags.json()


    return {
        tags: response.data as [Tag]
    }
} 