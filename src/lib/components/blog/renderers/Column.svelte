<!--
 Column.svelte
 iancthompson
 
 Created by Ian Thompson on October 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<div class="flex-none md:flex md:space-x-5">
    <div class="md:w-1/2">
        <slot name="left"/>
    </div>
    <div class="md:w-1/2">
        <slot name="right"/>
    </div>
</div>