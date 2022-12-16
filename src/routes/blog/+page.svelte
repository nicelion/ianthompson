<!--
 +page.svelte
 ianthompson
 
 Created by Ian Thompson on December 16th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>
	import PostRow from "$lib/components/blog/PostRow.svelte";

    const posts = [{
        title: "raspi-metar: A METAR visualization tool for Raspberry Pi",
        author: "Ian Thompson",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt nulla placeat doloremque labore saepe praesentium dolores minus quos itaque quisquam! Molestiae nihil aspernatur ullam quibusdam sapiente enim placeat atque iste in. Suscipit inventore dolores error dicta magni at quo qui laboriosam reiciendis alias illum est, consequuntur maxime ducimus mollitia accusantium?",
        img: "/img/raspi-metar.jpeg"
    },
    {
        title: "CML Scratch: A Scratch Environment to Teach Ethical AI",
        author: "Ian Thompson",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt nulla placeat doloremque labore saepe praesentium dolores minus quos itaque quisquam! Molestiae nihil aspernatur ullam quibusdam sapiente enim placeat atque iste in. Suscipit inventore dolores error dicta magni at quo qui laboriosam reiciendis alias illum est, consequuntur maxime ducimus mollitia accusantium?",
        img: "/img/cml-scratch.jpg"
    },{
        title: "PCBTree: A Christmas Tree Shaped Circuit Board",
        author: "Ian Thompson",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt nulla placeat doloremque labore saepe praesentium dolores minus quos itaque quisquam! Molestiae nihil aspernatur ullam quibusdam sapiente enim placeat atque iste in. Suscipit inventore dolores error dicta magni at quo qui laboriosam reiciendis alias illum est, consequuntur maxime ducimus mollitia accusantium?",
        img: "/img/pcbtree.JPG"
    }, 
    {
        title: "M5 TCP IRBlaster",
        author: "Ian Thompson",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt nulla placeat doloremque labore saepe praesentium dolores minus quos itaque quisquam! Molestiae nihil aspernatur ullam quibusdam sapiente enim placeat atque iste in. Suscipit inventore dolores error dicta magni at quo qui laboriosam reiciendis alias illum est, consequuntur maxime ducimus mollitia accusantium?",
        img: "https://obniz.com/doc/reference/m5stickc/images/m5stickc.jpg"
    }
    ]
</script>

<div class="space-y-4">
    {#each posts as post}
        <PostRow data={post} />
    {/each}
</div>