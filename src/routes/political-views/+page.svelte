<!--
 +page.svelte
 ianthompson
 
 Created by Ian Thompson on December 15th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>My Political Views</title>
</svelte:head>

<div class="h-full w-full bg-eerie-black px-20 py-10">
	<div
		class="flex flex-col items-center justify-center rounded-md bg-black-lighter p-14 text-cornsilk">
		<div class="flex flex-col items-center justify-center">
			<img
				in:fade={{ duration: 3000 }}
				class="h-96 rounded-md"
				src="https://media.tenor.com/Qy4dAOV73dcAAAAM/skeleto-skeleton.gif"
				alt="" />
			<h1 in:fade={{ duration: 3000, delay: 1000 }} class="mt-9 text-3xl">Haha</h1>
		</div>
		<div
			in:fade={{ duration: 3000, delay: 2000 }}
			class="flex w-full flex-col justify-start space-y-4 px-12 py-8">
			<!-- <h2 class="text-2xl font-bold">I am a Christian anarchist.</h2> -->
			<!-- <p class="">
                This might be a new phrase to some people, and I can understand how the term "anarchist" carries quite a bit of weight to it. Instead of going into a thesis-level justification for my beliefs, I will make a few points.
            </p>
            <p>
                I believe our government is broken. 
            </p> -->
			<!-- <ul class="list-disc px-5">
                <li>Our trust should be in Christ our King, not the government. <span class="underline">No King but Christ.</span></li>
                <li>As Christians, it is our duty to serve others, not depend on the government to do it.</li>
            </ul> -->
		</div>
	</div>
</div>
