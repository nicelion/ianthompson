<!--
 +error.svelte
 ianthompson
 
 Created by Ian Thompson on December 12th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error: {$page.status}: {$page.error.message}</title>
</svelte:head>

<div class="flex h-full flex-col items-center space-x-4 space-y-9 px-16 py-24">
	<!-- <img src="https://thumbs.gfycat.com/HatefulSeveralIbis-max-1mb.gif" alt="" class="rounded"> -->
	<h1 class="font-mono text-3xl">This doesn't look good :(</h1>
	<div class="mockup-code w-full">
		<pre class=""><code>Attempting to access {$page.url.pathname}</code></pre>
		<!-- <pre class="text-warning"><code></code></pre> -->
		<pre class="text-warning"><code>Error!... retrying!</code></pre>
		<pre class="text-warning"><code>Error!... retrying!</code></pre>
		<pre class="text-warning"><code>Error!... retrying!</code></pre>
		<pre class="text-warning"><code>Error!... retrying!</code></pre>
		<pre class="text-warning"><code>Error!... retrying!</code></pre>
		<!-- <pre class="text-warning"><code></code></pre> -->

		<pre class="text-error"><code>Error: {$page.status}: {$page.error.message}</code></pre>
	</div>

	<div
		class="text-md group flex w-full items-center justify-center space-x-2 p-2 px-4 hover:underline">
		<a href="https://github.com/nicelion/ianthompson/issues" target="_blank" rel="noreferrer"
			>Think this error could be fixed? Create an issue on GitHub!!</a>
		<i class="fa-solid fa-code-pull-request text-base group-hover:animate-wiggle" />
	</div>

	<div class="">
		<a
			href="/"
			class="rounded-md bg-theme-primary px-4 py-3 text-xl text-white transition duration-100 ease-in hover:bg-blue-500"
			>Go Home</a>
	</div>
</div>
