/**
 Posts.ts
 iancthompson
 
 Created by Ian Thompson on July 1st 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import Article from '$lib/components/blog/renderers/Article.svelte';
// import WelcomeToTheBlog from "$lib/posts/WelcomeToTheBlog.svelte";
import type { Post } from '$lib/types/Post';

export const Posts: Post[] = [
	/* POSTS */		
    {
		published: false,
		title: "You Were Made For This: Thoughts from a Young Life Leader",
		description: "j",
		slug: 'you-were-made-for-this:-thoughts-from-a-young-life-leader',
		cover: "https://dpbvj4a9anukr.cloudfront.net/846b4004-7989-4e48-9cf3-aa3dca341f35/f1dee311-9b6e-42cd-8d8c-5e2c0dd8a965/c67cc95ff96199de32717010b8910fc5/2019-Carolina-Point_0045.jpg",
		postDate: new Date("2024-04-09"),
		tags: []
	},	
    {
		published: false,
		title: "I Learned Jupyter for an Overkill Project as a Student Teacher",
		description: "f",
		slug: 'i-learned-jupyter-for-an-overkill-project-as-a-student-teacher',
		cover: "https://miro.medium.com/v2/resize:fit:1358/1*RzxZF0mmXAsMLrIzAWYDSg.png",
		postDate: new Date("2024-04-09"),
		tags: ["python", "projects", "teaching"]
	},	
    {
		published: false,
		title: "From Computer Engineering to Elementary Education: Reflecting on the College Experience",
		description: "j",
		slug: 'from-computer-engineering-to-elementary-education:-reflecting-on-the-college-experience',
		cover: "https://scpictureproject.org/wp-content/uploads/tillman-hall.jpg",
		postDate: new Date("2024-04-09"),
		tags: ["personal", "teaching"]
	},	
    {
		published: false,
		title: "Building a Scratch Extension to Interface with a TPBot",
		description: "k",
		slug: 'building-a-scratch-extension-to-interface-with-a-tpbot',
		cover: "/img/cml-scratch.jpg",
		postDate: new Date("2024-04-09"),
		tags: ["javascript", "code", "projects"]
	},	
    {
		published: false,
		title: "How an Elementary Education Major Worked in a Church's A/V Department",
		description: "One summer...",
		slug: 'how-an-elementary-education-major-worked-in-a-churchs-a/v-department',
		cover: "",
		postDate: new Date("2024-04-09"),
		tags: ["work", "projects"]
	},	
    {
		published: true,
		title: "PCBTree: A Christmas Tree PCB I Made in High School",
		description: "A high school trip to Las Vegas might seem unusual, but it sparked my fascination with electronics. Inspired by ElectroBoom's near-death fail compilations, I transitioned from programming to hardware, leading to the creation of PCBTree—a Christmas tree-shaped printed circuit board. Designed using KiCAD and powered by an ATTiny85, this project was my entry into the world of DIY electronics.",
		slug: 'pcbtree:-a-christmas-tree-pcb-i-made-in-high-school',
		cover: "/img/pcbtree.JPG",
		postDate: new Date("2017-11-31"),
		tags: ["code", "projects", "arduino", "c", "microcontroller", "hardware"]
	},	
    {
		published: true,
		title: "Hymns and Hops: An Online Song Book using SvelteKit",
		description: "Hymns and Hops is a local gathering where craft beer is enjoyed, and traditional hymns are sung loud. Here I describe a project I created in SvelteKit where I created an online songbook for the gathering.",
		slug: 'hymns-and-hops:-an-online-song-book-using-sveltekit',
		cover: "https://github.com/nicelion/hymns/blob/main/static/img/bar.jpg?raw=true",
		postDate: new Date("2023-04-23"),
		tags: ["sveltekit", "projects"]
	},	
    {
		published: false,
		title: "Using Plopfile.js in a SvelteKit Blog",
		description: "Discover the power of plopfile.js in your SvelteKit blog. Our upcoming post walks you through leveraging this tool to simplify the creation of new blog posts. Enhance your workflow by automating repetitive tasks and focusing more on content creation.",
		slug: 'using-plopfilejs-in-a-sveltekit-blog',
		cover: "https://plopjs.com/images/plop-meta-card.jpg",
		postDate: new Date("2024-04-09"),
		tags: ["code", "javascript", "how-to", "sveltekit"]
	},	
	{
		index: 4,
		published: false,
		title: 'Summer Moon Coffee: A Review',
		description:
			'Recently, a new coffee shop has been popping up around the Greenville area. In this review, I document my first experience and give my opinion on whether this coffee shop is truly all it is cracked up to be.',
		slug: 'summer-moon-coffee-a-review',
		cover:
			'https://bloximages.newyork1.vip.townnews.com/postandcourier.com/content/tncms/assets/v3/editorial/6/cc/6cc28ada-5ca1-11ee-a98a-5fcd26fa663a/65132efeaa608.image.jpg?resize=1200%2C800',
		postDate: new Date(2023, 9, 15, 12, 0, 0, 0),
		tags: ['reviews', 'food-and-drink']
	},
	{
		index: 3,
		published: true,
		title: 'raspi-metar: A METAR Visualization Project for Raspberry Pi!',
		description:
			'Here I describe raspi-metar, a METAR visualization project I built in the summer of 2020 for Raspberry Pi.',
		slug: 'raspi-metar-a-metar-visualization-project-for-raspberry-pi',
		cover:
			'https://storage.googleapis.com/iacthompson-dev-bucket/medium_raspi_metar_762042dbed/medium_raspi_metar_762042dbed.jpeg',
		postDate: new Date(2023, 6, 13, 12, 0, 0, 0),
		tags: ['projects', 'python', 'raspberry-pi'],
		
	},
	{
		index: 5,
		published: true,
		title: 'teachable-svelte: An open-source Teachable Machine wrapper',
		description:
			'Here, I describe teachable-svelte, an open-source wrapper for creating, training, and using machine learning models compatible with Google Teachable Machine.',
		slug: 'teachable-svelte',
		cover:
			'/img/svelte_tm.png',
		postDate: new Date("2023-07-08"),
		tags: ['code', 'projects']
	},
	{
		index: 2,
		published: true,
		title: 'Attending Interaction Design & Children Conference at Northwestern University',
		description:
			'This past June, I had the opportunity to attend and present at the ACM Interaction Design & Children Conference at Northwestern University in Chicago, IL.',
		slug: 'idc-2023',
		cover:
			'https://storage.googleapis.com/iacthompson-dev-bucket/IMG_5768_7d0ca1d01c/IMG_5768_7d0ca1d01c.jpeg?updated_at=2023-11-07T16:29:46.659Z',
		postDate: new Date("2023-6-19"),
		tags: ['trip-report', 'academic'],
	},
	{
		index: 1,
		published: true,
		title: 'Welcome to the Blog!',
		description:
			'This is the first post to the blog. Here, you will find a description of what the blog is, and what the goals are.',
		slug: 'welcome-to-the-blog',
		cover:
			'https://storage.googleapis.com/iacthompson-dev-bucket/medium_negative_space_colorful_programming_code_1062x708_2a659aebfc/medium_negative_space_colorful_programming_code_1062x708_2a659aebfc.jpg',
		postDate: new Date(2023, 5, 24, 12, 0, 0, 0),
		tags: ['general'],
	}
];
