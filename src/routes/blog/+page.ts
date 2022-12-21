/**
 +page.ts
 iancthompson
 
 Created by Ian Thompson on December 20th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
    

    const res = await fetch('/posts');
    const response = await res.json();

    return response

  }