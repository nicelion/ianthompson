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
		External
	} from '$lib/components/blog/renderers';
	import { page } from '$app/stores';
	import ViewOnGitHubButton from '$lib/components/ViewOnGitHubButton.svelte';

	import Retroactive from '$lib/components/blog/Retroactive.svelte';
	
	let {postData}: Post = $page.data

</script>

<Article {postData}>
	<Retroactive />

	<Column>
		<ColumnContent slot="left">
			<p>
				I remember our family trip to Las Vegas in high school. You are probably thinking, "Wow, what kind of family brings kids to Las Vegas?" While that is certainly a reasonable question, trust me, it isn't as weird as it sounds. 
			</p>
			<p>
				On this trip, I came across a <External href="https://youtube.com/watch?v=5QOiris-rLM&ab_channel=MomJeans.-Topic">near death fail comp (must watch)</External> from the many times <External href="https://www.youtube.com/watch?v=TwIvUbOhcKE&t=43s&ab_channel=ElectroBOOM">ElectroBOOM</External> almost killed himself. While these videos are a sure deterrent to fooling around with electricity (and quite shocking!), I grew fascinated by the world of electronics.
			</p>
			<p>
				You see, I had already been exposed to the world of programming. I knew how to program the computer but didn't know how to make the computer. This spark of interest led me to more and more beginner videos on electronics, and I eventually stumbled upon the <External href="https://amzn.to/3UMI79a">Arduino</External>. 
			</p>
			<p>
				I pulled out my Amazon app, ordered a <External href="https://amzn.to/3yzWQx2">beginner Arduino set</External>, and got to work as soon as I got home from our trip. Months later, PCBTree was born. 
			</p>
		</ColumnContent>
		<Image
			src="/img/posts/pcbtree/pcbgif.gif"
			alt="Playing around with a shift register."
			slot="right" />
	</Column>
	
	<h2>PCBTree</h2>
	<p>
		After fooling around with breadboard circuits, I knew the time had come to get a printed design. Thus, I created PCBTree.
	</p>
	<p>
		PCBTree is a printed circuit board (PCB) in the shape of a Christmas tree. I designed this board using <External href="https://www.kicad.org/">KiCad</External>, an open-source PCB CAD tool. I designed the board cutout and laid each trace by hand. 
	</p>
	<p>
		The board is powered by a 5V DC power brick. This powers each of the green and red LEDs on the board. The green and red LEDs are on different circuits, each connected to a transistor, which is then connected to an <External href="https://amzn.to/44Uj5K0">ATTiny85 microcontroller</External>. 
	</p>
	<p>
		This ATTiny85 runs a simple C program that reads data from the connected trim potentiometer. This potentiometer increases the blinking speed, alternating between the red and green LEDs. A pot value of 0 turns off all the LEDs, and a pot value of 100 makes the LEDs shine steadily.
	</p>
	<p>
		Each of the LEDs, resistors, transistors and ATTiny85s are surface-mounted to the PCB (yes, this was a pain in the butt to do as an inexperienced solder-er and with highly unprofessional equipment). I then created a simple mount to hot glue the PCB on out of some spare wood in my dad's shop.
	</p>
	<h2>Conclusion</h2>
	<p>
		I wish I had more details on the build process for this project. As you have read by the warning placed at the top of this post, I am writing this retroactively, recalling years-old memories. 
	</p>
	<p>
		You can view this project in the following GitHub repo:
	</p>
	<ViewOnGitHubButton url="https://www.github.com/nicelion/PCBTree" />
	<Column>
		<ColumnContent slot="left">
			<Image
			src="/img/posts/pcbtree/pcb-tree-2.JPG"
			alt="Individual PCBTree on wooden mount."
			 />
		</ColumnContent>
		<Image
			src="/img/posts/pcbtree/pcbtree-1.jpeg"
			alt="A style shot of PCBTree"
			slot="right" />
	</Column>
	<Column>
		<ColumnContent slot="left">
			<Image
			src="/img/posts/pcbtree/3.jpeg"
			alt="Close-up of green and red LEDs."
			 />
		</ColumnContent>
		<Image
			src="/img/posts/pcbtree/4.JPG"
			alt="Close up of ATTiny85 and transistors."
			slot="right" />
	</Column>
</Article> 