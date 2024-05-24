<!--
 Hero.svelte
 ianthompson
 
 Created by Ian Thompson on December 14th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<div
	id="hero"
	class="hero flex max-h-min w-full flex-row items-center justify-center space-y-5 bg-eerie-black p-12 text-cornsilk sm:flex-col">
	<div
		class="flex w-full flex-col-reverse items-center justify-between pt-24 sm:flex-row md:px-6 md:pt-0 lg:px-64">
		<div class="">
			<h1
				id="message"
				class="mb-2 mt-12 w-fit animate-message-bounce rounded-xl rounded-bl-none bg-theme-primary px-8 font-mono text-lg font-extrabold text-white sm:mt-0 md:p-2">
				👋🏼 Hello, I'm...
			</h1>
			<h1 class="mb-5 text-4xl font-bold md:text-6xl lg:text-8xl">Ian Thompson</h1>
			<p class="text-lg md:text-2xl">Elementary School Teacher. Tech Enthusiast.</p>

			<div class="mt-12 space-y-2">
				<div class="group flex items-center space-x-4 text-xl">
					<i class="fas fa-envelope group-hover:animate-wiggle" />

					<div class="flex flex-col">
						<a href="mailto:icthomp@g.clemson.edu" class="hover:underline">icthomp@g.clemson.edu</a>
						<a href="mailto:ianthompson@nicelion.com" class="hover:underline"
							>ianthompson@nicelion.com</a>
					</div>
				</div>
				<div class="group space-x-4 text-xl">
					<i class="fa-solid fa-location-dot group-hover:animate-wiggle" />
					<span>Clemson, South Carolina</span>
				</div>
			</div>
			<div class="mt-24 space-x-6 text-3xl">
				<a
					href="https://www.github.com/nicelion"
					target="_blank"
					rel="noreferrer"
					aria-label="github"><i class="fa-brands fa-github hover:animate-wiggle" /></a>

				<a
					href="https://www.instagram.com/thompson_ian"
					target="_blank"
					rel="noreferrer"
					aria-label="instagram"><i class="fa-brands fa-instagram hover:animate-wiggle" /></a>
				<a
					href="https://www.linkedin.com/in/ian-thompson-b92467221"
					target="_blank"
					rel="noreferrer"
					aria-label="linkedin"><i class="fa-brands fa-linkedin hover:animate-wiggle" /></a>
				<a
					href="https://www.twitter.com/thompson__ian"
					target="_blank"
					rel="noreferrer"
					aria-label="twitter"><i class="fa-brands fa-twitter hover:animate-wiggle" /></a>
			</div>
		</div>
		<div class="mt-10 sm:mt-0">
			<div
				class="h-56 w-56 overflow-hidden rounded-full rounded-br-sm border-8 border-theme-primary md:h-72 md:w-72 xl:h-96 xl:w-96">
				<img
					id="main-img"
					src="/img/ian-thompson.jpg"
					alt="A portrait of Ian Thompson smiling"
					class="h-full transition-all duration-1000 ease-in-out hover:scale-110" />
			</div>
		</div>
	</div>
</div>
