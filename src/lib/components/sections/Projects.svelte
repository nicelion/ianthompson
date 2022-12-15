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
			<a href="/" class="px-4 py-2 rounded-lg text-center flex items-center align-middle border text-white hover:bg-white hover:text-black transition duration-200 ease-in-out">
				<p class="text-lg">View Project</p>
			</a>
			<ViewOnGitHubButton url="https://github.com/nicelion/ianthompson" />

		</Card>
		<Card img="https://obniz.com/doc/reference/m5stickc/images/m5stickc.jpg" title="M5 TCP IRBlaster" description="M5 TCP IRBlaster is a project I worked on while an intern at Fellowship Greenville. This project utilized an M5StickC to decode and send IR signals to power on/off devices. The M5Stick sets up a TCP server which was communicated to via BitFoucs' Companion and via Cronicle to automate Sunday mornings."> 
			<ViewOnGitHubButton url="https://github.com/nicelion/M5IRBlaster" />
		</Card>
		<Card img="/img/pcbtree.JPG" title="PCBTree" description="PCBTree is a project I created while in high school. For this project, I designed and printed PCBs in the shape of a Christmas tree. I then programmed an ATTiny85 to measure a potentiometer which was used to determine the flashing speed of the LEDs." badge="code">
			<ViewOnGitHubButton url="https://github.com/nicelion/PCBTree" />
		</Card>

</section>