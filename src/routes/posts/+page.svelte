<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import PostRow from '$lib/components/blog/PostRow.svelte';
	import type { Post, PostResponse } from '$lib/types/Blog';
	import { page } from '$app/stores';
	import { Posts } from '$lib/manifest/Posts';

	/** @type {import('./$types').PageData} */
	export let data: PostResponse;

	$: data = data;

	// console.log(Posts);

	// console.log("HELLO", $page.url);

	const handlePagination = (direction) => {
		if (direction == 'forward') {
		} else if (direction == 'backward') {
		}
	};
</script>

<svelte:head>
	<title>Posts - iancthompson.dev</title>
	<meta
		name="description"
		content="Welcome to my 'blog.' Here, you can find posts about projects I am working on, things I have done, and other things that interest me! This is meant to be very casual, so don't expect anything crazy." />
</svelte:head>

<div class="">
	<div class="space-y-3 border-b-2 border-b-slate-500 px-2 pb-4">
		<h2 class="text-4xl">Posts</h2>
		<p>
			Welcome to my "blog." Here, you can find posts about projects I am working on, things I have
			done, and other things that interest me! This is meant to be very casual, so don't expect
			anything crazy.
		</p>
	</div>
	<!-- <PostRow /> -->
	<div class="px-2">
		<!-- {#if data.data.length < 1} -->
		{#if data.posts.length < 1}
			<div class="flex h-full w-full flex-col items-center justify-center space-y-5 py-9">
				<img
					class="h-96 rounded-md"
					src="https://media.tenor.com/Qy4dAOV73dcAAAAM/skeleto-skeleton.gif"
					alt="" />
				<h3 class="text-center text-xl font-bold">You've made a search and nothing was found!!</h3>
			</div>
		{:else}
			{#each data.posts as post}
				{#if post.published}
					<PostRow {post} />
				{/if}
			{/each}
		{/if}
	</div>
	<div class="flex w-full justify-center">
		<div class="btn-group">
			<!-- <button class="btn" disabled={`${data.meta.pagination.page == 1 ? "disabled" : ""}`} on:click={() => handlePagination("forward")}>
                <a href={`/posts?page=${data.meta.pagination.page - 1}`} class="" >«</a>
            </button>
            <button class="btn">Page {data.meta.pagination.page}</button>
            <button class="btn" disabled={`${data.meta.pagination.page >= data.meta.pagination.pageCount ? "disabled" : ""}`}>
                <a href={`/posts?page=${data.meta.pagination.page + 1}`} class=""  on:click={() => handlePagination("backward")}>»</a>
            </button> -->
		</div>
	</div>
</div>
