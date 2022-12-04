<!--
 AboutTerminal.svelte
 iancthompson.dev
 
 Created by Ian Thompson on December 3rd 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script>

    // Handles my age for me, so I don't have to!!
    let age

    let dob = new Date("11/29/2000");
    let monthDiff = Date.now() - dob.getTime();

    let ageDT = new Date(monthDiff);

    let year = ageDT.getUTCFullYear();

    age = Math.abs(year - 1970)

</script>

<div class="mockup-code lg:w-1/4 h-fit self-center mb-12 lg:mb-0">
    <pre class="text-success"><code>Ian Thompson: {'{'}</code></pre>
    <pre class="text-success"><code>&Tab; Age: {age}</code></pre>
    <pre class="text-success"><code>&Tab; Major: Elementary Education</code></pre>
    <pre class="text-success"><code>&Tab; Location: Clemson, SC</code></pre>
    <pre class="text-success"><code>&Tab; Graduation: 2024</code></pre>
    <pre class="text-success"><code>{'}'}</code></pre>
</div>