/**
 Query.ts
 iancthompson
 
 Created by Ian Thompson on May 21st 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

export enum OrderBy {
	ASC = 'asc',
	DESC = 'desc'
}

export interface Query {
	q?: string;
	date?: OrderBy;
	tag?: string;
	page?: number;
}
