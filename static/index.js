/**
 index.js
 ianthompsoncd
 
 Created by Ian Thompson on August 10th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
*/
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
	myFunction();
};

// Get the header
var header = document.getElementById('header');
var content = document.getElementById('content');
var heroWave = document.getElementById('hero-wave');
// Get the offset position of the navbar
var sticky = header.offsetTop;

var logo = document.getElementById('logo');
var message = document.getElementById('message');
var logoImg = document.getElementById('logo-img');
var mainImg = document.getElementById('main-img');

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset > content.offsetTop) {
		header.classList.add('bg-black-lighter');
		header.classList.remove('border-transparent');
	} else {
		header.classList.remove('bg-black-lighter');
		header.classList.add('border-transparent');
	}

	if (message.getBoundingClientRect().bottom < header.getBoundingClientRect().bottom) {
		logo.classList.add('opacity-100');
		logo.classList.remove('opacity-0');
	} else {
		logo.classList.remove('opacity-100');
		logo.classList.add('opacity-0');
	}

	if (mainImg.getBoundingClientRect().bottom < header.getBoundingClientRect().bottom) {
		logoImg.classList.add('opacity-100');
		logoImg.classList.remove('opacity-0');
	} else {
		logoImg.classList.remove('opacity-100');
		logoImg.classList.add('opacity-0');
	}
}
