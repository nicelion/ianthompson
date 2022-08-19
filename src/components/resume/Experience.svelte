<!--
 Experience.svelte
 iancthompson.dev
 
 Created by Ian Thompson on August 13th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->
<script>
	export let fa = '';
	export let title = '';
	export let img = '';
</script>

<div class="flex items-center space-x-4">
	<i class={`${fa} text-2xl`} />
	<div class="w-full flex items-center justify-around">
		<div class="mt-4 w-full bg-black-lighter p-2 md:pr-24">
			<h4 class="text-lg">
				<span class="uppercase text-2xl">{title}</span>
			</h4>
			<slot />
		</div>
		<!-- <div class="w-1/3 h-36 flex justify-center">
			<img class="h-full" src={img} alt="" />
		</div> -->
	</div>
</div>
