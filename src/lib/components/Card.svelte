<!--
 Card.svelte
 iancthompson.dev
 
 Created by Ian Thompson on August 12th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->


<script>
	import Badge from "./Badge.svelte";

	export let img = '';
	export let title = '';
	export let description = '';
	export let badge = '';
</script>

<div target="_blank" class="card  bg-base-100  font-mono max-w-md">
	<div class="overflow-hidden h-3/5 rounded-t-md">
		<img src={img} alt={title} class="object-cover hover:scale-125 ease-in duration-1000 h-full w-full rounded-t-md"/>	
	</div>
	<div class="card-body h-full">
		<h2 class="card-title">
			{title}
		</h2>
		<div class="mb-2 italic">
			<Badge title={badge}/>
		</div>
		<p>{description}</p>

		<div class="mt-5 flex flex-col space-y-5">
			<slot />
		</div>
	</div>
</div>
