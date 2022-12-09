<!--
 Card.svelte
 iancthompson.dev
 
 Created by Ian Thompson on August 12th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->


<script>
	export let img = '';
	export let title = '';
	export let description = '';
</script>

<div target="_blank" class="card  bg-base-100 shadow-xl font-mono max-w-md">
	<div class="overflow-hidden h-3/5">
		<img src={img} alt={title} class="object-cover hover:scale-125 ease-in duration-1000 h-full w-full"/>	

	</div>
	<div class="card-body h-2/3">
		<h2 class="card-title mb-3">
			{title}
		</h2>
		<p>{description}</p>

		<div class="mt-5 flex flex-col space-y-5">
			<slot />
		</div>
	</div>
</div>
