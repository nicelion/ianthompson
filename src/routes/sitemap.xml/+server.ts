/**
 +page.ts
 iancthompson
 
 Created by Ian Thompson on October 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import { Posts } from '$lib/manifest/Posts';

const site = 'https://www.iancthompson.dev';
const pages = ['posts', 'lets-chat'];

export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
        <url>
            <loc>${site}</loc>
            <changefreq>weekly</changefreq>
            <priority>1</priority>
        </url>
        ${pages
					.map(
						(page) => `
            <url>
                <loc>${site}/${page}</loc>
                <changefreq>weekly</changefreq>
                <priority>0.7</priority>
            </url>
        `
					)
					.join('')}
		${Posts.map(
			(post) => `
		<url>
			<loc>${site}/${post.slug}</loc>
			<changefreq>monthly</changefreq>
			<priority>0.3</priority>
		</url>
		`
		).join('')}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
