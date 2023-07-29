<!--
 +page.svelte
 iancthompson
 
 Created by Ian Thompson on July 12th 2023
 ianthompson@nicelion.com
 https://www.nicelion.com
 
 Copyright (c) 2023 Nice Lion Technologies LLC. All Rights Reserved.
 
--->

<script lang="ts">
	import Article from "$lib/components/blog/Article.svelte";
	import type { Post } from "$lib/types/Post";
    import { page } from '$app/stores';  
	import { getPostData } from "$lib/util/getPostData";
	import Heading from "$lib/components/blog/renderers/Heading.svelte";
	import Image from "$lib/components/blog/renderers/Image.svelte";
	import PostLoader from "$lib/components/blog/PostLoader.svelte";
	import External from "$lib/components/blog/renderers/External.svelte";
	import { text } from "svelte/internal";
	import CodespanRenderer from "$lib/components/blog/renderers/CodespanRenderer.svelte";
	import List from "$lib/components/blog/renderers/List.svelte";
	import ListItem from "$lib/components/blog/renderers/ListItem.svelte";
	import Strong from "$lib/components/blog/renderers/Strong.svelte";
	import CodeRenderer from "$lib/components/blog/renderers/CodeRenderer.svelte";
	import Section from "$lib/components/blog/renderers/Section.svelte";

    let postData: Promise<Post> = getPostData($page.url.pathname)

</script>

{#await postData}
    <PostLoader />
{:then post} 
    <Article postData={post}>
        <Section title="Background">
            <p>
                When the world came to a halt in 2020, I was just finishing up my first year of college. With all of this free time on my hands, I needed something to take my mind off the seemingly impending doom of the COVID-19 pandemic.
            </p>
            <p>
                One of the biggest draws to Clemson University was the Clemson Flying Club, a club at the University wherein students could obtain their private pilot's license. Leading into college, I had a great interest in pursuing a PPL and knew that I could do so more cost-effectively through this club. I began studying the FAR/AIM, watching all the YouTube videos on flying I could get my hands on, and dreaming of the day that I would finally touch the skies. However, as we all know, COVID really put a wrench into all of these plans. When the University shut down, so did the club. Unfortunately, I ran out of money and time to pursue this dream once I re-enrolled a year later (more on this later).
            </p>
            <p>
                I remember luring <External href="https://www.reddit.com/r/Flying">/r/Flying</External> or <External href="https://www.reddit.com/r/RaspberryPi">/r/RaspberryPi</External> on Reddit one day and coming across a project wherein a hobbyist pilot and amateur programmer utilized his Raspberry Pi to create a light-up METAR map to display weather information. This sparked my creativity, and I knew I wanted to create something similar. Sure, his code was open-sourced and I could essentially clone his repository and throw it on a spare Pi I had. But where is the fun in that? I dedicated a few weeks to writing my own Python program and making my own version of the project.
            </p>
            <p>
                In this post, I describe raspi-metar, a METAR visualization tool I created with my dad in the summer of 2020. I describe what METAR is, how it is used, and the process of creating the tool.
            </p>
        </Section>
        <Section title="What the heck is METAR?">
            <p>
                For the non-flying readers, you are probably wondering what the heck METAR is.
            </p>
            <p>
                METAR is a form of aviation briefing that alerts pilots to the current weather conditions at a given airport or aerodrome. As such, METAR is an acronym standing for "Meteorological Aerodrome Report."
            </p>
            <Section title="What Does It Look Like?">
                <p>
                    A METAR is a long string of text that, at first glance, may look like a bunch of gibberish. But, to the trained eye, crucial weather information is efficiently relayed to the pilot.
                </p>
                <p>
                    Below is an example METAR report from the local airport at the time of writing this post:
                </p>
                <CodespanRenderer content="KCEU 241454Z AUTO 06009G15KT 030V100 10SM CLR 20/08 A3010 RMK AO2 SLP187 T02000083 58005" />
                <p>
                    We can tell a few things from this report:
                </p>
                <List ordered={true}>
                    <ListItem>
                        <CodespanRenderer content="KCEU"/>: This is the ICAO identifier for the airport that we are requesting data from
                    </ListItem>
                    <ListItem>
                        <CodespanRenderer content="241454Z"/>:  Indicates the date and time the METAR report was generated in Zulu time
                    </ListItem>
                    <ListItem>
                        <CodespanRenderer content="AUTO"/>: Tells us that this report was automatically generated
                    </ListItem>
                    <ListItem>
                        <CodespanRenderer content="06009G15KT 030V100"/>: Indicates wind heading and speed
                    </ListItem>
                    <ListItem>
                        <CodespanRenderer content="10SM CLR"/>: Indicates visibility of 10 statute miles
                    </ListItem>
                    <ListItem>
                        <CodespanRenderer content="A3010"/>: Indicates the altimeter setting
                    </ListItem>
                    <ListItem>
                        <CodespanRenderer content="RMK"/>: Indicates additional remarks for the weather station
                    </ListItem>
                    <ListItem>
                        <CodespanRenderer content="AO2"/>: Indicates the weather station is equipped with a precipitation sensor
                    </ListItem>
                    <ListItem>
                        <CodespanRenderer content="T02000083"/>: Indicates the temperature and dew points in degrees Celsius.
                    </ListItem>
                </List>
                <p>
                    For more information, refer to this article: <External href="https://en.wikipedia.org/wiki/METAR">https://en.wikipedia.org/wiki/METAR.</External>
                </p>
            </Section>
        </Section>
        <Section title="Introduction to Flight Rules" >
            <p>
                This long string of text isn't exactly human-readable. If someone were looking to fly, they may want a quicker way to know the weather conditions. As such, a pilot may describe current flying conditions by "flight rules."
            </p>
            <p>The rules are:</p>
            <List ordered={true}>
                <ListItem>
                    <Strong>Visual Flight Rules (VFR)</Strong> where visibility is greater than 5 statute miles, and the cloud ceiling is greater than 3,000ft above ground level (AGL).
                </ListItem>
                <ListItem>
                    <Strong>Marginal Flight Rules (MVFR)</Strong> where visibility is greater than 3 but less than 5 statute miles, and the cloud ceiling is between 1,000 ft and 3,000ft AGL.
                </ListItem>
                <ListItem>
                    <Strong>Instrument Flight Rules (IFR)</Strong> where visibility is greater than 1 but less than 3 statute miles, and the cloud ceiling is between 500ft and 1,000ft AGL.
                </ListItem>
                <ListItem>
                    <Strong>Low Instrument Flight Rules (LIFR)</Strong> where visibility is less than 1 statute mile, and the cloud ceiling is less than 500ft AGL.
                </ListItem>
            </List>
        </Section>

        <Section title="Technical Description of the Project">
            <Section title="Overview">
                <p>
                    The idea behind this project was simple: write a program for a Raspberry Pi that would gather METAR/flight rules data from a group of airports. Then, using the Pi, connect to a series of addressable LEDs and assign each airport to a specific LED index. Once weather data for said airport had been collected, display a specific color signifying the specific flight rules for the airport. Refresh every 10 minutes and add animations for specific weather events.
                </p>
                <p>Here is a full list of everything you will need:</p>
                <List ordered={true}>
                    <ListItem><External href="https://amzn.to/3BTP53f">Raspberry Pi</External></ListItem>
                    <ListItem>SD Card</ListItem>
                    <ListItem><External href="https://amzn.to/3IGs3kd">WS2811 Addressable LEDs</External></ListItem>
                    <ListItem><External href="https://amzn.to/3Wx17sN">5V Power Supply</External></ListItem>
                    <ListItem><External href="https://amzn.to/43mWZ0W">VFR Sectional for Desired Area</External></ListItem>
                    <ListItem>Spray Adhesive</ListItem>
                    <ListItem>Drill and bits</ListItem>
                    <ListItem>Hot glue gun and glue</ListItem>
                    <ListItem>Particle board</ListItem>
                    <ListItem>Wood for framing</ListItem>
                    <ListItem>Saw</ListItem>
                    <ListItem>Solder and various wire</ListItem>
                    <ListItem>(Optional) Pl</ListItem>

                </List>
            </Section>
            <Section title="Hardware" >
                <p>
                    As mentioned before, this project relies on a Raspberry Pi. For my specific implementation, I used a Model 3B with a 16GB SD card running the latest version of Raspbian. <External href="https://amzn.to/3BTP53f">https://amzn.to/3BTP53f</External>
                </p>
                <p>
                    As for LEDs, we elected to use <External href="https://amzn.to/3IGs3kd">WS2811 RGB Addressable LEDs</External>.
                </p>
                <p>
                    To drive the LEDs, we needed a pretty hefty power supply. For this, we elected to use a <External href="https://amzn.to/3Wx17sN">5V 40A 200W power supply</External>. Yes, it may be a little overkill, but this gives us some wiggle room if needed.
                </p>
                <p>
                    Then, we needed various wires, solder, and other hardware to join wires together.
                </p>
            </Section>
            <Section title="Building the Map">
                <Image src="https://storage.googleapis.com/iacthompson-dev-bucket/IMG_9001_31fcd6c121/IMG_9001_31fcd6c121.jpg" alt="Setting the map on plywood"/>
                <Section title="Setting the Map and Drilling" depth=3>
                    <p>
                        We purchased a large VFR sectional map from Amazon. We then glued this map using a spray adhesive to a large piece of particle board that we cut to size. In previous attempts, we used plywood, but this proved difficult when drilling holes for the LEDs, as the wood would constantly blow out and ruin the map.
                    </p>
                    <p>
                        We then selected a drill bit that was the correct size for the LED modules to fit through. Then, my dad would select an airport, drill the hole and call out the airport identifier. I then wrote the identifier next to the whole on the back side of the map.
                    </p>
                    <Image src="https://storage.googleapis.com/iacthompson-dev-bucket/IMG_9053_040a25c65e/IMG_9053_040a25c65e.jpeg" alt="Blowout from the plywood and dull drill bit" />
                </Section>
                <Section title="Mounting LEDs" depth=3>
                    <p>
                        Mounting the LEDs was simple but tedious. I would one by one place the LED into the hole from the backside of the map and hot glue it into place. Because the LED modules are daisy-chainable, I could connect one stip right to the next. Each strip consisted of 50 LEDs. The first strand of the LEDS was connected to the 5V power supply's positive and ground connections, and one pin was connected to the Pi to interface with the raspi-metar program. Every 100 LEDs or so (every two strips) I would connect the LED's positive back to the power supply to account for voltage drop.
                    </p>
                    <Image src="https://storage.googleapis.com/iacthompson-dev-bucket/IMG_9732_52a32c13d6/IMG_9732_52a32c13d6.jpeg" alt="Reverse side of the map with LEDs and wires" />
                    <p>
                        I will touch on this later, but the raspi-metar needs a LED index to correlate with a specific airport. Instead of sitting down and typing out each index and ICAO identifier, I wrote a simple program to assist in assigning LEDs to specific airports. I accessed this over SSH from my personal computer.
                    </p>
                </Section>
                <Section title="Framing the Map" depth=3>
                    <p>
                        Carpentry is not my forte. As such, I delegated this task to my dad. We had most of the spare wood sitting around in the shop, which was a blessing during the wood crisis of 2020. We cut strips of wood a quarter through them horizontally with the table saw. Doing this for each of the four corners of the map allowed us to "slide" the particle board into the frame we had just created. We used this same methodology for the plexiglass sheet we added later. We then secured the four sides of the frame with nails and wood glue after we had painted it black.
                    </p>
                    <Image src="https://storage.googleapis.com/iacthompson-dev-bucket/IMG_9400_749df89dbe/IMG_9400_749df89dbe.jpg" alt="Frame with cuts to hold particle board and plexiglass" />
                    <p>
                        We then attached another piece of wood to the back and added two screws a few feet apart. Here, we took some spare copper wire and twisted it around each of the two screws to create a hanger that could be used to mount the map.
                    </p>
                    <Image src="https://storage.googleapis.com/iacthompson-dev-bucket/IMG_9743_279e9ebe9b/IMG_9743_279e9ebe9b.jpeg" alt="Mounting board on back for added stability" />
                    <p>
                        If none of this makes sense, I apologize. Much of this part of the project was completed by my dad, and I do not have the necessary vocabulary to describe our methodology correctly.
                    </p>
                </Section>
            </Section>
            <Section title="Software" >
                <p>
                    This project is completely written in Python. The repository can be found at <External src="https://www.github.com/nicelion/raspi-metar">https://www.github.com/nicelion/raspi-metar</External>. From there, it can be installed on your machine.
                </p>
                <Section title="raspi-metar.py" depth=3>
                    <p>
                        The program first looks to the raspi-metar.conf files that should be located in the root directory. Here, simple settings can be described to the program that affects how it runs.
                    </p>
                    <p>
                        For instance, you can change the colors that signify the different flight rules. You can configure how often the program retrieves new weather data. You can specify different durations of animations. But, more importantly, this is where you specify which LED index is associated with what airport.
                    </p>
                    <p>
                        In the conf file, you will see a section that looks like:
                    </p>
                    <CodeRenderer lang="javascript" gist="https://gist.githubusercontent.com/nicelion/2c4c6f0ab1bd604336f0ffc283b250bb/raw/ddbea20abdd30b16ad8cb42ecba82b704da66afb/partial.conf" />
                    <p>
                        To assign an LED to an airport, simply:
                    </p>
                    <CodeRenderer gist="https://gist.githubusercontent.com/nicelion/2c4c6f0ab1bd604336f0ffc283b250bb/raw/ddbea20abdd30b16ad8cb42ecba82b704da66afb/full.conf" />
                    <p>
                        raspi-metar will then gather weather data for each defined airport and turn the desired LED to the specific color. By default, this refreshes every 5 minutes.
                    </p>
                    <Section title="setup.py" depth=3>
                        <p>
                            To make setting LED indexes easier, I created a simple program that allows you to easily add airports to your raspi-metar configuration. This program enters into a sequential loop, asking for the desired ICAO identifier for each loop iteration. If for whatever reason, you need to skip an LED, you can hit the "RETURN" key and the program will automatically skip to the next LED index. The program also keeps track of the number of LEDs being utilized (another project variable that needs to be defined in raspi-metar.conf and automatically formats and saves to the proper location and format.
                        </p>
                    </Section>
                </Section>
            </Section>

        </Section>

        <Section title="What's next?" >
            <Image src="https://storage.googleapis.com/iacthompson-dev-bucket/IMG_9750_391919514b/IMG_9750_391919514b.jpeg" alt="raspi-metar hanging on my wall" />
            <p>
                For now, I have the map hanging on the wall in my apartment here in Clemson. I hope to mount it in my future classroom one day and have it be a teaching piece with my students.
            </p>
            <p>
                As for the future of this project, I want to add a web interface for configuration. Additionally, I hope to use JSON for configuration instead of the .conf format.
            </p>
        </Section>
        <Section title="Questions?" >
            <p>
                If you have any questions about this project or this article, please do not hesitate to reach out to me via email or on Twitter at <External href="https://www.twitter.com/thompson__ian">@thompson__ian</External>.
            </p>
            <p>
                Thanks for reading!
            </p>
        </Section>
    </Article>
{/await}
