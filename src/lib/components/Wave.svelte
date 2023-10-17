<!--
 Wave.svelte
 ianthompson
 
 Created by Ian Thompson on December 14th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	export let inverted: boolean = true;
</script>

{#if inverted}
	<div id="hero-wave" class="h-40 overflow-hidden bg-eerie-black fill-current text-black-lighter">
		<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%; "
			><path
				d="M0.00,49.98 C194.13,157.39 342.55,8.39 500.56,92.27 L500.00,150.00 L0.00,150.00 Z"
				style="stroke: none;" /></svg>
	</div>
{:else}
	<div id="hero-wave" class="h-40 overflow-hidden bg-black-lighter fill-current text-eerie-black">
		<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%; "
			><path
				d="M0.00,49.98 C194.13,157.39 342.55,8.39 500.56,92.27 L500.00,150.00 L0.00,150.00 Z"
				style="stroke: none;" /></svg>
	</div>
{/if}
