<!--
 Hero.svelte
 ianthompson
 
 Created by Ian Thompson on December 14th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<div id="hero" class="hero w-full bg-eerie-black text-cornsilk flex flex-row sm:flex-col justify-center items-center space-y-5 max-h-min p-12">
	<div class="flex flex-col-reverse sm:flex-row items-center justify-between w-full md:px-6 lg:px-64 pt-24 md:pt-0">
		<div class="">
			<h1 id="message" class="text-lg mt-12 sm:mt-0 text-white bg-theme-primary md:p-2 px-8 rounded-xl rounded-bl-none w-fit mb-2 font-extrabold font-mono animate-message-bounce"> 
				Hello, I'm...
			</h1>
			<h1 class="text-4xl md:text-6xl lg:text-8xl font-bold  mb-5">Ian Thompson</h1>
			<p class="text-lg md:text-2xl">Undergraduate Student @ Clemson University</p>

			<div class="mt-12 space-y-2">
				<div class="text-xl space-x-4 group flex items-center">
					<i class="fas fa-envelope group-hover:animate-wiggle" />

					<div class="flex flex-col">
						<a href="mailto:icthomp@g.clemson.edu" class="hover:underline">icthomp@g.clemson.edu</a>
						<a href="mailto:ianthompson@nicelion.com" class="hover:underline">ianthompson@nicelion.com</a>
					</div>
				</div>
				<div class="text-xl space-x-4 group">
					<i class="fa-solid fa-location-dot group-hover:animate-wiggle" />
					<span>Clemson, South Carolina</span>
				</div>
			</div>
			<div class="space-x-6 text-3xl mt-24">
				<a href="https://www.github.com/nicelion" target="_blank" rel="noreferrer" aria-label="github"
					><i class="fa-brands fa-github hover:animate-wiggle" /></a
				>

				<a href="https://www.instagram.com/thompson_ian" target="_blank" rel="noreferrer" aria-label="instagram"
					><i class="fa-brands fa-instagram hover:animate-wiggle" /></a
				>
				<a href="https://www.linkedin.com/in/ian-thompson-b92467221" target="_blank" rel="noreferrer" aria-label="linkedin"><i class="fa-brands fa-linkedin hover:animate-wiggle" /></a>
				<a href="https://www.twitter.com/thompson__ian" target="_blank" rel="noreferrer" aria-label="twitter"
					><i class="fa-brands fa-twitter hover:animate-wiggle" /></a
				>
			</div>
		</div>
		<div class="mt-10 sm:mt-0">
			<div class="md:w-72 md:h-72 w-56 h-56 xl:w-96 xl:h-96 overflow-hidden rounded-full rounded-br-sm border-theme-primary border-8">
				<img id="main-img" src="/img/ian-thompson.jpg" alt="A portrait of Ian Thompson smiling" class="h-full  hover:scale-110 ease-in-out duration-1000 transition-all"/>
			</div>
		</div>
	</div>
</div>