/**
 Projects.ts
 iancthompson
 
 Created by Ian Thompson on May 11th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { Project } from "$lib/types/Project";

const Projects: Project[] = [
	{
		name: "raspi-metar",
		description:
			"In short, raspi-metar is a Raspberry Pi project that takes METAR data from various airports and displays it on a VFR sectional map using NEOPIXEL LEDs.",
		img: "/img/raspi-metar.jpeg",
		url: "/posts/raspi-metar-a-metar-visualization-project-for-raspberry-pi",
		github: "https://github.com/nicelion/raspi-metar",
		tags: ["code"]
	},
	{
		name: "S.P.O.T: A Game-Based Application for Fostering Critical Machine Learning Literacy Among Children",
		description:
			"This paper describes S.P.O.T., a game-based application for promoting children's practical understanding of ML concepts and applications. \nThis WIP paper was presented at IDC '23 at Northwestern University.",
		img: "/img/previews/spot.png",
		url: "https://dl.acm.org/doi/10.1145/3585088.3593884",
		tags: ["pubs"]
	},
	{
		name: "Hymns & Hops Online Songbook",
		description:
			"This is an open-source project I started to serve as a virtual hymnal for Hymns & Hops, an event in Greenville, SC where people gather to enjoy beer and song. This application is not endorsed by Hymns & Hops or its organizers.",
		img: "/img/hymns-and-hops-songbook.png",
		github: "https://github.com/nicelion/hymns",
		url: "https://hymns-seven.vercel.app/",
		tags: ["code"]
	},
	{
		name: "TPBot Scratch Extension",
		description:
			"As a part of my work with the IDEA Lab, I helped develop an extension that allows Scratch to interface with TPBot robots.",
		img: "/img/cml-scratch.jpg",
		github: "https://github.com/IDEA-Lab-Clemson-University/cml-scratch",
		url: "https://idea-lab-clemson-university.github.io/cml-scratch",
		tags: ["code"]
	},
	{
		name: "teachable-svelte",
		description:
			"In this application, you are able to create image classifications and train a model using webcam or uploaded image data. Once the model has been created and trained, the model is serialized and becomes available for download. These can then be utilized else where.",
		img: "/img/teachable-svelte.jpg",
		github: "https://github.com/nicelion/teachable-svelte",
		url: "https://teachable-svelte.vercel.app/",
		tags: ["code"]
	},
	{
		name: "This Website",
		description:
			"This website you are viewing is a project of mine! If you want to use this as a template for your own site, feel free to check out the GitHub",
		img: "/img/cover.jpg",
		github: "https://github.com/nicelion/ianthompson",
		url: "https://www.iancthompson.dev",
		tags: ["code"]
	},
	{
		name: "M5 TCP IRBlaster",
		description:
			"M5 TCP IRBlaster is a project I worked on while an intern at Fellowship Greenville. This project utilized an M5StickC to decode and send IR signals to power on/off devices. The M5Stick sets up a TCP server which was communicated to via BitFoucs' Companion and via Cronicle to automate Sunday mornings.",
		img: "https://obniz.com/doc/reference/m5stickc/images/m5stickc.jpg",
		github: "https://github.com/nicelion/PCBTree",
		tags: ["code"]
	},
	{
		name: "PCBTree",
		description:
			"PCBTree is a project I created while in high school. For this project, I designed and printed PCBs in the shape of a Christmas tree. I then programmed an ATTiny85 to measure a potentiometer which was used to determine the flashing speed of the LEDs.",
		img: "/img/pcbtree.JPG",
		github: "https://github.com/nicelion/PCBTree",
		tags: ["code"]
	},
	{
		name: "a long medley in the same direction by Saint Cecilia & the Melody Makers",
		description:
			"This is an album I \"contributed\" to while an intern at Fellowship Greenville. Don't get your hopes up, but feel free to listen to some redneck hymns.",
		img: "https://f4.bcbits.com/img/a1458780141_16.jpg",
		url: "https://saintceciliaandthemelodymakers.bandcamp.com/album/a-long-medley-in-the-same-direction",
		tags: ["music"]
	}
];

export default Projects;
