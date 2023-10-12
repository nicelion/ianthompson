/**
 +server.ts
 iancthompson
 
 Created by Ian Thompson on October 12th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    return new Response();
};