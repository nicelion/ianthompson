/**
 getPostData.ts
 iancthompson
 
 Created by Ian Thompson on July 12th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import { Posts } from "$lib/manifest/Posts";
import type { Post } from "$lib/types/Post";

export const getPostData = async (pathname: string) => {
    return new Promise<Post>((resolve, reject) => {

        let postToFind = Posts.find(s => pathname.endsWith(s.slug))

        if (postToFind != undefined) {
            resolve(postToFind)
        }
        
        reject(new Error("No post could be found!"))
    });
}