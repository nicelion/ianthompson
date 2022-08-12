<script>
	import '../app.css';
</script>

<header
	id="header"
	class="w-full bg-eerie-black h-header p-5 flex items-center text-cornsilk sticky top-0 z-50 transition-colors ease-in-out duration-400 border-b border-blue-400 border-transparent"
>
	<a href="/" class="h-full w-full flex items-center space-x-5">
		<div class="h-14">
			<img
				id="logo-img"
				src="/img/ian-thompson.jpg"
				alt=""
				class="h-full rounded-full rounded-br-sm outline outline-4 outline-blue-400 transition-all ease-in-out delay-75 opacity-0"
			/>
		</div>
		<h1
			id="logo"
			class="opacity-0 text-md text-white bg-blue-400 p-1 px-4 rounded-xl rounded-bl-none w-fit mb-2 font-extrabold font-mono transition-all ease-in-out delay-75"
		>
			Hi, I'm Ian!
		</h1>
	</a>
	<div class="flex space-x-4 text-xl">
		<a href="#" class="hover:opacity-75">About</a>
		<a href="#" class="hover:opacity-75">Resume</a>
		<a href="#" class="hover:opacity-75">Blog</a>
	</div>
</header>

<div class="font-body relative bg-eerie-black w-full" id="content">
	<slot />
</div>

<footer class="w-full bg-black-lighter">h</footer>
