<!--
 ParagraphRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
	export let text = undefined;
</script>

<!-- <p class="leading-relaxed">{text}</p> -->
<p class="leading-relaxed"><slot /></p>
