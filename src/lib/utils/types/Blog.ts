/**
 Blog.d.ts
 iancthompson
 
 Created by Ian Thompson on December 20th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

/**
 * Initial response from API
 */
export interface Response {
    data: [Post],
    meta: {
        pagination: Pagination
    }
}

interface Pagination {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
}

/**
 * Individual Post model
 */
export interface Post { 
    id: string,
    attributes: {
        title: string,
        description: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        slug: string,
        tags: [string],
        pinned: boolean,
        featured: boolean,
        cover: Cover
    }
}

export interface Cover {
    data: CoverData
}

interface CoverData {
    id: number,
    attributes: CoverAttributes
}

interface CoverAttributes {
    name: string,
    alternativeText?: string,
    caption?: string,
    width: number,
    height: number,
    formats: CoverFormats,
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl?: string,
    provider: string,
    provider_metadata?: string,
    createdAt: string,
    updatedAt: string
}

interface CoverFormats {
    thumbnail?: CoverFormatMetadata,
    small?: CoverFormatMetadata,
    medium?: CoverFormatMetadata,
    large?: CoverFormatMetadata
}

interface CoverFormatMetadata {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    path?: string,
    width: number,
    height: number,
    size: number,
    url: string
}