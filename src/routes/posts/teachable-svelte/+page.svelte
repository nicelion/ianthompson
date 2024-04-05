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
		Heading,
		CodespanRenderer
	} from '$lib/components/blog/renderers';
	import External from '$lib/components/blog/renderers/External.svelte';
	import ViewOnGitHubButton from '$lib/components/ViewOnGitHubButton.svelte';

	export let data: Post;
</script>

<Article postData={data}>
	<h2>About</h2>
	<p>
		Teachable Svelte is an open source project I created during my time as an undergraduate research
		assistant at Clemson University. This project is currently a work in progress and still needs
		many features added and many bugs fixed.
	</p>

	<p>
		In this application, users can create image classifiers using their webcam or by uploading an
		image. Then, a model will be created using <CodespanRenderer
			>@teachablemachine/image</CodespanRenderer> and <CodespanRenderer
			>@tensorflow/tfjs</CodespanRenderer> packages. Once the model has been created and trained, the
		model becomes available for download and is serialized into a <CodespanRenderer
			>model.json</CodespanRenderer
		>, <CodespanRenderer>metadata.json</CodespanRenderer>, and <CodespanRenderer
			>model.weights.bin</CodespanRenderer> file. These can then be utilized else where.
	</p>
	<p>
		The downloaded model is Teachable Machine compatible, as in, it is in the same format and schema
		as produced by using the original Google Teachable Machine program. Thus, anywhere a Teachable
		Machine model is utilized, a model that was trained using teachable-svelte can also be used.
	</p>
	<div class="flex items-center justify-center">
		<a
			href="https://www.github.com/nicelion/teachable-svelte"
			class="group flex max-w-xl items-center justify-center space-x-6 rounded-lg border bg-white px-4 py-2 text-center align-middle text-black transition duration-200 ease-in-out"
			target="_blank"
			rel="noreferrer">
			<i class="fa-brands fa-github text-3xl group-hover:animate-wiggle" />
			<p class="text-lg">View on GitHub</p>
		</a>
	</div>
	<h2>Purpose</h2>
	<p>
		A portion of our research consists of the creation of a web-based application that brings
		children through a narrative that explains AI through a socio-political ethics lense. Within
		this project, our goal was to create an environment where learners can create and consume their
		own AI models.
	</p>
	<p>
		In initial phases of our research, we have used curriculum from MIT Media Lab's "How to Train
		Your Robot" wherein students created image classification models using <External
			href="https://teachablemachine.withgoogle.com/">Google Teachable Machine (GTM)</External> and then
		used those created models within a custom Scratch environment. This extension activated the users
		webcam and would make predictions based of the trained model. These predictions could then be used
		to conditionally execute other Scratch-based code users create.
	</p>
	<p>
		This processed required users to enter the official GTM website, create and train their model,
		and then copy a URL to the location where Google stores the model and paste said URL back into
		the Scratch environment where they would do their coding.
	</p>
	<p>
		This presented a problem for us as researchers. Because Google is the one hosting the GTM
		application, we are not able to collect any data regarding user activity. As in, we cannot
		really assess how students are participating in the creation of these classification models.
		Additionally, these multiple steps in and out of our own narrative we are developing create
		extra steps for students and researchers to complete, all of which may limit the "immersion" we
		hope to evoke through our application.
	</p>
	<p>
		Thus, we knew we needed to create everything in house. Essentially, we needed full control, and
		Google certainly was not going to hand that over. But, given our reliance on existing
		open-source programs (the MIT Scratch extension that brings GTM functionality to Scratch), we
		knew that we wanted to find a way to create our own models that were compatible with the models
		GTM produces.
	</p>
</Article>
