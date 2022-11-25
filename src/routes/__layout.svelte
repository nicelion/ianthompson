<!--
 __layout.svelte
 iancthompson.dev
 
 Created by Ian Thompson on February 11th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->


<script>
	import MadeWith from '../components/footer/made-with.svelte';
	import '../app.css';

	var pageYOffset = 0

	const pageScroll = () => {
		
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

		if (pageYOffset > content.offsetTop) {
			header.classList.add('bg-black-lighter');
			header.classList.remove('border-transparent');
		} else {
			header.classList.remove('bg-black-lighter');
			header.classList.add('border-transparent');
		}

		if (message.getBoundingClientRect().bottom < header.getBoundingClientRect().bottom) {
			logo.classList.add('opacity-100');
			logo.classList.remove('opacity-0');
		} else {
			logo.classList.remove('opacity-100');
			logo.classList.add('opacity-0');
		}

		if (mainImg.getBoundingClientRect().bottom < header.getBoundingClientRect().bottom) {
			logoImg.classList.add('opacity-100');
			logoImg.classList.remove('opacity-0');
		} else {
			logoImg.classList.remove('opacity-100');
			logoImg.classList.add('opacity-0');
		}
	}
</script>

<svelte:window on:scroll={pageScroll} bind:scrollY={pageYOffset} />

<nav
	class="navbar bg-eerie-black z-50 sticky top-0 w-full border-blue-400 border-transparent border-b"
	id="header"
>
	<div class="flex-1">
		<a href="/" class="h-full w-full flex items-center space-x-2 md:space-x-5">
			<div class="ml-2 h-7 sm:h-14">
				<img
					id="logo-img"
					src="/img/ian-thompson.jpg"
					alt=""
					class="hidden sm:block h-full rounded-full rounded-br-sm border-blue-400 border-4 transition-all ease-in-out delay-75 opacity-0"
				/>
			</div>
			<h1
				id="logo"
				class="opacity-0 text-sm sm:text-md text-white bg-blue-400 p-1 px-4 rounded-xl rounded-bl-none w-fit mb-2 font-extrabold font-mono transition-all ease-in-out delay-75"
			>
				Hi, I'm Ian!
			</h1>
		</a>
	</div>
	<div class="flex-none z-40">
		<ul class="menu menu-horizontal p-0 mr-9 text-cornsilk">
			<li class="" />
			<li tabindex="0" class="sm:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-14 w-14 text-white "
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>

				<ul class="p-2 right-0 bg-black-lighter border-2 border-blue-400">
					<li><a href="#about">About</a></li>
					<li><a href="#resume">Resume</a></li>
					<li><a href="#projects">Projects</a></li>
				</ul>
			</li>
			<ul class="hidden sm:flex">
				<li><a href="#about">About</a></li>
				<li><a href="#resume">Resume</a></li>
				<li><a href="#projects">Projects</a></li>
			</ul>
		</ul>
	</div>
</nav>

<div class="font-content relative bg-eerie-black w-full" id="content">
	<slot />
</div>

<footer class="bg-black-lighter p-5 flex flex-col text-cornsilk">
	<div id="footer-contnet" class="flex flex-col lg:flex-row space-y-6 md:space-y-0 md:space-x-6">
		<div id="footer-left" class="md:w-full md:p-7">
			<div id="logo-footer" class="flex flex-col justify-start">
				<div class="logo flex space-x-6 items-center">
					<div class="flex flex-col">
						<div class="h-12 md:h-24 hidden md:block ">
							<img
								id="main-img"
								src="/img/ian-thompson.jpg"
								alt="Ian Thompson smiling"
								class="w-24 rounded-full rounded-br-sm border-blue-400 border-4 lg:border-8  ease-in-out duration-500 transition-all "
							/>
						</div>
					</div>
					<div>
						<h2 class="text-2xl font-bold">Ian Thompson</h2>
						<div class="mt-3 space-y-2">
							<div class="text-lg space-x-4 group flex items-center">
					<i class="fas fa-envelope group-hover:animate-wiggle" />

					<div class="flex flex-col">
						<a href="mailto:icthomp@g.clemson.edu" class="hover:underline">icthomp@g.clemson.edu</a>
						<!-- <span class="border border-cornsilk" /> -->
						<a href="mailto:ianthompson@nicelion.com" class="hover:underline">ianthompson@nicelion.com</a>
					</div>
				</div>
							<!-- <div class="text-lg space-x-4 group">
								<i class="fas fa-phone group-hover:animate-wiggle" />
								<a href="mailto:ianthompson@nicelion.com">### ### ####</a>
							</div> -->
							<div class="text-lg space-x-4 group">
								<i class="fa-solid fa-location-dot group-hover:animate-wiggle" />
								<span>Clemson, South Carolina</span>
							</div>
						</div>
						<div id="footer-social" class="mt-8 space-x-4 text-xl">
							<a href="https://www.github.com/nicelion" target="_blank"
								><i class="fa-brands fa-github hover:animate-wiggle" /></a
							>

							<a href="https://www.instagram.com/thompson_ian" target="_blank"
								><i class="fa-brands fa-instagram hover:animate-wiggle" /></a
							>
							<a href="https://www.linkedin.com/in/ian-thompson-b92467221" target="_blank"
								><i class="fa-brands fa-linkedin hover:animate-wiggle" /></a
							>
							<a href="https://www.twitter.com/thompson__ian" target="_blank"
								><i class="fa-brands fa-twitter hover:animate-wiggle" /></a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="footer-right" class="md:w-1/2 p-7">
			<ul>
				<!-- <li><a href="#">Instagram</a></li> -->
			</ul>
		</div>
	</div>
	<div id="copyright" class="text-center mt-6 space-y-2 text-sm">
		<div class="text-center">
			<MadeWith />
			<p>
				Copyright &copy; 2022 <a
					class="hover:underline"
					href="https://www.nicelion.com"
					target="_blank">Nice Lion Technologies LLC</a
				>.
			</p>
		</div>
	</div>
</footer>
<div class="group p-2 px-4 text-sm flex w-full items-center space-x-2 justify-center sm:justify-end hover:underline">
	<a href="https://github.com/nicelion/ianthompson" target="_blank">See an issue? Create a pull request!!</a>
	<i class="fa-solid fa-code-pull-request text-base group-hover:animate-wiggle"></i>

</div>
