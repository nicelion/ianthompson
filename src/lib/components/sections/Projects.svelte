<!--
 Projects.svelte
 ianthompson
 
 Created by Ian Thompson on December 14th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">

	import ViewOnGitHubButton from "$lib/components/ViewOnGitHubButton.svelte";
	import Card from "$lib/components/Card.svelte";
	

	import { Confetti } from "svelte-confetti"
	import ProjectSorter from "$lib/components/ProjectSorter.svelte";
	import type { Project } from "$lib/types/Project";
	import Projects from "$lib/manifest/Projects";

	const duration = 2000

	let things = []
	let timeout

	let projects: [Project] = Projects

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

	const handleSelection = (event: CustomEvent<string>) => {
		console.log(event.detail);
		
		if (event.detail == "all") {
			projects = Projects
		} else {
			projects = Projects.filter(p => p.tags.includes(event.detail))
		}
	}

</script>

<section id="projects" class="flex flex-col justify-center w-full items-center py-12">
	<div class="text-cornsilk mb-6">
		<h1 class="font-bold text-2xl md:text-4xl">Projects I've Worked On</h1>
	</div>
	<ProjectSorter on:selection={handleSelection} />
	{#if projects.length > 0}
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 xl:p-23">
			{#each projects as project}
				<Card img={project.img} title={project.name} description={project.description} badge={project.tags[0]}>
					{#if project.url != undefined}
						<a target="_blank" rel="noreferrer" href={project.url} class="px-4 py-2 rounded-lg text-center flex items-center align-middle border text-white hover:bg-white hover:text-black transition duration-200 ease-in-out">
							<p class="text-lg">View Project</p>
						</a>
					{/if}
					{#if project.github != undefined}
						<ViewOnGitHubButton url={project.github} />
					{/if}
				</Card>
			{/each}
		</div>
	{:else}
		<div class="">
			<p class="text-xl italic">Nothing to see here!</p>
		</div>
	{/if}
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
  