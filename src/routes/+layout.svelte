<!--
 +layout.svelte
 ianthompson
 
 Created by Ian Thompson on December 12th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	import { page } from '$app/stores';
	import Analytics from '$lib/components/Analytics.svelte';

	import MadeWith from '$lib/components/footer/made-with.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import FavIco from '$lib/components/layout/FavIco.svelte';

	var pageYOffset = 0;

	var showImage = true;
	var showMessage = true;

	// console.log($page.url);

	const pageScroll = () => {
		// Get the header
		var header = document.getElementById('header');
		var content = document.getElementById('content');
		var heroWave = document.getElementById('hero-wave');
		var cta = document.getElementById('cta');
		var footer = document.getElementById('footer');

		// Get the offset position of the navbar
		var sticky = header.offsetTop;

		var logo = document.getElementById('logo');
		var message = document.getElementById('message');
		var logoImg = document.getElementById('logo-img');
		var mainImg = document.getElementById('main-img');

		if ($page.url.pathname == '/') {
			if (pageYOffset > content.offsetTop) {
				header.classList.add('bg-black-lighter');
				// header.classList.remove('border-transparent');
				header.classList.add('border-theme-primary');
				cta?.classList.remove('hidden');
			} else {
				header.classList.remove('bg-black-lighter');
				// header.classList.add('border-transparent');
				header.classList.remove('border-theme-primary');
				cta?.classList.add('hidden');
			}

			// Remove the CallToAction if it intersects the footer
			if (cta?.getBoundingClientRect().bottom > footer?.getBoundingClientRect().top) {
				cta?.classList.add('hidden');
			}

			if (message.getBoundingClientRect().bottom < header.getBoundingClientRect().bottom) {
				showMessage = true;
				// logo.classList.add('opacity-100');
				// logo.classList.remove('opacity-0');
			} else {
				showMessage = false;
				// logo.classList.remove('opacity-100');
				header.classList.remove('border-theme-primary');
				// logo.classList.add('opacity-0');
			}

			if (mainImg.getBoundingClientRect().bottom < header.getBoundingClientRect().bottom) {
				showImage = true;
				// logoImg.classList.add('opacity-100');
				// logoImg.classList.remove('opacity-0');
			} else {
				showImage = false;
				// logoImg.classList.remove('opacity-100');
				// logoImg.classList.add('opacity-0');
			}
		}
	};

	onMount(() => {
		// Get the header
		var header = document.getElementById('header');
		var content = document.getElementById('content');
		var heroWave = document.getElementById('hero-wave');
		// Get the offset position of the navbar
		var sticky = header.offsetTop;

		var logo = document.getElementById('logo');
		var message = document.getElementById('message');
		var logoImg = document.getElementById('logo-img');
		var mainImg = document.getElementById('main-img');

		if ($page.url.pathname != '/') {
			header?.classList.add('border-theme-primary');
			logo?.classList.remove('opacity-0');
			logoImg?.classList.remove('opacity-0');
		}
	});
</script>

<svelte:head>
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4487298036056646"
		crossorigin="anonymous"></script>
	<FavIco />
</svelte:head>

<svelte:window on:scroll={pageScroll} bind:scrollY={pageYOffset} />

<Analytics />

<nav
	class="navbar sticky top-0 z-50 w-full border-b border-transparent bg-eerie-black transition-opacity duration-200 ease-in-out"
	id="header">
	<div class="flex-1">
		<a
			rel="canonical"
			href="https://www.iancthompson.dev/"
			class="flex h-full w-full items-center space-x-2 md:space-x-5">
			{#if showImage}
				<div
					class="ml-2 h-7 sm:h-14"
					in:fly={{ x: -200, duration: 500 }}
					out:fly={{ x: -200, duration: 500 }}>
					<img
						id="logo-img"
						src="/img/ian-thompson.jpg"
						alt=""
						class="hidden h-full rounded-full rounded-br-sm border-4 border-theme-primary transition-all delay-75 ease-in-out sm:block" />
				</div>
			{/if}

			{#if showMessage}
				<p
					id="logo"
					class="sm:text-md mb-2 w-fit rounded-xl rounded-bl-none bg-theme-primary p-1 px-4 font-mono text-sm font-extrabold text-white transition-all delay-75 ease-in-out"
					in:fly={{ x: -200, duration: 500 }}
					out:fly={{ x: -200, duration: 500 }}>
					Hi, I'm Ian.
				</p>
				<p />
			{/if}
		</a>
	</div>
	<div class="z-40 flex-none">
		<ul class="menu menu-horizontal mr-9 p-0 text-cornsilk">
			<li class="" />
			<li tabindex="0" class="sm:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-14 w-14 text-white"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16" />
				</svg>

				<ul class="right-0 border-2 border-theme-primary bg-black-lighter p-2">
					<li><a href="/#about">About</a></li>
					<li><a href="/#resume">Resume</a></li>
					<li><a href="/#projects">Projects</a></li>
					<li><a href="/posts">Posts</a></li>
					<li><a href="/lets-chat">Contact</a></li>
				</ul>
			</li>
			<ul class="hidden sm:flex">
				<li><a href="/#about">About</a></li>
				<li><a href="/#resume">Resume</a></li>
				<li><a href="/#projects">Projects</a></li>
				<li><a href="/posts">Posts</a></li>
				<li><a href="/lets-chat">Contact</a></li>
			</ul>
		</ul>
	</div>
</nav>

<div class="relative w-full bg-eerie-black font-body" id="content">
	<slot />
</div>

<div id="hero-wave" class="h-40 overflow-hidden bg-eerie-black fill-current text-black-lighter">
	<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%; "
		><path
			d="M0.00,49.98 C194.13,157.39 342.55,8.39 500.56,92.27 L500.00,150.00 L0.00,150.00 Z"
			style="stroke: none;" /></svg>
</div>

<footer id="footer" class="flex flex-col bg-black-lighter p-5 text-cornsilk">
	<div id="footer-contnet" class="flex flex-col space-y-6 md:space-x-6 md:space-y-0 lg:flex-row">
		<div id="footer-left" class="md:w-full md:p-7">
			<div id="logo-footer" class="flex flex-col justify-start">
				<div class="logo flex items-center space-x-6">
					<div class="flex flex-col">
						<div class="hidden h-12 md:block md:h-24">
							<img
								id="main-img"
								src="/img/ian-thompson.jpg"
								alt="Ian Thompson smiling"
								class="w-24 rounded-full rounded-br-sm border-4 border-theme-primary transition-all duration-500 ease-in-out lg:border-8" />
						</div>
					</div>
					<div>
						<h2 class="text-2xl font-bold">Ian Thompson</h2>
						<div class="mt-3 space-y-2">
							<div class="group flex items-center space-x-4 text-lg">
								<i class="fas fa-envelope group-hover:animate-wiggle" />

								<div class="flex flex-col">
									<a href="mailto:icthomp@g.clemson.edu" class="hover:underline"
										>icthomp@g.clemson.edu</a>
									<!-- <span class="border border-cornsilk" /> -->
									<a href="mailto:ianthompson@nicelion.com" class="hover:underline"
										>ianthompson@nicelion.com</a>
								</div>
							</div>
							<!-- <div class="text-lg space-x-4 group">
								<i class="fas fa-phone group-hover:animate-wiggle" />
								<a href="mailto:ianthompson@nicelion.com">### ### ####</a>
							</div> -->
							<div class="group space-x-4 text-lg">
								<i class="fa-solid fa-location-dot group-hover:animate-wiggle" />
								<span>Clemson, South Carolina</span>
							</div>
						</div>
						<div id="footer-social" class="mt-8 space-x-4 text-xl">
							<a
								href="https://www.github.com/nicelion"
								target="_blank"
								rel="noreferrer"
								aria-label="github account"
								><i class="fa-brands fa-github hover:animate-wiggle" /></a>

							<a
								href="https://www.instagram.com/thompson_ian"
								target="_blank"
								rel="noreferrer"
								aria-label="instagram account"
								><i class="fa-brands fa-instagram hover:animate-wiggle" /></a>
							<a
								href="https://www.linkedin.com/in/ian-thompson-b92467221"
								target="_blank"
								rel="noreferrer"
								aria-label="linkedin-account"
								><i class="fa-brands fa-linkedin hover:animate-wiggle" /></a>
							<a
								href="https://www.twitter.com/thompson__ian"
								target="_blank"
								rel="noreferrer"
								aria-label="twitter account"
								><i class="fa-brands fa-twitter hover:animate-wiggle" /></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="footer-right" class="flex justify-end p-7 md:w-1/2">
			<ul class="mt-auto">
				<!-- <li><a href="/sitemap.xml">Sitemap</a></li> -->
			</ul>
		</div>
	</div>
	<div id="copyright" class="mt-6 space-y-2 text-center text-sm">
		<div class="text-center">
			<MadeWith />
			<p>
				Create a <a
					class="text-theme-primary hover:underline"
					href="https://github.com/nicelion/ianthompson/network/members"
					target="_blank"
					rel="noreferrer">fork</a>
				and make your own in accordance with the
				<a
					class="text-theme-primary hover:underline"
					href="https://github.com/nicelion/ianthompson/blob/main/LICENSE.md"
					target="_blank"
					rel="noreferrer">license</a
				>!
			</p>
			<div class="mt-2 flex justify-center space-x-2">
				<a href="/sitemap.xml" class="url">Sitemap</a>
				<span>•</span>
				<a href="https://www.github.com/nicelion/ianthompson" class="url after:content-['_↗']"
					>Repository</a>
				<span>•</span>
				<a href="/lets-chat" class="url">Contact</a>
			</div>
		</div>
	</div>
</footer>
<div
	class="group flex w-full items-center justify-center space-x-2 p-2 px-4 text-sm hover:underline sm:justify-end">
	<a href="https://github.com/nicelion/ianthompson/issues" target="_blank" rel="noreferrer"
		>Something wrong? Create an issue on GitHub!!</a>
	<i class="fa-solid fa-code-pull-request text-base group-hover:animate-wiggle" />
</div>
