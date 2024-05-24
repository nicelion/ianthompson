/**
 plopfile.js
 iancthompson
 
 Created by Ian Thompson on April 6th 2024
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2024 Nice Lion Technologies LLC. All Rights Reserved.
 
*/

export default function (plop) {
    // controller generator
    plop.load("plop-helper-date")
    plop.load("plop-helper-slugify")

    plop.setHelper(('list'), (text) => {
        var result = text.split(',').map(s => `"${s.trim()}"`)
        return result;
    })

    plop.setGenerator('blog-post', {
        description: 'Create a new blog post',
        prompts: [
            {
                type: 'input',
                name: 'title',
                message: 'Blog title?:'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Blog description?:'
            },
            {
                type: 'input',
                name: 'tags',
                message: 'Blog tags?:'
            }, 
        ],
        actions: [
            {
                type: 'addMany',
                destination: "./src/routes/posts/{{slugify title}}/",
                base: ".templates/blog-post/template",
                templateFiles: ".templates/blog-post/template/**"
            },
            {
                type: "modify",
                path: './src/lib/manifest/Posts.ts',
                pattern: /\/\* POSTS \*\//g,
                templateFile: '.templates/blog-post/index.ts.hbs'
            }
        ]
    });
};