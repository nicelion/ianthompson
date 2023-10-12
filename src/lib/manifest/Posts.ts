/**
 Posts.ts
 iancthompson
 
 Created by Ian Thompson on July 1st 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import Article from "$lib/components/blog/Article.svelte";
// import WelcomeToTheBlog from "$lib/posts/WelcomeToTheBlog.svelte";
import type { Post } from "$lib/types/Post";

export const Posts: Post[] = [
    // {
    //     index: 3,
    //     title: "Creating an Auto-leveling Svelte Header Component",
    //     description: "In this short how-to, I show how I created a Svelte header component that auto-levels based on where it is in the structure.",
    //     slug: "creating-an-auto-leveling-svelte-header-component",
    //     cover: "/img/posts/creating-an-auto-leveling-svelte-header-component-cover.jpeg",
    //     postDate: new Date(2023, 6, 18, 12, 0, 0, 0),
    //     tags: ["code", "how-to", "svelte"]
    // },
    {
        index: 2,
        title: "raspi-metar: A METAR Visualization Project for Raspberry Pi!",
        description: "Here I describe raspi-metar, a METAR visualization project I built in the summer of 2020 for Raspberry Pi.",
        slug: "raspi-metar-a-metar-visualization-project-for-raspberry-pi",
        cover: "https://storage.googleapis.com/iacthompson-dev-bucket/medium_raspi_metar_762042dbed/medium_raspi_metar_762042dbed.jpeg",
        postDate: new Date(2023, 6, 13, 12, 0, 0, 0),
        tags: ["projects", "python", "raspberry-pi"]
    },
    {
        index: 1,
        title: "Welcome to the Blog!",
        description: "This is the first post to the blog. Here, you will find a description of what the blog is, and what the goals are.",
        slug: "welcome-to-the-blog",
        cover: "https://storage.googleapis.com/iacthompson-dev-bucket/medium_negative_space_colorful_programming_code_1062x708_2a659aebfc/medium_negative_space_colorful_programming_code_1062x708_2a659aebfc.jpg",
        postDate: new Date(2023, 5, 24, 12, 0, 0, 0),
        tags: ["general"]
    }
]