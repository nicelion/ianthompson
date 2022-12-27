/**
 +server.ts
 iancthompson
 
 Created by Ian Thompson on December 20th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import { error } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const res = await fetch('http://localhost:1337/api/posts?populate=*&sort[1]=pinned%3Aasc&sort[0]=publishedAt%3Adesc');
    const data = await res.json();
    
    return new Response(JSON.stringify(data));
}