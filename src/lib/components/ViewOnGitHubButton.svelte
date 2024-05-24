<!--
 ViewOnGitHubButton.svelte
 iancthompson.dev
 
 Created by Ian Thompson on December 3rd 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
	export let url = '';
</script>

<!-- <a
	href={url}
	class="group flex items-center rounded-lg border px-4 py-2 text-center align-middle text-white transition duration-200 ease-in-out hover:bg-white hover:text-black"
	target="_blank"
	rel="noreferrer">
	<i class="fa-brands fa-github text-3xl group-hover:animate-wiggle" />
	<p class="text-lg">View on GitHub</p>
</a> -->

<div class="flex items-center justify-center">
	<a
		href={url}
		class="group flex max-w-xl items-center justify-center space-x-6 rounded-lg border bg-white px-4 text-center align-middle text-black transition duration-200 ease-in-out"
		target="_blank"
		rel="noreferrer">
		<i class="fa-brands fa-github text-3xl group-hover:animate-wiggle" />
		<p class="text-lg">View on GitHub</p>
	</a>
</div>