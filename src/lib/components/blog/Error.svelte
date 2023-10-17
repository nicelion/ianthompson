<!--
 Error.svelte
 iancthompson
 
 Created by Ian Thompson on July 28th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<svelte:head>
	<title>Uh oh! That's an error! - iancthompson.dev</title>
</svelte:head>

<div class="mx-auto flex h-full w-2/3 flex-col items-center justify-center space-y-6 text-center">
	<h2 class="text-3xl">Uh oh!</h2>
	<p>
		There were issues retrieving this post, but it didn't result in a 404. Are you sure you should
		be looking here? It is possible that this post has been deleted, or hasn't been published yet.
	</p>
	<div
		class="text-md group flex w-full items-center justify-center space-x-2 p-2 px-4 hover:underline">
		<a href="https://github.com/nicelion/ianthompson/issues" target="_blank" rel="noreferrer"
			>Think this error could be fixed? Create an issue on GitHub!!</a>
		<i class="fa-solid fa-code-pull-request text-base group-hover:animate-wiggle" />
	</div>
	<a href="/posts" class="underline">Let's go back to posts</a>
</div>
