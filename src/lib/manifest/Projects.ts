/**
 Projects.ts
 iancthompson
 
 Created by Ian Thompson on May 11th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { Project } from "$lib/types/Project";

const Projects: [Project] = [
    {
        name: "raspi-metar",
        description: "In short, raspi-metar is a Raspberry Pi project that takes METAR data from various airports and displays it on a VFR sectional map using NEOPIXEL LEDs.",
        img: "/img/raspi-metar.jpeg",
        url: "/posts/raspi-metar-a-metar-visualization-project-for-raspberry-pi",
        github: "https://github.com/nicelion/raspi-metar",
        tags: ["code"]
    }, 
    {
        name: "Hymns & Hops Online Songbook",
        description: "This is an open-source project I started to serve as a virtual hymnal for Hymns & Hops, an event in Greenville, SC where people gather to enjoy beer and song. This application is not endorsed by Hymns & Hops or its organizers.",
        img: "/img/hymns-and-hops-songbook.png",
        github: "https://github.com/nicelion/ianthompson",
        url: "/posts/hymns-and-hops-mobile-songbook",
        tags: ["code"]
    },
    {
        name: "TPBot Scratch Extension",
        description: "As a part of my work with the IDEA Lab, I helped develop an extension that allows Scratch to interface with TPBot robots.",
        img: "/img/cml-scratch.jpg",
        github: "https://github.com/IDEA-Lab-Clemson-University/cml-scratch",
        url: "https://idea-lab-clemson-university.github.io/cml-scratch",
        tags: ["code"]
    },
    {
        name: "This Website",
        description: "This website you are viewing is a project of mine! If you want to use this as a template for your own site, feel free to check out the GitHub",
        img: "/img/cover.jpg",
        github: "https://github.com/nicelion/hymns",
        url: "https://hymns-seven.vercel.app",
        tags: ["code"]
    }, 
    {
        name: "M5 TCP IRBlaster",
        description: "M5 TCP IRBlaster is a project I worked on while an intern at Fellowship Greenville. This project utilized an M5StickC to decode and send IR signals to power on/off devices. The M5Stick sets up a TCP server which was communicated to via BitFoucs' Companion and via Cronicle to automate Sunday mornings.",
        img: "https://obniz.com/doc/reference/m5stickc/images/m5stickc.jpg",
        github: "https://github.com/nicelion/PCBTree",
        tags: ["code"]
    },
    {
        name: "PCBTree",
        description: "PCBTree is a project I created while in high school. For this project, I designed and printed PCBs in the shape of a Christmas tree. I then programmed an ATTiny85 to measure a potentiometer which was used to determine the flashing speed of the LEDs.",
        img: "/img/pcbtree.JPG",
        github: "https://github.com/nicelion/PCBTree",
        tags: ["code"]
    },
    {
        name: "a long medley in the same direction by Saint Cecilia & the Melody Makers",
        description: "This is an open-source project I started to serve as a virtual hymnal for Hymns & Hops, an event in Greenville, SC where people gather to enjoy beer and song. This application is not endorsed by Hymns & Hops or its organizers.",
        img: "https://f4.bcbits.com/img/a1458780141_16.jpg",
        url: "https://saintceciliaandthemelodymakers.bandcamp.com/album/a-long-medley-in-the-same-direction",
        tags: ["music"]
    },


]

export default Projects