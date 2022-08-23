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
	export let url = '';
</script>

<a href={url} target="_blank" class="card md:w-72 xl:w-96 bg-base-100 shadow-xl font-mono">
	<figure><img src={img} alt={title} /></figure>
	<div class="card-body">
		<h2 class="card-title">
			{title}
		</h2>
		<p>{description}</p>
	</div>
</a>
