<script lang="ts">
	import CallToAction from '$lib/components/CallToAction.svelte';

	import Collapse from '$lib/components/Collapse.svelte';
	import Card from '$lib/components/Card.svelte';
	import Interest from '$lib/components/Interest.svelte';
	import Education from '$lib/components/resume/Education.svelte';
	import Experience from '$lib/components/resume/Experience.svelte';
	import ViewOnGitHubButton from '$lib/components/ViewOnGitHubButton.svelte';
	import AboutTerminal from '$lib/components/AboutTerminal.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Wave from '$lib/components/Wave.svelte';
</script>

<svelte:head>
	<title>Ian Thompson | Elementary School Teacher. Tech Enthusiast.</title>
	<meta
		name="description"
		content="Ian Thompson is an elementary school teacher interested in education, computer science, and human-computer interaction that is skilled in web development using technologies such as Javascript, Typescript, Python, and Svelte." />
</svelte:head>

<CallToAction />

<Hero />

<Wave />

<About />

<Wave inverted={false} />

<Projects />
