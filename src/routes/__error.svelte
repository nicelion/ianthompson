<!--
 +error.svelte
 iancthompson.dev
 
 Created by Ian Thompson on November 24th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script >
      import { page } from '$app/stores';

    console.log($page);
</script>

<div class="h-full py-24 px-16 flex flex-col items-center space-x-4 space-y-9">
    <!-- <img src="https://thumbs.gfycat.com/HatefulSeveralIbis-max-1mb.gif" alt="" class="rounded"> -->
    <h1 class="text-3xl font-mono">This doesn't look good :(</h1>
    <div class="mockup-code w-full">
        <pre class=""><code>Attempting to access {$page.url.pathname}</code></pre>
        <pre class="text-warning"><code></code></pre>

        <pre class="text-warning"><code>Error!... retrying!</code></pre>
        <pre class="text-warning"><code>Error!... retrying!</code></pre>
        <pre class="text-warning"><code>Error!... retrying!</code></pre>
        <pre class="text-warning"><code>Error!... retrying!</code></pre>
        <pre class="text-warning"><code>Error!... retrying!</code></pre>
        <pre class="text-warning"><code></code></pre>

        <pre class="text-error"><code>Error: {$page.status}: {$page.error.message}</code></pre>
    </div>

    <div class="">
        <a href="/" class="bg-theme-primary text-xl text-white font-mono px-8 py-3 rounded-md hover:bg-blue-500 transition ease-in duration-100">Go Home</a>
    </div>

</div>