<!--
 Projects.svelte
 ianthompson
 
 Created by Ian Thompson on December 14th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import ViewOnGitHubButton from '$lib/components/ViewOnGitHubButton.svelte';
	import Card from '$lib/components/Card.svelte';

	import ProjectSorter from '$lib/components/ProjectSorter.svelte';
	import type { Project } from '$lib/types/Project';
	import Projects from '$lib/manifest/Projects';

	const duration = 2000;

	let things = [];
	let timeout;

	let projects: [Project] = Projects;

	const handleSelection = (event: CustomEvent<string>) => {
		console.log(event.detail);

		if (event.detail == 'all') {
			projects = Projects;
		} else {
			projects = Projects.filter((p) => p.tags.includes(event.detail));
		}
	};
</script>

<section id="projects" class="flex w-full flex-col items-center justify-center py-12">
	<div class="mb-6 text-cornsilk">
		<h1 class="text-2xl font-bold md:text-4xl">Projects I've Worked On</h1>
	</div>
	<ProjectSorter on:selection={handleSelection} />
	{#if projects.length > 0}
		<div class="xl:p-23 grid gap-10 px-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<Card
					img={project.img}
					title={project.name}
					description={project.description}
					badge={project.tags[0]}>
					{#if project.github != undefined}
						<ViewOnGitHubButton url={project.github} />
					{/if}
					{#if project.url != undefined}
						<a
							target="_blank"
							rel="noreferrer"
							href={project.url}
							class="flex items-center rounded-lg border px-4 py-2 text-center align-middle text-white transition duration-200 ease-in-out hover:bg-white hover:text-black">
							<p class="text-lg">See more</p>
						</a>
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
