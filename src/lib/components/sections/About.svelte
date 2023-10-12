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
						Upon my May 2024 graduation, I will be certified to teach 2nd-6th grades in the State of South Carolina, though I hope to find myself in a middle school position. I also am very interested in pursing graduate school, where I hope to find a career where I can
						combine my passion for computer science and education.
					</p>
					<p>
						In my free time, I enjoy listening to music and being outdoors. I am also a volunteer <a class="url" href="https://younglife.org/get-involved/for-every-kid/">WyldLife</a> leader at a middle school in Anderson, SC.
					</p>
					<!-- <p>
						If you are interested in my political views, please <a href="/political-views" class="url"> click here.</a>
					</p> -->
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
				<Interest interest="#Child-computer-interaction" color="bg-purple-400" />
				<Interest interest="#AI-ethics" color="bg-purple-400" />
				<Interest interest="#Data-privacy" color="bg-purple-400" />
				<Interest interest="#UX-research" color="bg-purple-400" />
				<Interest interest="#Childrens-online-privacy" color="bg-purple-400" />
				<Interest interest="#Computer-science-education" color="bg-red-400" />
				<Interest interest="#Privacy-education" color="bg-red-400" />
				<Interest interest="#Digital-citizenship" color="bg-red-400" />
				<Interest interest="#Learning-environments" color="bg-red-400" />
				<Interest interest="#Elementary-education" color="bg-teal-400" />
				<Interest interest="#Middle-level-education" color="bg-teal-400" />

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
				<Interest interest="TypeScript" color="bg-teal-400" url="https://www.typescriptlang.org/" />
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
				<p class="border-b mb-2">Activites:</p>
				<p>
					Undergraduate research, College of Education Undergraduate Student Advisory Board,
					YoungLife
				</p>
				<br />
				<p class="border-b mb-2">Honors:</p>
				<p>President's List - Spring 2023</p>
				<p>Dean's List - Fall 2023</p>
				<p>Dean's List - Spring 2022</p>
				
				<br />
				<p class="border-b mb-2">Certifications:</p>
				<p>Group 1 Investigators Conducting Social and Behavioral Science Research (SBR) at Clemson University</p>

				<br />
				<p class="border-b mb-2">Committee:</p>
				<p><span class="italic">Program Committeee</span>, International Conference on Quantitative Ethnography (ICQE) 2023</p>
			</Experience>
		</Collapse>
		<Collapse title="Teaching Experience">
			<Experience title="Practicum Student - 3rd Grade" fa="fa-solid fa-chalkboard-user">
				<p><a href="https://idealab.sites.clemson.edu/" class="url" target="_blank" rel="noreferrer">Midway Elementary</a> | Anderson School District 5</p>
				<p>Fall 2023</p>
				<br />
				<p>
					This was a 215 hour placement that satisfied the requirements of EDEL 4010 - Elementary Field Experience at Clemson University.
				</p>
			</Experience>
			<Experience title="Practicum Student - 3rd Grade" fa="fa-solid fa-chalkboard-user">
				<p><a href="https://idealab.sites.clemson.edu/" class="url" target="_blank" rel="noreferrer">Whitehall Elementary</a> | Anderson School District 5</p>
				<p>Spring 2023</p>
				<br />
				<p>
					This was a 35 hour placement that satisfied the requirements of EDEL 4520 - Elementary Methods in Mathematics Teaching at Clemson University.
				</p>
			</Experience>
			<Experience title="Practicum Student - 4th Grade" fa="fa-solid fa-chalkboard-user">
				<p><a href="https://idealab.sites.clemson.edu/" class="url" target="_blank" rel="noreferrer">Forest Acres Elementary</a> | Pickens County School District</p>
				<p>Fall 2021</p>
				<br />
				<p>
					This was a 6 hour placement that satisfied the requirements of EDF 3340 - Child Growth and Development at Clemson University.
				</p>
			</Experience>
		</Collapse>
		<Collapse title="Work Experience">
			<Experience title="Undergraduate Researcher" fa="fa-solid fa-briefcase">
				<p><a href="https://idealab.sites.clemson.edu/" class="url" target="_blank" rel="noreferrer">IDEA Lab @ Clemson University</a> | Clemson, SC</p>
				<p>August 2021 - Present</p>
				<br />
				<p class="leading-relaxed">
					In this role, I assisted the <a
						href="https://idealab.sites.clemson.edu/"
						class="url">IDEA Lab</a
					>
					in Clemson University's College of Education on an NSF funded project that seeks to "measure
					and model youth’s data science knowledge and practices in the context of social, ethical, and
					political issues related to digital technologies" and "measure youth’s sense of empowerment
					to enact change in their communities in terms of the ethical use of digital technologies."
					<sup class=""
						><a
							href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2024965&HistoricalAwards=false" class="url"
							>1</a
						></sup
					>
				</p>
				<p class="leading-relaxed my-4">My duties included, but were not limited to:</p>
				<ul class="list-disc space-y-2 list-inside">
					<li>
						Work alongside professors and graduate students in the IDEA (Inclusive Digital Education
						and Analytics) Lab in the College of Education
					</li>
					<li>
						Assist in the writing of academic literature
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
				<p><a href="https://www.greenville.k12.sc.us" class="url" target="_blank" rel="noreferrer">Greenville County School District</a> | Greenville, SC</p>
				<p>January 2021 - Present</p>
				<br />
				<p class="leading-relaxed">
					In this role, I substitute taught at various middle schools in school district in all
					subject areas. During the 21-22 school year, I was hired as a part-time permanent
					substitute at Greenville Middle and Beck Academy.
				</p>
				<p class="leading-relaxed my-4">My duties included, but were not limited to:</p>

				<ul class="list-disc space-y-2 list-inside">					
					<li> Provide classroom instruction to students as assigned in lesson plans.</li>
					<li> Take attendance and document daily notes.</li>
					<li> Create a classroom that is conducive to learning and appropriate to the maturity and interests of students.</li>
					<li> Maintains discipline and classroom control that fosters a safe and positive learning environment for all students and staff in accordance with school district policies.</li>
					<li> Perform other duties as assigned by the immediate supervisor.</li>
				</ul>
			</Experience>
			<Experience title="Freelance Developer" fa="fa-solid fa-briefcase">
				<p><a href="https://www.nicelion.com" class="url" target="_blank" rel="noreferrer">Nice Lion Technologies LLC</a> | Clemson, SC</p>
				<p>July 2021 - Present</p>
				<br />
				<p class="leading-relaxed">
					I own Nice Lion Technologies LLC, a web development and software consulting business and
					currently act as the sole freelance developer.
				</p>
			</Experience>
			<Experience title="Audiovisual Technology Intern" fa="fa-solid fa-briefcase">
				<p><a href="https://www.fellowshipgreenville.org" class="url" target="_blank" rel="noreferrer">Fellowship Greenville</a> | Greenville, SC</p>
				<p>May 2022 - August 2022</p>
				<br />
				<p class="leading-relaxed">
					In this role, I gained experience working in a large church in the AV department. I
					primarily learned how to mix and produce live sound using Allen&Heath and Avid sound
					boards. I also used my computer science background to develop Cronicle extensions written
					in Python and C++ to create automatons for different church technologies.
				</p>
				<p class="leading-relaxed my-4">My duties included, but were not limited to:</p>

				<ul class="list-disc space-y-2 list-inside">
					<li> Work alongside our Worship Technology Director to complete various improvement projects to worship technology, including system optimization, storage organization efforts, and implementation of new equipment.</li>
					<li> Assist the Audio/Visual Technology Director with weekly needs such as lighting plots, setup of stage equipment and microphones, and configuring the sound console.</li>
					<li> Assist the NextGen Production Designer with weekly needs in all NextGen production environments, including system optimization, maintenance, and implementation of any new equipment.</li>
					<li> Serve and support any and all weekend services in a variety of production roles. </li>
					<li> Accomplish other tasks and projects as assigned.</li>
				</ul>
			</Experience>
			<Experience title="After School Caregiver" fa="fa-solid fa-briefcase">
				<p><a href="https://www.greenville.k12.sc.us" class="url" target="_blank" rel="noreferrer">Greenville County School District</a> | Greenville, SC</p>
				<p>May 2017 - Mar 2020</p>
				<br />
				<p class="leading-relaxed">
					In this role, I worked in the extended day program at Pelham Road Elementary School in Greenville, SC. 
				</p>
				<p class="leading-relaxed my-4">My duties included, but were not limited to:</p>

				<ul class="list-disc space-y-2 list-inside">
					<li>Facilitate planned activities as determined by the site director. </li>
					<li>Provide assistance in distributing snacks, supplies, etc.</li>
					<li>Assist the site director with providing all daily services and reports.</li>
					<li>Supervise children constantly, never leaving them unattended.</li>
					<li>Assist in homework supervision. </li>
					<li>Refer serious discipline problems to the site director. </li>
					<li>Attend all staff meetings and training sessions. </li>
					<li>Arrive promptly and remain for the specified time. </li>
					<li>Complete clerical tasks assigned by the director. </li>
					<li>Perform other duties as assigned by the immediate supervisor.</li>
				</ul>
			</Experience>
		</Collapse>
		<Collapse title="Volunteer Experience">
			<Experience title="Young Life Leader @ T.L Hanna High School" fa="fa-solid fa-handshake-angle">
				<p>Tri-County Young Life | Anderson, SC</p>
				<p>August 2023 - Present</p>
				<br />
				<p class="leading-relaxed">
					<a class="url" href="https://younglife.org/get-involved/for-every-kid/">Young Life</a> is a ministry for high school students. In this role, I have
					connected with many students and families at T.L Hanna High School in Anderson, SC. I am
					on a team of other college students who plan weekly gatherings, aka "club", and other
					events with the goal of sharing the Gospel of Christ to our high school friends.
				</p>
			</Experience>
			<Experience title="WyldLife Leader @ McCants Middle School" fa="fa-solid fa-handshake-angle">
				<p>Tri-County Young Life | Anderson, SC</p>
				<p>August 2020 - August 2023</p>
				<br />
				<p class="leading-relaxed">
					<a class="url" href="https://younglife.org/get-involved/for-every-kid/">WyldLife</a> is a ministry under Young Life for middle school students. In this role, I have
					connected with many students and families at McCants Middle School in Anderson, SC. I am
					on a team of other college students who plan weekly gatherings, aka "club", and other
					events with the goal of sharing the Gospel of Christ to our middle school friends.
				</p>
			</Experience>
		</Collapse>
		<Collapse title="Publications">
			<Experience title="S.P.O.T: A Game-Based Application for Fostering Critical Machine Learning Literacy Among Children" fa="fa-solid fa-book">
				<p><a href="https://idc.acm.org/2023/" class="url">Interaction Design and Children Conference</a> | Northwestern University</p>
				<p>June 19, 2023</p>
				<br />
				<p class="leading-relaxed">
					<span class="font-bold">ABSTRACT:</span> This paper describes S.P.O.T., a game-based application for promoting children's practical understanding of ML concepts and applications. Current tools for teaching ML in K-12 engage students in playful exploration of ML mechanisms and teach ML from a cognitive perspective. However, in S.P.O.T, learners interact with ML within real-life sociopolitical contexts and examine how ML predictions impact their daily lives and communities. Through the immersion of stories that mirror children's lived experiences, S.P.O.T. provides elementary school aged children with opportunities to learn how machine learning applications function and develop children's abilities to critically examine, question, and reimagine the consequences of ML decisions in the real world.
				</p>
				<p class="leading-relaxed mt-5">
					<cite>
						Ibrahim Oluwajoba Adisa, Ian Thompson, Tolulope Famaye, Deepika Sistla, Cinamon Sunrise Bailey, Katherine Mulholland, Alison Fecher, Caitlin Marie Lancaster, and Golnaz Arastoopour Irgens. 2023. S.P.O.T: A Game-Based Application for Fostering Critical Machine Learning Literacy Among Children. In Proceedings of the 22nd Annual ACM Interaction Design and Children Conference (IDC '23). Association for Computing Machinery, New York, NY, USA, 507–511. <a class="url" href="https://doi.org/10.1145/3585088.3593884">https://doi.org/10.1145/3585088.3593884</a>
					</cite>
				</p>
			</Experience>
		</Collapse>
		<!-- <Collapse title="Certifications">
			<Experience title="Practicum Student - 3rd Grade" fa="fa-solid fa-certificate">
				<p><a href="https://idealab.sites.clemson.edu/" class="url" target="_blank" rel="noreferrer">Midway Elementary</a> | Anderson School District 5</p>
				<p>Fall 2023</p>
				<br />
				<p>
					This was a 215 hour placement that satisfied the requirements of EDEL 4010 - Elementary Field Experience at Clemson University.
				</p>
			</Experience>
		</Collapse> -->
	</div>
</section>