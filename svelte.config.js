/**
 svelte.config.js
 ianthompson
 
 Created by Ian Thompson on December 12th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from "svelte-preprocess";

//** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
	  adapter: adapter()
	},
	preprocess: [
	  preprocess({
		postcss: true,
	  }),
	],
  };
  

export default config;
