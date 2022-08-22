<script>
	import Collapse from '../components/Collapse.svelte';
	import Card from '../components/Card.svelte';
	import Interest from '../components/Interest.svelte';
	import Education from '../components/resume/Education.svelte';
	import Experience from '../components/resume/Experience.svelte';
</script>

<svelte:head>
	<title>Ian Thompson | Student @ Clemson University</title>
</svelte:head>

<div
	id="hero"
	class="hero w-full bg-eerie-black text-cornsilk flex flex-row sm:flex-col justify-center items-center space-y-5 max-h-min p-12"
>
	<div
		class="flex flex-col-reverse sm:flex-row items-center justify-between w-full md:px-6 lg:px-64 pt-24 md:pt-0"
	>
		<div class="">
			<h1
				id="message"
				class="text-lg mt-12 sm:mt-0 text-white bg-blue-400 md:p-2 px-8 rounded-xl rounded-bl-none w-fit mb-2 font-extrabold font-mono animate-message-bounce "
			> 
				Hello, I'm...
			</h1>
			<h1 class="text-4xl md:text-6xl lg:text-8xl font-bold ">Ian Thompson</h1>
			<p class="text-lg md:text-2xl">Undergraduate Student @ Clemson University</p>

			<div class="mt-12 space-y-2">
				<div class="text-xl space-x-4 group flex items-center">
					<i class="fas fa-envelope group-hover:animate-wiggle" />

					<div class="flex flex-col">
						<a href="mailto:icthomp@g.clemson.edu" class="hover:underline">icthomp@g.clemson.edu</a>
						<!-- <span class="border border-cornsilk" /> -->
						<a href="mailto:ianthompson@nicelion.com" class="hover:underline">ianthompson@nicelion.com</a>
					</div>
				</div>
				<!-- <div class="text-xl space-x-4 group">
					<i class="fas fa-phone group-hover:animate-wiggle" />
					<a href="mailto:ianthompson@nicelion.com">### ### ####</a>
				</div> -->
				<div class="text-xl space-x-4 group">
					<i class="fa-solid fa-location-dot group-hover:animate-wiggle" />
					<span>Clemson, South Carolina</span>
				</div>
			</div>
			<div class="space-x-6 text-3xl mt-24">
				<a href="https://www.github.com/nicelion" target="_blank" aria-label="github"
					><i class="fa-brands fa-github hover:animate-wiggle" /></a
				>

				<a href="https://www.instagram.com/thompson_ian" target="_blank" aria-label="instagram"
					><i class="fa-brands fa-instagram hover:animate-wiggle" /></a
				>
				<a
					href="https://www.linkedin.com/in/ian-thompson-b92467221"
					target="_blank"
					aria-label="linkedin"><i class="fa-brands fa-linkedin hover:animate-wiggle" /></a
				>
				<a href="https://www.twitter.com/thompson__ian" target="_blank" aria-label="twitter"
					><i class="fa-brands fa-twitter hover:animate-wiggle" /></a
				>
			</div>
		</div>
		<div class="mt-10 sm:mt-0">
			<div class="md:w-72 md:h-72 w-56 h-56 xl:w-96 xl:h-96">
				<img
					id="main-img"
					src="/img/ian-thompson.jpg"
					alt="Ian Thompson smiling"
					class="h-full rounded-full rounded-br-sm border-blue-400 border-8 hover:rounded-sm ease-in-out duration-500 transition-all "
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
		class="container px-8 my-4 xl:px-10 xl:my-10 flex flex-col-reverse lg:flex-row items-center lg:items-stretch  justify-center lg:space-x-10"
	>
		<div id="col" class="mlgd:px-28 lg:w-3/4">
			<div id="about-text" class="space-y-8">
				<div id="about-heading" class="mb-10">
					<!-- <p class="text-gray-200 mb-2 italic">A little about me...</p> -->
					<h2 class="text-4xl text-slate-gray font-semibold">A little about me.</h2>
				</div>
				<div class="leading-relaxed space-y-5 text-xl">
					<p>My name is Ian Thompson. I am from the Upstate of South Carolina.</p>
					<p>
						I am currently a student at Clemson University working towards my Bachelor of Arts in
						Elementary Education. I love all things tech. I have been programming since I was 12
						years old, having first started out learning Objective-C using Xcode 5! Since then, I
						have used my programming skills to accomplish a variety of personal projects, for my
						small business, and for my role in educational research.
					</p>
					<p>
						I am very interested in pursing graduate school and hoping to find a career where I can
						combine my passion for computer science and education together.
					</p>

				</div>
			</div>
		</div>
		<!-- <img
			src="img/terminal.png"
			alt=""
			class="p-5 w-full md:w-2/5 max-h-96 animate-message-bounce "
		/> -->
		<div class="mockup-code lg:w-1/4 h-fit self-center mb-12 lg:mb-0">
			<pre class="text-success"><code>Ian Thompson: {'{'}</code></pre>
			<pre class="text-success"><code>&Tab; Age: 21</code></pre>
			<pre class="text-success"><code>&Tab; Major: Elementary Education</code></pre>
			<pre class="text-success"><code>&Tab; Location: Clemson, SC</code></pre>
			<pre class="text-success"><code>&Tab; Graduation: 2024</code></pre>
			<pre class="text-success"><code>{'}'}</code></pre>
		</div>
	</div>

	<div class="flex lg:flex-row flex-col space-y-8 lg:space-y-0 lg:space-x-10 p-6  justify-center">
		<div class="p-6 rounded-md border-2 border-blue-400 space-y-4 w-full lg:w-1/2 xl:w-1/3">
			<h3 class="text-2xl text-white font-bold">Academic Interests</h3>
			<div class="flex flex-wrap">
				<Interest interest="#Human-computer-interaction" color="bg-purple-400" />
				<Interest interest="#AI-ethics" color="bg-purple-400" />
				<Interest interest="#Online-privacy" color="bg-purple-400" />
				<Interest interest="#UX-research" color="bg-purple-400" />
				<Interest interest="#Learning-sciences" color="bg-red-400" />
				<Interest interest="#Educational-research" color="bg-red-400" />
				<Interest interest="#Learning-analytics" color="bg-red-400" />
			</div>
		</div>
		<div class="p-6  rounded-md border-2 border-blue-400 space-y-4 w-full lg:w-1/2 xl:w-1/3">
			<h3 class="text-2xl text-white font-bold">Technical Skills</h3>
			<div class="flex flex-wrap">
				<Interest interest="JavaScript" color="bg-orange-400" url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
				<Interest interest="Python" color="bg-orange-400"url="https://www.python.org/" />
				<Interest interest="Swift" color="bg-orange-400" url="https://developer.apple.com/swift/" />
				<Interest interest="HTML" color="bg-orange-400" url="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" />
				<Interest interest="CSS" color="bg-green-400" url="https://developer.mozilla.org/en-US/docs/Web/CSS" />
				<Interest interest="TailwindCSS" color="bg-green-400" url="https://tailwindcss.com/" />
				<Interest interest="Svelte" color="bg-teal-400" url="https://svelte.dev/" />
				<Interest interest="NodeJS" color="bg-teal-400" url="https://nodejs.org/en/" />
				<Interest interest="React" color="bg-teal-400" url="https://reactjs.org/" />

				<Interest interest="Firebase" color="bg-teal-400" url="https://firebase.google.com/" />
				<Interest interest="VSCode" color="bg-indigo-400" url="https://code.visualstudio.com/" />
				<Interest interest="Xcode" color="bg-indigo-400" url="https://developer.apple.com/xcode/" />
				<Interest interest="Wireshark" color="bg-indigo-400" url="https://www.wireshark.org/" />
				<Interest interest="Zotero" color="bg-pink-400" url="https://www.zotero.org/" />
				<Interest interest="Microsoft Office" color="bg-pink-400" url="https://www.office.com/" />
				<Interest interest="Photoshop" color="bg-pink-400" url="https://www.adobe.com/products/photoshop.html" />
			</div>
		</div>
	</div>
	<div id="resume" class="flex flex-col justify-evenly w-full p-6 md:p-24  space-y-9">
		<Collapse title="Education">
			<Experience
				title="Clemson University"
				fa="fa-solid fa-graduation-cap"
				img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Clemson_Tigers_logo.svg/500px-Clemson_Tigers_logo.svg.png?20181104184913"
			>
				<p>Bachelor of Arts in Elementary Education</p>
				<p>August 2020 - Present</p>
				<br />
				<p>Activites:</p>
				<p>
					Undergraduate research, College of Education Undergraduate Student Advisory Board,
					YoungLife
				</p>
			</Experience>
		</Collapse>

		<Collapse title="Experience">
			<Experience title="Undergraduate Researcher" fa="fa-solid fa-briefcase">
				<p><a href="https://idealab.sites.clemson.edu/" class="hover:underline" target="_blank">IDEA Lab @ Clemson University</a> | Clemson, SC</p>
				<p>August 2021 - Present</p>
				<br />
				<p class="leading-relaxed">
					In this role, I assisted the <a
						href="https://idealab.sites.clemson.edu/"
						class="underline">IDEA Lab</a
					>
					in Clemson University's College of Education on an NSF funded project that seeks to "measure
					and model youth’s data science knowledge and practices in the context of social, ethical, and
					political issues related to digital technologies" and "measure youth’s sense of empowerment
					to enact change in their communities in terms of the ethical use of digital technologies."
					<sup class=""
						><a
							href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2024965&HistoricalAwards=false"
							>1</a
						></sup
					>
				</p>
				<p class="leading-relaxed my-4">My duties included, but were not limited to:</p>
				<ul class="list-disc space-y-2">
					<li>
						Work alongside professors and graduate students in the IDEA (Inclusive Digital Education
						and Analytics) Lab in the College of Education
					</li>
					<li>Assist in the development and design of educational software</li>
					<li>
						Developed extensions to the Scratch programming environment that interface with
						educational robots
					</li>
					<li>
						Assist in artificial intelligence education research for elementary and middle
						school-aged youths
					</li>
					<li>Collect data from research implementations</li>
					<li>Complete other tasks as assigned by Lab Director and graduate students</li>
				</ul>
			</Experience>
			<Experience title="Substitute Teacher" fa="fa-solid fa-briefcase">
				<p><a href="https://www.greenville.k12.sc.us" class="hover:underline" target="_blank">Greenville County School District</a> | Greenville, SC</p>
				<p>January 2021 - Present</p>
				<br />
				<p class="leading-relaxed">
					In this role, I substitute taught at various middle schools in school district in all
					subject areas. During the 21-22 school year, I was hired as a part-time permanent
					substitute at Greenville Middle and Beck Academy.
				</p>
			</Experience>
			<Experience title="Freelance Developer" fa="fa-solid fa-briefcase">
				<p><a href="https://www.nicelion.com" class="hover:underline" target="_blank">Nice Lion Technologies LLC</a> | Clemson, SC</p>
				<p>July 2021 - Present</p>
				<br />
				<p class="leading-relaxed">
					I own Nice Lion Technologies LLC, a web development and software consulting business and
					currently act as the sole freelance developer.
				</p>
			</Experience>
			<Experience title="Audiovisual Technology Intern" fa="fa-solid fa-briefcase">
				<p><a href="https://www.fellowshipgreenville.org" class="hover:underline" target="_blank">Fellowship Greenville</a> | Greenville, SC</p>
				<p>May 2022 - August 2022</p>
				<br />
				<p class="leading-relaxed">
					In this role, I gained experience working in a large church in the AV department. I
					primarily learned how to mix and produce live sound using Allen&Heath and Avid sound
					boards. I also used my computer science background to develop Cronicle extensions written
					in Python and C++ to create automatons for different church technologies.
				</p>
			</Experience>
		</Collapse>
		<Collapse title="Volunteering">
			<Experience title="Wyldlife Leader @ McCants Middle School" fa="fa-solid fa-handshake-angle">
				<p>Tri-County YoungLife | Anderson, SC</p>
				<p>August 2020 - Present</p>
				<br />
				<p class="leading-relaxed">
					Wyldlife is a ministry under YoungLife for middle school students. In this role, I have
					connected with many students and families at McCants Middle School in Anderson, SC. I am
					on a team of other college students who plan weekly gatherings, aka "club", and other
					events with the goal of sharing the Gospel of Christ to our middle school friends.
				</p>
			</Experience>
		</Collapse>
		<!-- <div class="w-full">
			<h1 class="text-3xl border-b">Volunteering</h1>
			<div class="flex items-center space-x-4">
				<i class="fa-solid fa-handshake-angle text-2xl" />
				<div class="mt-4 w-full bg-black-lighter p-2">
					<h4 class="text-lg">
						<span class="uppercase text-2xl">Wyldlife Leader @ McCants Middle School</span>
					</h4>
					<p>Tri-County YoungLife | Anderson, SC</p>
					<p>August 2020 - Present</p>
					<br />
					<p>
						Wyldlife is a ministry under YoungLife for middle school students. In this role, I have
						connected with many students and families at McCants Middle School in Anderson, SC. I am
						on a team of other college students who plan weekly gatherings, aka "club", and other
						events with the goal of sharing the Gospel of Christ to our middle school friends.
					</p>
				</div>
			</div>
		</div> -->
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

<section id="projects" class="flex flex-col justify-center w-full items-center">
	<div class="text-cornsilk mb-12">
		<h1 class="font-bold text-3xl">Projects I've Worked On</h1>
	</div>
	<div class="flex flex-col px-8 lg:flex-row space-y-9 lg:space-y-0 lg:space-x-9">
		<Card
			url="https://github.com/nicelion/raspi-metar"
			img="/img/raspi-metar.jpeg"
			title="raspi-metar"
			description="In short, raspi-metar is a Raspberry Pi project that takes METAR data from various airports and displays it on a VFR sectional map using NEOPIXEL LEDs."
		/>
		<Card
			url="https://github.com/nicelion/M5IRBlaster"
			img="https://obniz.com/doc/reference/m5stickc/images/m5stickc.jpg"
			title="M5 TCP IRBlaster"
			description="M5 TCP IRBlaster is a project I worked on while an intern at Fellowship Greenville. This project utilized an M5StickC to decode and send IR signals to power on/off devices. The M5Stick sets up a TCP server which was communicated to via BitFoucs' Companion and via Cronicle to automate Sunday mornings."
		/>
		<Card
			url="https://github.com/nicelion/PCBTree"
			img="/img/pcbtree.JPG"
			title="PCBTree"
			description="PCBTree is a project I created while in high school. For this project, I designed and printed PCBs in the shape of a Christmas tree. I then programmed an ATTiny85 to measure a potentiometer which was used to determine the flashing speed of the LEDs."
		/>
	</div>
</section>

<div id="hero-wave" class="h-40 overflow-hidden bg-eerie-black text-black-lighter fill-current">
	<svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%; "
		><path
			d="M0.00,49.98 C194.13,157.39 342.55,8.39 500.56,92.27 L500.00,150.00 L0.00,150.00 Z"
			style="stroke: none;"
		/></svg
	>
</div>
