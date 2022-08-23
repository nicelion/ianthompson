<!--
 made-with.svelte
 iancthompson.dev
 
 Created by Ian Thompson on August 12th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->


<script>
	let choices = [
		'with ❤️ and ☕️',
		'combining love and acceptance',
		'with flint and steel',
		'with grace & truth',
		'with 1s and 0s',
		'with rock and roll',
		'with 🤙🏼 and  🤘',
		'with ✌️ and 🤟'
	];
	let text = choices[0];

	const handleClick = () => {
		text = choices[Math.floor(Math.random() * choices.length)];
	};
</script>

<p on:click={handleClick}>Made {text} in South Carolina.</p>
