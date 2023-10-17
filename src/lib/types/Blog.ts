/**
 Blog.ts
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { Tag } from './Tag';

/**
 * Initial response from API
 */
export interface PostResponse {
	data: [Post];
	meta: {
		pagination: Pagination;
	};
}

interface Pagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

/**
 * Individual Post model
 */
export interface Post {
	id: string;
	attributes: {
		title: string;
		description: string;
		content: string;
		toc?: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		slug: string;
		pinned: boolean;
		featured: boolean;
		cover: Cover;
		postDate: Date;
		tags: {
			data: [
				{
					id: number;
					attributes: Tag;
				}
			];
		};
	};
}

export interface Cover {
	data: CoverData;
}

interface CoverData {
	id: number;
	attributes: CoverAttributes;
}

interface CoverAttributes {
	name: string;
	alternativeText?: string;
	caption?: string;
	width: number;
	height: number;
	formats: CoverFormats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl?: string;
	provider: string;
	provider_metadata?: string;
	createdAt: string;
	updatedAt: string;
}

interface CoverFormats {
	thumbnail?: CoverFormatMetadata;
	small?: CoverFormatMetadata;
	medium?: CoverFormatMetadata;
	large?: CoverFormatMetadata;
}

interface CoverFormatMetadata {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path?: string;
	width: number;
	height: number;
	size: number;
	url: string;
}
