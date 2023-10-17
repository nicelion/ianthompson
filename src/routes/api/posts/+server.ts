/**
 +server.ts
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import { PUBLIC_STRAPI_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';
// import { Response } from '$lib/utils/types/Blog';
import qs from 'qs';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	let baseQuery = {
		populate: '*',
		sort: ['postDate:desc'],
		filters: {},
		pagination: {
			page: 1,
			pageSize: 10
		}
	};

	let searchParams = url.searchParams.get('q');
	let tagsParam = url.searchParams.get('tag');
	let pageParam = url.searchParams.get('page');
	let sortParam = url.searchParams.get('date');

	if (sortParam != 'null') {
		baseQuery.sort = [`postDate:${sortParam}`];
	}

	if (searchParams != 'null') {
		console.log('\tsestch present');
		baseQuery.filters = {
			...baseQuery.filters,
			$or: [
				{
					title: {
						$containsi: searchParams
					}
				},
				{
					description: {
						$containsi: searchParams
					}
				}
			]
		};
	}

	// if (tagsParam != "null") {
	//     baseQuery.filters = {
	//         ...baseQuery.filters,
	//         tags: {
	//             $contains: tagsParam
	//         }
	//     }
	// }

	if (tagsParam != 'null') {
		baseQuery.filters = {
			...baseQuery.filters,
			tags: {
				tag: {
					$eq: tagsParam
				}
			}
		};
	}

	if (pageParam != 'null') {
		baseQuery.pagination = {
			page: pageParam,
			pageSize: 10
		};
	}

	const query = qs.stringify(
		{
			...baseQuery
		},
		{
			encodeValuesOnly: true
		}
	);

	console.log(`\tQUERY IS /api/posts?${query}`);
	console.log(`\tFETCHING ${PUBLIC_STRAPI_URL}/api/posts?${query}`);

	const res = await fetch(`${PUBLIC_STRAPI_URL}/api/posts?${query}`);
	const data = (await res.json()) as Response;

	return new Response(JSON.stringify(data));
}
