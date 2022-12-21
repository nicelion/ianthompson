/**
 ColorHasher.ts
 iancthompson
 
 Created by Ian Thompson on December 20th 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

/**
 * Generate a color based on a seed
 * @param seed input string
 * @returns a string containg a hex value for a color not including the #
 */
function ColorHasher (seed: string) {
    let color = Math.floor((Math.abs(Math.sin(getHash(seed)) * 16777215)));
    color = color.toString(16);
    // pad any colors shorter than 6 characters with leading 0s
    while(color.length < 6) {
        color = '0' + color;
    }
    return color;
}

// Convert an input into a string hash
function getHash(input: string){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
        hash  = ((hash << 5) - hash) + input.charCodeAt(i);
        hash |= 0; // to 32bit integer
    }
    return hash;
}

export default ColorHasher;