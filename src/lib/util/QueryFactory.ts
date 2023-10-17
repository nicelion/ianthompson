/**
 QueryFactory.ts
 iancthompson
 
 Created by Ian Thompson on May 21st 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { Query } from '$lib/types/Query';

export const QueryFactory = (l: Location, search: Query) => {
	const urlParams = new URLSearchParams(l.search);

	Object.keys(search).forEach((element) => {
		if (search[element] != null) {
			urlParams.set(element, search[element]);
		}
	});

	return urlParams.toString();
};
