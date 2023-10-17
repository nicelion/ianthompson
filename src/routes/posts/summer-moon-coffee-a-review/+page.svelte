<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on July 12th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import type { Post } from '$lib/types/Post';

	import {
		Article,
		Column,
		ColumnContent,
		Image,
		Section,
		Heading
	} from '$lib/components/blog/renderers';

	export let data: Post;
</script>

<Article postData={data}>
	<p>
		Recently, a new coffee shop has been popping up around the Greenville, South Carolina area. This
		Texas-based chain has made its way to the State with its first location (and the location I
		visited) in the Five Forks area of Simpsonville.
	</p>
	<p>
		Now, before I begin, I love a good coffee shop. Being a current Clemson student, I have spent
		many hours at a good coffee shop. In my opinion, the local, the better. So, when I first heard
		of this new coffee concept, I was intrigued but disappointed to hear that it was, in fact, a
		chain restaurant. However, this cooler October day (and finally one of the first hints of Fall
		weather) felt like a perfect day to try their "Autum Moon Latte" they have been heavily
		advertising.
	</p>
	<Section title="My Review">
		<Column>
			<ColumnContent slot="left">
				<p>
					First walking in, I noticed a distinct smell, one typically not associated with a coffee
					shop. Sure, I could smell the coffee ever-so-subtly in the background. Still, the first
					smell to hit your nose is the overwhelming smoky smell attributed to their wood-fired
					roasting process that I have been told they perform in-store. The odor wasn't particularly
					offensive; however, it did leave a "burnt coffee"-square smell on my palate. Upon leaving
					the store, I carried with me this wood-fired smell on my clothes.
				</p>
				<p>
					Seating was plentiful in this location, and there were many patrons. Though there was a
					plethora of seating, my friend and I were worried we may be unable to find a seat. The
					decor and atmosphere was very welcoming and "homey". The color palate chosen for the
					painting, brickwork, and furniture felt very rustic yet modern.
				</p>
			</ColumnContent>
			<Image
				src="https://storage.googleapis.com/iacthompson-dev-bucket/Summer_Moon_Menu_bdd91589b0/Summer_Moon_Menu_bdd91589b0.jpg?updated_at=2023-10-15T21:17:19.330Z"
				alt="Summer Moon Menu with Calories"
				slot="right" />
		</Column>
		<p>
			Typically, my go-to order is a vanilla latte when going to a new coffee shop. However, I
			ordered an Iced Autumn Moon Latte this time, which paired well with the fall-like weather
			outside.
		</p>
		<Column>
			<Image
				src="https://storage.googleapis.com/iacthompson-dev-bucket/Moon_Milk_340aaac2c9/Moon_Milk_340aaac2c9.jpg?updated_at=2023-10-15T21:17:18.805Z"
				alt="Moon Milk"
				slot="left" />
			<ColumnContent slot="right">
				<p>
					Summer Moon's ordering process is complex and confusing for first-timers. Not only can you
					choose what size latte you want, but you also get to choose how much "moon milk" you'd
					like in your drink. Moon milk is Summer Moon's proprietary sweet cream they place in
					lattes. When ordering, the default is a "half moon" with about 40% Moon Milk, 40% skim
					milk and 20% espresso. This concoction yields a whopping 430 calories (almost double what
					is in a Grande Vanilla Latte from Starbucks). The Full Moon variant of this drink (80%
					moon milk and 20% espresso) would give you an astonishing 750 calories per drink.
				</p>
				<p>
					This probably isn't the best for a review, but I was neither impressed or offended by my
					coffee. It was pretty basic. Sure, the Moon Milk was all its cracked up to be: super sweet
					and super enjoyable. The coffee was not as offensive as the burnt smell made it seem. It
					was simply a regular, overly sweet latte. It was exactly what Summer Moon said it was
					going to be.
				</p>
			</ColumnContent>
		</Column>
	</Section>
	<Section title="Conclusion">
		<Image
			src="https://storage.googleapis.com/iacthompson-dev-bucket/My_Order_d4577f6716/My_Order_d4577f6716.jpg?updated_at=2023-10-15T21:17:18.359Z"
			alt="My Order" />
		<p>
			So the question remains: would I recommend this place? Absolutely. There is certainly no harm
			in trying this place out. Now, would I go again? Probably not for a while.
		</p>
		<p>
			The Moon Milk and fire-roasted coffee are gimmicky at best and I don't know if it's a drinking
			experience I want to have every time I have a coffee.
		</p>
	</Section>
</Article>
