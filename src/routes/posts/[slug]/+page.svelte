<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on June 3rd 2024
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2024 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:component this={data.content} />
