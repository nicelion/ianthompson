<!--
 BioSidebar.svelte
 iancthompson
 
 Created by Ian Thompson on October 26th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<div class="hidden flex-col items-center justify-center space-y-6 rounded px-2 lg:flex">
	<div class="">
		<img
			id="main-img"
			src="/img/ian-thompson.jpg"
			alt="Ian Thompson smiling"
			class="w-40 rounded-full rounded-br-sm border-4 border-theme-primary transition-all duration-500 ease-in-out" />
	</div>
	<div class="flex flex-col items-center justify-center space-y-4 text-center">
		<div class="flex flex-col items-center justify-center space-y-2">
			<a href="/" class="text-3xl">Ian Thompson</a>
			<p class="">Elementary School Teacher. Tech Enthusiast.</p>
		</div>
		<p class="text-sm italic">
			Ian is an elementary school teacher interested in technology.
		</p>
		<div class="flex space-x-5">
			<a
				href="https://www.github.com/nicelion"
				target="_blank"
				rel="noreferrer"
				aria-label="github account"><i class="fa-brands fa-github hover:animate-wiggle" /></a>

			<a
				href="https://www.instagram.com/thompson_ian"
				target="_blank"
				rel="noreferrer"
				aria-label="instagram account"><i class="fa-brands fa-instagram hover:animate-wiggle" /></a>
			<a
				href="https://www.linkedin.com/in/ian-thompson-b92467221"
				target="_blank"
				rel="noreferrer"
				aria-label="linkedin-account"><i class="fa-brands fa-linkedin hover:animate-wiggle" /></a>
			<a
				href="https://www.twitter.com/thompson__ian"
				target="_blank"
				rel="noreferrer"
				aria-label="twitter account"><i class="fa-brands fa-twitter hover:animate-wiggle" /></a>
		</div>
	</div>
</div>
