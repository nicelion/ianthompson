<!--
 About.svelte
 ianthompson
 
 Created by Ian Thompson on December 14th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import AboutTerminal from "$lib/components/AboutTerminal.svelte";
	import Collapse from "$lib/components/Collapse.svelte";
	import Interest from "$lib/components/Interest.svelte";
	import Experience from "$lib/components/resume/Experience.svelte";
</script>

<section id="about" class="bg-black-lighter pt-14 flex justify-center  items-center flex-col text-cornsilk">
	<div class="container px-8 my-4 xl:px-10 xl:my-10 flex flex-col-reverse lg:flex-row items-center lg:items-stretch  justify-center lg:space-x-10">
		<div id="col" class="mlgd:px-28 lg:w-3/4">
			<div id="about-text" class="space-y-8 md:px-20">
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
						combine my passion for computer science and education.
					</p>

				</div>
			</div>
		</div>
		<!-- <img
			src="img/terminal.png"
			alt=""
			class="p-5 w-full md:w-2/5 max-h-96 animate-message-bounce "
		/> -->
		<AboutTerminal />
	</div>

	<div class="flex lg:flex-row flex-col space-y-8 lg:space-y-0 lg:space-x-10 p-6  justify-center">
		<div class="p-6 rounded-md border-2 border-theme-primary space-y-4 w-full lg:w-1/2 xl:w-1/3">
			<h3 class="text-2xl text-white font-bold">Academic Interests</h3>
			<div class="flex flex-wrap">
				<Interest interest="#Human-computer-interaction" color="bg-purple-400" />
				<Interest interest="#AI-ethics" color="bg-purple-400" />
				<Interest interest="#Data-privacy" color="bg-purple-400" />
				<Interest interest="#UX-research" color="bg-purple-400" />
				<Interest interest="#Childrens-online-privacy" color="bg-purple-400" />

				<Interest interest="#Computer-science-education" color="bg-red-400" />
				<Interest interest="#Privacy-education" color="bg-red-400" />
				<Interest interest="#Digital-citizenship" color="bg-red-400" />
				<Interest interest="#Learning-environments" color="bg-red-400" />
			</div>
		</div>
		<div class="p-6  rounded-md border-2 border-theme-primary space-y-4 w-full lg:w-1/2 xl:w-1/3">
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
				<p><a href="https://idealab.sites.clemson.edu/" class="hover:underline" target="_blank" rel="noreferrer">IDEA Lab @ Clemson University</a> | Clemson, SC</p>
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
				<p><a href="https://www.greenville.k12.sc.us" class="hover:underline" target="_blank" rel="noreferrer">Greenville County School District</a> | Greenville, SC</p>
				<p>January 2021 - Present</p>
				<br />
				<p class="leading-relaxed">
					In this role, I substitute taught at various middle schools in school district in all
					subject areas. During the 21-22 school year, I was hired as a part-time permanent
					substitute at Greenville Middle and Beck Academy.
				</p>
			</Experience>
			<Experience title="Freelance Developer" fa="fa-solid fa-briefcase">
				<p><a href="https://www.nicelion.com" class="hover:underline" target="_blank" rel="noreferrer">Nice Lion Technologies LLC</a> | Clemson, SC</p>
				<p>July 2021 - Present</p>
				<br />
				<p class="leading-relaxed">
					I own Nice Lion Technologies LLC, a web development and software consulting business and
					currently act as the sole freelance developer.
				</p>
			</Experience>
			<Experience title="Audiovisual Technology Intern" fa="fa-solid fa-briefcase">
				<p><a href="https://www.fellowshipgreenville.org" class="hover:underline" target="_blank" rel="noreferrer">Fellowship Greenville</a> | Greenville, SC</p>
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
	</div>
</section>