<!--
 RefineSearch.svelte
 iancthompson
 
 Created by Ian Thompson on May 15th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import { goto } from '$app/navigation';
	import Badge from '$lib/components/blog/Badge.svelte';
	import { OrderBy } from '$lib/types/Query';
	import type { Tag } from '$lib/types/Tag';
	import { QueryFactory } from '$lib/util/QueryFactory';

	export let tags: Tag = ['code', 'how-to', 'general', 'projects', 'life'];

	let showSidebar = false;

	let searchParam = '';

	let queryURL = '/posts?';

	let sortSelect = 'Sort By';
	$: {
		// console.log(sortSelect);
	}

	const handleToggle = () => {
		showSidebar = !showSidebar;
	};

	const handleSearch = () => {
		/**
		 * Create our basic search
		 */
		let searchQuery = {
			date: sortSelect == 'Date - Oldest to Newest' ? OrderBy.ASC : OrderBy.DESC
		};

		/**
		 * We check to see if the something has been entered into the search box
		 * if it has, then we will add that to the sear query
		 */
		if (searchParam.trim() != '') {
			searchQuery = { ...searchQuery, q: searchParam };
		}

		/**
		 * We get the query url from QueryFactory
		 */
		let qs = QueryFactory(location, searchQuery);

		goto(queryURL + qs, { replaceState: false });
	};

	const handleSortSelect = () => {
		if (sortSelect == 'Date - Newest to Oldest') {
			// goto(`/posts?date=desc`, { replaceState: true })
		} else if (sortSelect == 'Date - Oldest to Newest') {
			// goto(`/posts?date=asc`, { replaceState: true })
		}
	};
</script>

<!-- Full Size -->
<div id="sidebar" class="h-fit w-full space-y-5 rounded bg-black-lighter p-2 md:sticky md:top-20">
	<button class={`btn btn-ghost w-full text-xs lg:hidden`} on:click={handleToggle}
		>{`${showSidebar ? 'Close' : 'Search Blog'}`}</button>
	<form
		on:submit|preventDefault={handleSearch}
		class={`${showSidebar ? '' : 'hidden'} space-y-5 lg:block`}>
		<h2 class="text-center text-xl font-bold">Refine Your Search</h2>
		<div class="flex flex-col space-y-5">
			<input type="text" placeholder="Search blog" class="input w-full" bind:value={searchParam} />
			<button class="btn btn-primary">Search</button>
		</div>
		<div class="flex flex-col space-y-2">
			<h2>Filter by Tag:</h2>
			<div class="flex flex-wrap">
				{#each tags as tag}
					<Badge title={tag} />
				{/each}
			</div>
		</div>

		<select class="select w-full" bind:value={sortSelect} on:change={handleSortSelect}>
			<option disabled selected>Sort By</option>
			<option>Date - Newest to Oldest</option>
			<option>Date - Oldest to Newest</option>
		</select>
		<a href="/posts" class={`btn btn-outline btn-sm w-full`}>CLEAR FILTERS</a>
	</form>
</div>
