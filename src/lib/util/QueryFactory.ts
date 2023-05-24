/**
 QueryFactory.ts
 iancthompson
 
 Created by Ian Thompson on May 21st 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

import type { Query } from "$lib/types/Query";

export const QueryFactory = (l: Location, search: Query) => {
    
    const urlParams = new URLSearchParams(l.search);
    console.log(urlParams);
    console.log(search);

    Object.keys(search).forEach(element => {
        console.log("RUNNING!");
        
        console.log(`elemeent: ${element} | | search[element]: ${search[element]}`);
        
        if (search[element] != null) {
            urlParams.set(element, search[element])
        }

    });

    console.log("reeturnning " + urlParams.toString());
    
    return urlParams.toString()
    
    
//     // Iterate through each of the present search params
//     for (const [key, value] of urlParams) {
//         // console.log("RSDF/K");
        
//         // // Iterate through each of the keys in the search object
//         Object.keys(search).forEach(element => {
//             console.log("RUNNING!");
            
//             console.log(element);

//             console.log(`compairing ${key} to ${element}`);
            
//             if (key == element) {
//                 console.log(`MATCH FOUND! New Search for ${key} is ${search[element]}`);
                
//             }
            
//         });
        
//         console.log(`${key}:${value}`);
//     }
}