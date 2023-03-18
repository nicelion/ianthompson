<!--
 Analytics.svelte
 ianthompson
 
 Created by Ian Thompson on December 20th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">

  import { page } from '$app/stores'
	// import { env } from '$env/dynamic/private';
	import { PUBLIC_MEASUREMENT_ID, USE_ANALYTICS } from '$env/static/public';
	import { onMount } from 'svelte';

    $: {
        if (typeof gtag !== 'undefined' && USE_ANALYTICS) {
            gtag('config', PUBLIC_MEASUREMENT_ID, {
                page_title: document.title,
                page_path: $page.url.href
            })

            
        }
    }


</script>

<svelte:head>
  {#if USE_ANALYTICS}
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_MEASUREMENT_ID}`}></script>
    <script>
      window.dataLayer = window.dataLayer || []

      function gtag() {
        dataLayer.push(arguments)
      }

      gtag('js', new Date())
      gtag('config', PUBLIC_MEASUREMENT_ID)
    </script>
  {/if}
</svelte:head>


