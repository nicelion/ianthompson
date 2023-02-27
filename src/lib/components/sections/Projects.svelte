<!--
 Projects.svelte
 ianthompson
 
 Created by Ian Thompson on December 14th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
	import ViewOnGitHubButton from "$lib/components/ViewOnGitHubButton.svelte";
	import Card from "$lib/components/Card.svelte";
	

	import { Confetti } from "svelte-confetti"

	const duration = 2000

	let things = []
	let timeout

	async function moveConfetti(event) {


		const { target, clientX, clientY } = event

		const elementY = target.getBoundingClientRect().top
		const elementX = target.getBoundingClientRect().left

		const x = clientX - elementX
		const y = clientY - elementY

		things = [...things, { x, y }]

		clearTimeout(timeout)

		timeout = setTimeout(() => things = [], duration)
	}

</script>

<section id="projects" class="flex flex-col justify-center w-full items-center py-12">
	<div class="text-cornsilk mb-12">
		<h1 class="font-bold text-2xl md:text-4xl">Projects I've Worked On</h1>
	</div>
	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 xl:p-23">

		<Card img="/img/raspi-metar.jpeg" title="raspi-metar" description="In short, raspi-metar is a Raspberry Pi project that takes METAR data from various airports and displays it on a VFR sectional map using NEOPIXEL LEDs."  badge="code">
			<ViewOnGitHubButton url="https://github.com/nicelion/raspi-metar" />
		</Card>
		<Card img="/img/cml-scratch.jpg" title="TPBot Scratch Extension" description="As a part of my work with the IDEA Lab, I helped develop an extension that allows Scratch to interface with TPBot robots."  badge="code">
			<a target="_blank" rel="noreferrer" href="https://idea-lab-clemson-university.github.io/cml-scratch" class="px-4 py-2 rounded-lg text-center flex items-center align-middle border text-white hover:bg-white hover:text-black transition duration-200 ease-in-out">
				<p class="text-lg">View Project</p>
			</a>
			<ViewOnGitHubButton url="https://github.com/IDEA-Lab-Clemson-University/cml-scratch" />
		</Card>
		<Card img="/img/cover.jpg" title="This Website" description="This website you are viewing is a project of mine! If you want to use this as a template for your own site, feel free to check out the GitHub" badge="code">
			<button on:click={moveConfetti} class="px-4 py-2 rounded-lg text-center flex items-center align-middle border text-white hover:bg-white hover:text-black transition duration-200 ease-in-out">
				<p class="text-lg">View Project</p>
			</button>
			{#each things as thing}
				<div class="mover" style="left: {thing.x}px; top: {thing.y}px">
					<Confetti y={[-0.5, 0.5]} fallDistance=20px amount=100 {duration} />
				</div>
		  	{/each}
			<ViewOnGitHubButton url="https://github.com/nicelion/ianthompson" />

		</Card>
		<Card img="/img/hymns-and-hops-songbook.png" title="Hymns & Hops Online Songbook" description="This is an open-source project I started to serve as a virtual hymnal for Hymns & Hops, an event in Greenville, SC where people gather to enjoy beer and song. This application is not endorsed by Hymns & Hops or its organizers." badge="code">
			<a target="_blank" rel="noreferrer" href="https://hymns-seven.vercel.app" class="px-4 py-2 rounded-lg text-center flex items-center align-middle border text-white hover:bg-white hover:text-black transition duration-200 ease-in-out">
				<p class="text-lg">View Project</p>
			</a>
			<ViewOnGitHubButton url="https://github.com/nicelion/hymns" />
		</Card>
		<Card img="https://obniz.com/doc/reference/m5stickc/images/m5stickc.jpg" title="M5 TCP IRBlaster" description="M5 TCP IRBlaster is a project I worked on while an intern at Fellowship Greenville. This project utilized an M5StickC to decode and send IR signals to power on/off devices. The M5Stick sets up a TCP server which was communicated to via BitFoucs' Companion and via Cronicle to automate Sunday mornings." badge="code"> 
			<ViewOnGitHubButton url="https://github.com/nicelion/M5IRBlaster" />
		</Card>
		<Card img="/img/pcbtree.JPG" title="PCBTree" description="PCBTree is a project I created while in high school. For this project, I designed and printed PCBs in the shape of a Christmas tree. I then programmed an ATTiny85 to measure a potentiometer which was used to determine the flashing speed of the LEDs." badge="code">
			<ViewOnGitHubButton url="https://github.com/nicelion/PCBTree" />
		</Card>
		<Card img="https://f4.bcbits.com/img/a1458780141_16.jpg" title="a long medley in the same direction by Saint Cecilia & the Melody Makers" description="During my internship with Fellowship Greenville, this album was recorded and published under the artist 'Saint Cecilia & the Melody Makers'. In reality, my contributions to this project were minimal, however, present nonetheless." badge="music">
			<!-- <ViewOnGitHubButton url="https://github.com/nicelion/PCBTree" /> -->			
			<a target="_blank" rel="noreferrer" href="https://saintceciliaandthemelodymakers.bandcamp.com/album/a-long-medley-in-the-same-direction" class="px-4 py-2 rounded-lg text-center flex items-center align-middle border text-white hover:bg-white hover:text-black transition duration-200 ease-in-out">
				<p class="text-lg">View Project</p>
			</a>
		</Card>

</section>

<style>
	.box {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		height: 10rem;
		width: 100%;
		border: 1px solid lightgray;
		border-radius: 0.5rem;
		background: white;
		user-select: none;
	}
  
	.mover {
	 	 position: absolute;
	}
  
	span {
	  	pointer-events: none;
	}
  </style>
  