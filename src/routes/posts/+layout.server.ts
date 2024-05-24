/**
 +layout.server.ts
 iancthompson
 
 Created by Ian Thompson on May 23rd 2024
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2024 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { Post } from '$lib/types/Post';
import { getPostData } from '$lib/util/getPostData';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({params, url}) => {
    // console.log(params, url);

    if (url.pathname != "/posts") {
        // user is navigating to a post!
        console.log("Naving to a post");
        
        let postData: Promise<Post> = await getPostData(url.pathname)

        if (postData.published == false || postData == undefined) {
            console.log("Throwing!");
            
            throw error(404, "Not found!!")
        } 

        return postData
    }
    
    return {};
}) satisfies LayoutServerLoad;