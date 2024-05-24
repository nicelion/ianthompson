<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on July 12th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import type { Post } from '$lib/types/Post';
	import PostLoader from '$lib/components/blog/PostLoader.svelte';

	import {
		Article,
		Column,
		ColumnContent,
		Image,
		Section,
		Heading
	} from '$lib/components/blog/renderers';
	import { page } from '$app/stores';

	export let postData: Post = $page.data
</script>

<Article {postData}>
	<p>Hello, and welcome to the blog! I'll start by introducing myself:</p>
	<p>
		My name is Ian Thompson, and I am currently a senior elementary education major at Clemson
		University. I know what you're thinking: why does an elementary education major have a tech
		blog? And that is such a valid question to ask yourself...
	</p>
	<Column>
		<ColumnContent slot="left">
			<p>
				It all started when I was in middle school. I began to develop a deep interest in computers
				and programming. I started out learning the Objective-C language, and by the time I was in
				8th grade, I published my first application to the Apple App Store (of course, under my
				mom's name since you had to be 18 with a valid driver's license to publish!). From there, I
				went on to learn Swift, and by 10th grade, I published my second game to the App Store.
			</p>
			<p>
				Throughout middle and high school, I devoted much of my free time to learning different
				programing languages and technologies. My first formal programming class was in 10th grade
				in a beginner Python introduction course my high school offered. From there, I would go on
				to take AP Computer Science A in the 11th grade, all while working on various personal
				coding projects, many of which have never seen the light of day.
			</p>
		</ColumnContent>
		<Image
			src="https://storage.googleapis.com/iacthompson-dev-bucket/3_2d91ac0434/3_2d91ac0434.jpg"
			alt="A screenshot of the App Store provided screenshot of my first game: Click Quick!"
			slot="right" />
	</Column>
	<p>
		This deep interest and apparent skill in computer science would lead me to believe that I would
		go on to major in CS in college. Well, the Lord had different plans...
	</p>
	<Column>
		<Image
			src="https://storage.googleapis.com/iacthompson-dev-bucket/IMG_5660_8d1ac28c99/IMG_5660_8d1ac28c99.jpg"
			alt="2019 graduating seniors back on the elementary school's playground"
			slot="left" />
		<ColumnContent slot="right">
			<p>
				In 2019, I applied and got accepted to Clemson University as a computer engineering major.
				However, almost immediately after being accepted, I switched programs to elementary
				education. Teaching and sharing my knowledge have always interested me. So much so, while a
				middle and high schooler, I would frequently make programming tutorials on my YouTube
				channel. (I'm sure a few of these still exist somewhere on the internet). In my senior year
				of high school, I took a job at my old elementary school, working in the extended day
				program. There, I felt a call from the Lord to switch majors and pursue a degree in
				education.
			</p>

			<p>
				At the time, Clemson did not offer a middle-level education program, and to be honest, if
				you had asked me if I ever saw myself in the middle school classroom, I would have
				immediately told you "no." But, as is a running theme in my life, and at the risk of
				sounding overly clichè, the Lord works in mysterious ways. While in college, I began
				volunteering for Young Life as a WyldLife leader, a ministry set on bringing the Gospel to
				middle school-aged students. Here I found the deep love for the middle school grades the
				Lord has instilled in me. While I wish I would have switched to the middle-level major
				sooner, a major switch would be too much of a hassle at this point in my undergraduate
				career. As such, I am sticking with the elementary major but hope to find a 6th-grade
				position upon graduation and plan to certify in middle-level math and science as soon as
				possible.
			</p>
		</ColumnContent>
	</Column>
	<Image
		src="https://storage.googleapis.com/iacthompson-dev-bucket/IMG_0319_7291b9efd6/IMG_0319_7291b9efd6.jpg"
		alt="2020 WyldLife team" />
	<p>
		That still doesn't answer the purpose of this blog. Here, I hope to keep record of the various
		projects that I work on and to archive the different things that interest me. I make no aim to
		"get famous" or to contribute novel ideas to the universe. I want a place to publically gather
		and display my ideas, thoughts, and accomplishments with whoever may see them. This site is a
		work in progress. You will likely see things that don't look right and experience bugs. Just
		think of it as a way enjoy the imperfection of human nature.
	</p>
	<p>Thanks for checking this post out!</p>
</Article>
