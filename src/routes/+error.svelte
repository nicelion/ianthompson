<!--
 +error.svelte
 ianthompson
 
 Created by Ian Thompson on December 12th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script >
    import { page } from '$app/stores';

</script>

<svelte:head>
  <title>Error: {$page.status}: {$page.error.message}</title>
</svelte:head>

<div class="h-full py-24 px-16 flex flex-col items-center space-x-4 space-y-9">
  <!-- <img src="https://thumbs.gfycat.com/HatefulSeveralIbis-max-1mb.gif" alt="" class="rounded"> -->
  <h1 class="text-3xl font-mono">This doesn't look good :(</h1>
  <div class="mockup-code w-full">
      <pre class=""><code>Attempting to access {$page.url.pathname}</code></pre>
      <!-- <pre class="text-warning"><code></code></pre> -->
      <pre class="text-warning"><code>Error!... retrying!</code></pre>
      <pre class="text-warning"><code>Error!... retrying!</code></pre>
      <pre class="text-warning"><code>Error!... retrying!</code></pre>
      <pre class="text-warning"><code>Error!... retrying!</code></pre>
      <pre class="text-warning"><code>Error!... retrying!</code></pre>
      <!-- <pre class="text-warning"><code></code></pre> -->

      <pre class="text-error"><code>Error: {$page.status}: {$page.error.message}</code></pre>
  </div>

  <div class="group p-2 px-4 text-md flex w-full items-center space-x-2 justify-center  hover:underline">
    <a href="https://github.com/nicelion/ianthompson" target="_blank" rel="noreferrer">Think this error could be fixed? Create a pull request!!</a>
    <i class="fa-solid fa-code-pull-request text-base group-hover:animate-wiggle"></i>
  </div>
  
  <div class="">
      <a href="/" class="bg-theme-primary text-xl text-white px-4 py-3 rounded-md hover:bg-blue-500 transition ease-in duration-100">Go Home</a>
  </div>


</div>