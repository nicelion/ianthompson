<!--
 post.svelte
 iancthompson.dev
 
 Created by Ian Thompson on December 3rd 2022
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2022 Nice Lion Technologies LLC. All Rights Reserved.
 
--->
<svelte:head>
    <title>Post #1 by Ian Thompson</title>
</svelte:head>

<div class="bg-eerie-black p-12 px-48">
    <div class="w-full px-20 py-14 bg-black-lighter text-cornsilk rounded-md">
        <div class="text-sm breadcrumbs mb-2">
            <ul>
              <li><a>Blog</a></li> 
              <li>Post</li>
            </ul>
          </div>
        
        <div class="mb-8 space-y-2">
            <h1 class="text-4xl">Hello! This is my first blog!!</h1>
            <p>By Ian Thompson on 12/04/2022</p>
            <div class="">
                <div class="badge badge-primary">primary</div>
                <div class="badge badge-secondary">primary</div>
                <div class="badge badge-primary">accent</div>

            </div>

        </div>
    
    
        <div class="flex flex-col space-y-3 items-center text-lg leading-relaxed">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, nihil. Fugit dolorem dignissimos sapiente modi fugiat? Nobis numquam quibusdam libero est iure, ab incidunt dignissimos esse, aperiam quo repellendus ipsum laborum debitis nostrum consequatur reiciendis cum excepturi, id in ad. Suscipit in similique, eaque odio dolorum itaque harum ratione explicabo!</p>
    
            <img class="" src="/img/raspi-metar.jpeg" alt="">
    
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga inventore alias rem distinctio omnis. Asperiores nihil nemo sint perferendis autem esse tempora? Ex, inventore alias sapiente at quae reiciendis sit omnis enim magni magnam facere asperiores sunt, doloribus nostrum voluptates?</p>
    
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus praesentium unde laboriosam, incidunt quae nesciunt, nisi blanditiis enim deleniti numquam neque voluptate harum voluptatibus minus tempore. Odit esse voluptatem corporis suscipit. Consequuntur quidem et doloremque veniam suscipit illum saepe, quos ea, necessitatibus praesentium sequi recusandae? Maxime illo, cum laudantium recusandae optio numquam? Blanditiis neque ducimus laborum aspernatur odit commodi non, harum sit, asperiores beatae iste esse assumenda quam est dolore sint quos eaque. Commodi, nam, quo officia dolores modi laborum minus nulla maxime natus cupiditate provident quam. Ea ut, placeat quisquam in, quibusdam neque magnam ducimus aliquid repellat et impedit magni rem? Quas sint quos facilis, eum animi, corporis modi blanditiis neque vel debitis quasi maiores distinctio id mollitia quis. Consequuntur hic, eum quos inventore aut mollitia modi ab maxime reiciendis nisi vitae quas rem debitis ut placeat animi, natus similique porro. Tempora atque, voluptatum animi molestias temporibus magnam aut.</p>
    
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, impedit dolor! Adipisci placeat esse voluptates cupiditate asperiores totam magni animi rerum omnis sint velit commodi voluptatem vero accusamus maiores enim, ut, illo sed reprehenderit. Nisi aliquid dignissimos consequatur <a href="/">Lorem, ipsum dolor.</a> ullam dolore ipsum quae sed totam, iusto omnis, itaque, dolorem ipsam quos temporibus corporis ipsa. Odit quisquam modi, amet omnis quasi nihil delectus aut obcaecati nesciunt saepe quas provident, alias esse non ut sint eveniet dolores illo dolorum eaque culpa, laboriosam natus animi quidem. Amet, dicta accusamus quas, alias explicabo minima reprehenderit et unde omnis laboriosam sit inventore, quis temporibus beatae delectus distinctio officia itaque quisquam? Quod commodi quidem ut in labore! Laudantium, cupiditate recusandae? Ullam illo suscipit nobis ducimus excepturi!</p>
        </div>
    
    </div>
    
</div>

<style>
    img {
        @apply w-1/2 rounded-md;
    }

    a {
        @apply hover:underline text-theme-primary;
    }
</style>