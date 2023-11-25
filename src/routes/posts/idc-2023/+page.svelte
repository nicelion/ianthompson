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
	import External from '$lib/components/blog/renderers/External.svelte';

	export let data: Post;
</script>

<Article postData={data}>
	<p>
		This past June, I had the privilege of traveling to Chicago to visit the Association for
		Computing Machinery <External src="https://idc.acm.org/2023/"
			>Interaction Design & Children Conference</External
		>. At this conference, I had the honor of representing the <External
			src="https://idealab.sites.clemson.edu/">IDEA Lab @ Clemson University</External> and present our
		work in progress education application entitled S.P.O.T: Solving Problems of Tomorrow.
	</p>
	<Section title="About S.P.O.T">
		<p>
			S.P.O.T is a project I have contributed to during my time as an undergraduate research
			assistant with the IDEA Lab @ Clemson University. S.P.O.T is a web based application written
			in Svelte and TypeScript that introduces young learners to artificial intelligence. Through
			S.P.O.T, children are able to examine AI's use and applications in a sociopolitical context
			and are empowered become critical examiners of its use.
		</p>
	</Section>
	<Section title="The Conference">
		<Column>
			<Image
				src="https://storage.googleapis.com/iacthompson-dev-bucket/IMG_5763_8c77195dd1/IMG_5763_8c77195dd1.jpg?updated_at=2023-11-07T16:29:44.278Z"
				slot="right"
				alt="Presenting during poster session" />
			<ColumnContent slot="left">
				<p>
					While at the conference, I had the honor of presenting our work during a Works-in-Progress
					lightning round and during a poster session. Here, I interacted with many professors,
					students, and industry leaders in child-computer-interaction and AI-interaction.
				</p>
				<p>
					An extended abstract of our work can be found in the official ACM IDC '23 conference
					proceedings at:
				</p>
				<p>
					<cite>
						Ibrahim Oluwajoba Adisa, <span class="font-bold">Ian Thompson,</span> Tolulope Famaye,
						Deepika Sistla, Cinamon Sunrise Bailey, Katherine Mulholland, Alison Fecher, Caitlin
						Marie Lancaster, and Golnaz Arastoopour Irgens. 2023. S.P.O.T: A Game-Based Application
						for Fostering Critical Machine Learning Literacy Among Children. In Proceedings of the
						22nd Annual ACM Interaction Design and Children Conference (IDC '23). Association for
						Computing Machinery, New York, NY, USA, 507–511.
						<a class="url" href="https://doi.org/10.1145/3585088.3593884"
							>https://doi.org/10.1145/3585088.3593884</a>
					</cite>
				</p>
			</ColumnContent>
		</Column>
	</Section>
</Article>
