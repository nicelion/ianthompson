<!--
 CodespanRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	// export let content: string;
</script>

<code class="bg-code-background rounded-md font-mono font-bold text-neutral-content">
	<!-- {content.replace(/`/g, '')} -->
	<slot />
</code>
