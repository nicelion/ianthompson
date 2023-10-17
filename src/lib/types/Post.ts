/**
 Post.ts
 iancthompson
 
 Created by Ian Thompson on July 1st 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

export interface Post {
	title: string;
	description: string;
	postDate: Date;
	cover: string;
	slug: string;
	index?: number;
	tags?: string[];
	// component: any
}
