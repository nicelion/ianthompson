<!--
 Collapse.svelte
 iancthompson.dev
 
 Created by Ian Thompson on August 13th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->
<script>
	export let title = '';
</script>

<div class="w-full collapse collapse-arrow " tabindex="0">
	<input type="checkbox" />
	<h1 class="collapse-title text-3xl border-b">{title}</h1>
	<div class="collapse-content flex items-center space-x-4">
		<!-- <i class="fa-solid fa-graduation-cap text-2xl" /> -->
		<div class="mt-4 w-full bg-black-lighter ">
			<slot />
		</div>
	</div>
</div>
