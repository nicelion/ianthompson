<!--
 ParagraphRenderer.svelte
 iancthompson
 
 Created by Ian Thompson on December 21st 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
    export let text = undefined
</script>
  
<!-- <p class="leading-relaxed">{text}</p> -->
<p class="leading-relaxed"><slot></slot></p>