<!--
 Card.svelte
 iancthompson.dev
 
 Created by Ian Thompson on August 12th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
	import { fade, fly } from 'svelte/transition';

	export let img = '';
	export let title = '';
	export let description = '';
	export let badge = '';
</script>

<div target="_blank" class="card max-w-md bg-base-100 font-mono" out:fade in:fade>
	<div class="h-3/5 overflow-hidden rounded-t-md">
		<img
			src={img}
			alt={title}
			class="h-full w-full rounded-t-md object-cover duration-1000 ease-in hover:scale-125" />
	</div>
	<div class="card-body h-full">
		<h2 class="card-title">
			{title}
		</h2>
		<div class="mb-2 italic">
			<div class="badge badge-primary py-3 text-white">#{badge}</div>
		</div>
		<p>{description}</p>

		<div class="mt-5 flex flex-col space-y-5">
			<slot />
		</div>
	</div>
</div>
