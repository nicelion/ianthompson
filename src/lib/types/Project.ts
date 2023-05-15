/**
 Project.ts
 iancthompson
 
 Created by Ian Thompson on May 11th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

export interface Project {
    name: string,
    description: string,
    github?: string
    url?: string,
    img: string
    tags: [string]
}