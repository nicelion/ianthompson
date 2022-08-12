<script>
	import Education from '../components/resume/Education.svelte';
</script>

<div
	id="hero"
	class="hero w-full bg-eerie-black text-cornsilk flex flex-row md:flex-col justify-center items-center space-y-5 max-h-min"
>
	<div class="flex flex-col md:flex-row items-center justify-between w-full md:px-64">
		<div class="">
			<h1
				id="message"
				class="text-lg text-white bg-blue-400 md:p-2 px-8 rounded-xl rounded-bl-none w-fit mb-2 font-extrabold font-mono animate-message-bounce "
			>
				Hello, I'm...
			</h1>
			<h1 class="text-4xl md:text-8xl font-bold ">Ian Thompson</h1>
			<p class="text-lg md:text-2xl">Student. Web Developer. Everything else.</p>

			<div class="mt-12 space-y-2">
				<div class="text-xl space-x-4 group">
					<i class="fas fa-envelope group-hover:animate-wiggle" />
					<a href="mailto:ianthompson@nicelion.com">ianthompson@nicelion.com</a>
				</div>
				<div class="text-xl space-x-4 group">
					<i class="fas fa-phone group-hover:animate-wiggle" />
					<a href="mailto:ianthompson@nicelion.com">(864) 909-4893</a>
				</div>
				<div class="text-xl space-x-4 group">
					<i class="fa-solid fa-location-dot group-hover:animate-wiggle" />
					<span>Clemson, South Carolina</span>
				</div>
			</div>
			<div class="space-x-6 text-3xl mt-24">
				<a href="https://www.twitter.com/thompson__ian" target="_blank"
					><i class="fa-brands fa-twitter hover:animate-wiggle" /></a
				>
				<a href="https://www.instagram.com/thompson_ian" target="_blank"
					><i class="fa-brands fa-instagram hover:animate-wiggle" /></a
				>
				<a href="https://www.linkedin.com/in/ian-thompson-b92467221" target="_blank"
					><i class="fa-brands fa-linkedin hover:animate-wiggle" /></a
				>
			</div>
		</div>
		<div class="mt-10 md:mt-0">
			<div class="h-96 ">
				<img
					id="main-img"
					src="/img/ian-thompson.jpg"
					alt="Ian Thompson smiling"
					class="h-full rounded-full rounded-br-sm outline outline-8 outline-blue-400 hover:rounded-sm ease-in-out duration-500 transition-all "
				/>
			</div>
		</div>
	</div>
</div>
<div id="hero-wave" class="h-40 overflow-hidden bg-eerie-black text-black-lighter fill-current">
	<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%; "
		><path
			d="M0.00,49.98 C194.13,157.39 342.55,8.39 500.56,92.27 L500.00,150.00 L0.00,150.00 Z"
			style="stroke: none;"
		/></svg
	>
</div>
<section
	id="about"
	class="bg-black-lighter pt-14 flex justify-center  items-center flex-col text-cornsilk font-serif"
>
	<div
		class="container px-8 my-4 xl:px-10 xl:my-10 flex flex-col-reverse lg:flex-row items-center lg:items-stretch  justify-center md:space-x-10"
	>
		<div id="col" class="md:px-28">
			<div id="about-text" class="space-y-8">
				<div id="about-heading" class="mb-10">
					<!-- <p class="text-gray-200 mb-2 italic">A little about me...</p> -->
					<h2 class="text-4xl text-slate-gray font-semibold">A little about me.</h2>
				</div>
				<div class="leading-relaxed space-y-5 text-xl">
					<p>My name is Ian Thompson. I hail from the Upstate of South Carolina.</p>
					<p>
						I am currently a student at Clemson University working towards my Bachelor of Arts in
						Elementary Education. I love all things tech. I have been programming since I was 12
						years old, having first started out learning Objective-C using Xcode 5! Since then, I
						have used my programming skills to accomplish a variety of personal projects, for my
						small business, and for educational research.
					</p>
					<p>
						On this site, you can learn more about me, my interests, my hobbies, and more about what
						makes me, me.
					</p>
				</div>
			</div>
		</div>
		<img
			src="img/terminal.png"
			alt=""
			class="p-5 w-full md:w-2/5 max-h-96 animate-up-down animation-delay-1000"
		/>
	</div>
</section>

<div id="hero-wave" class="h-40 overflow-hidden bg-black-lighter text-eerie-black fill-current">
	<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%; "
		><path
			d="M0.00,49.98 C194.13,157.39 342.55,8.39 500.56,92.27 L500.00,150.00 L0.00,150.00 Z"
			style="stroke: none;"
		/></svg
	>
</div>
<section
	id="resume"
	class="bg-eerie-black pt-14 flex justify-center  items-center flex-col text-cornsilk font-serif"
>
	<h1 class="text-5xl font-bold">Resume</h1>
	<div class="flex flex-col w-full md:p-24 p-12">
		<h3 class="text-3xl">Education</h3>
		<div class="mt-4 w-full bg-black-lighter p-4 rounded-xl border-4 border-blue-400 rounded-br-sm">
			<h4 class="text-lg">
				<span class="uppercase text-2xl">Clemson University</span> Clemson, SC
			</h4>
			<p>Bachelor of Arts in Elementary Education</p>
			<p>August 2019 - Present</p>
			<br />
			<p>Activites:</p>
			<p>
				Undergraduate research, College of Education Undergraduate Student Advisory Board, YoungLife
			</p>
		</div>
		<!-- <ul class="steps steps-vertical">
			<li class="step">
				<div class="ml-4">
					<h4 class="text-lg">
						<span class="uppercase text-2xl">Clemson University</span> Clemson, SC
					</h4>
					<p>Bachelor of Arts in Elementary Education</p>
				</div>
			</li>
			<li class="step">J.L Mann High School</li>
		</ul> -->
	</div>
</section>
