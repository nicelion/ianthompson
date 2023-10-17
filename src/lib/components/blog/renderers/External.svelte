<!--
 External.svelte
 iancthompson
 
 Created by Ian Thompson on July 12th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	export let href: string;
</script>

<a {href} class="url" target="_blank" rel="noreferrer"><slot /></a>
