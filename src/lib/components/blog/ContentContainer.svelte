<!--
 ContentContainer.svelte
 iancthompson
 
 Created by Ian Thompson on December 21st 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<div class="text-cornsilk">
    <slot />
</div>

<style>
div :global(h1) { 
    @apply text-3xl;
}

div:global(blockquote) {
    @apply text-blue-300;
}
</style>