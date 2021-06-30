'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Trails', [
        {name:"Nugget Falls Trail", description: "Nugget Falls Trail is a 2 mile heavily trafficked out and back trail located near Auke Bay, Alaska that features a lake and is good for all skill levels. The trail offers a number of activity options and is best used from April until September.", state: "Alaska", createdAt: new Date(), updatedAt: new Date()},
        {name:"Great Head Trail", description: "Located in Acadia National Park on Mount Desert Island Great Head Trail is 1.3 miles long and takes about an hour and a half to complete. The trail starts at Sand Beach and then goes up a total of 324 feet for spectacular views of an estuary, the outer islands, and the Atlantic Ocean. It crisscross rocky cliffs, gentle meadows, sand and rocky beaches, and dense evergreen forests.", state: "Maine", createdAt: new Date(), updatedAt: new Date()},
        {name:"Billy Goat Trail", description: "The Billy Goat Trail is one of the most well-known hikes in the D.C. metro area. With nearly 5 miles of rock-hopping and spectacular views of the Potomac River along the way, this circuit is designated into three sections that range in difficulty—perfect for all skill levels.", state: "Maryland", createdAt: new Date(), updatedAt: new Date()},
        {name:"Appalachian Trail", description: "For epic hikers, the Appalachian Trail offers a once-in-a-lifetime experience. It's a footpath that traverses the pastoral lands of the Appalachian Mountains and spans across fourteen states—to the south, Springer Mountain in Georgia; to the north, Mount Katahdin in Maine—during its 2,200 mile-long journey. There are, of course, dozens of attractions dotting the route including restaurants, inns, cultural mainstays, and spots that offer 360-degree views.", state: "Maine", createdAt: new Date(), updatedAt: new Date()},
        {name:"Caprock Coulee Nature Trail", description: "Step back in time when bison roamed the plains and Teddy Roosevelt tried his hand at cattle ranching. The Caprock Coulee Nature Trail is a 4.4 mile loop that's located near Watford City, North Dakota, where you may experience chance encounters with bison, horses, and garter snakes along the grasslands. Two popular outlooks include Wind Canyon and Buck Hill.", state: "North Dakota", createdAt: new Date(), updatedAt: new Date()},
        {name:"Mount Ida Trail", description: "The Rocky Mountain National Park's 415 miles of wilderness encompasses lakes, mountains, and spectacular hiking. In fact, the park has more than 300 miles of hiking—and the Mount Ida Trail is one of the park's most popular trails. Along the nearly 10 miles, expect to see various species of birds, reptiles, and perhaps even a bear or two.", state: "Colorado", createdAt: new Date(), updatedAt: new Date()},
        {name:"Angels Landing", description: "Angels Landing is one of the world's most renowned hikes, and even at five miles roundtrip, is an unforgettable short adventure. The landmark itself, known previously as the Temple of Aeolus, is a 1,488-foot tall rock formation in Zion National Park. Beautiful for its sandstone cliffs and freestanding arches, it can be considered a strenuous climb with steep drop-offs and very narrow sections.", state: "Utah", createdAt: new Date(), updatedAt: new Date()},
        {name:"Cascading Canyon Trail", description: "This is one of Grand Teton National Park's most popular hiking spots. The Cascade Canyon Trail starts with a scenic boat ride across Jenny Lake. Disembark and the trail ascends to Hidden Falls, a thundering cascade that drops 200 feet down a series of rocky ledges, and then climbs to Inspiration Point with views of the lake and the Gros Ventre Mountains to the east.", state: "Wyoming", createdAt: new Date(), updatedAt: new Date()},
        {name:"Highline Trail", description: "Glacier National Park's Highline Trail along the continental divide is arguably one of the best day hikes in North America. If you're in search of epic views, bighorn sheep and mountain goats, wildflowers, waterfalls, glaciers, and backcountry chateaus, then make this nearly 12-mile roundtrip hike your destination.", state: "Montana", createdAt: new Date(), updatedAt: new Date()},
        {name:"Canyon to Rim Loop", description: "There are 650 acres to explore at Smith Rock State Park in Oregon. On the three-mile roundtrip along the Canyon to Rim Loop, climbers can ascend the Rope-de-Dope and observe wildlife along the Crooked River—there, bald eagles are known to nest along the rim.", state: "Oregon", createdAt: new Date(), updatedAt: new Date()},
        {name:"Hoh River Trail", description: "Ask any West Coaster—the Hoh Rainforest is the crown jewel of Olympic National Park. The Washington state forest is famous for its evergreen vegetation and mossy trees that grow a lush landscape. And this dreamy topography reaches its peak on the Hoh River Trail, which stretches across 17 miles with views of Mount Olympus and Blue Glacier from the end of the trail.", state: "Washington", createdAt: new Date(), updatedAt: new Date()},
        {name:"Harding Icefield Trail", description: "Get up close and personal with Alaska's famous glaciers by trekking along the Harding Icefield Trail. Starting on the valley floor, this 8.2-mile roundtrip trail winds through cottonwood and alder forests, through heather-filled meadows and ultimately climbs above the treeline to an astonishing view of the Icefield. It's a window to past ice ages—a horizon of ice and snow that stretches as far as the eye can see.", state: "Alaska", createdAt: new Date(), updatedAt: new Date()},
        {name:"South Kaibab Trail", description: "The Grand Canyon may be the most iconic and famous national park in the country. And while the park has a plethora of hiking options, the South Kaibab Trail is dotted with both easy vista point at the canyon's edge—such as the South Rim Trail—and expert-only hikes from rim to rim.", state: "Arizona", createdAt: new Date(), updatedAt: new Date()},
        {name:"Half Dome Trail", description: "This is one of the most popular hikes in Yosemite National Park—and the greater West—for good reason. The Dome itself is a well-known rock formation in the park, named for its distinct shape, and the 14- to 16-mile-long trail offers a nail-biting trek up a steep incline. Visitors, however, are warned that this trail is exclusively for well-prepared and experienced hikers, as the elevation gain of 4,800 feet can feel overwhelming.", state: "California", createdAt: new Date(), updatedAt: new Date()},
        {name:"Kalalau Trail", description: "Jet off to paradise for a 11-mile stroll along Nā Pali Coast of the island of Kauai—you'll experience what's been named one of the beautiful (albeit, dangerous) hikes in the country. On the Kalalau Trail, you'll stroll past lush vegetation, including sweeping trees and moss-covered rocks, while taking in the ambient sounds of leaves rustling and birds chirping.", state: "Hawaii", createdAt: new Date(), updatedAt: new Date()},
        {name:"Teton Crest Trail", description: "For 35-45 miles (depending on your route), this slender singletrack path cuts a dwarfed, serpentine figure as it slices through the heart of one of America’s most stunning mountain ranges, linking together its very best features along the way. Over the course of two to five days, hikers will pass through wildflower-filled meadows, over airy mountain passes, past glacially-fed tarns, and across expansive basins that swallow up hikers and spit them out as tiny, inconsequential specks against the jagged backdrop of the Tetons.", state: "Wyoming", createdAt: new Date(), updatedAt: new Date()},
        {name:"Roan Mountain Highlands", description: "Ask any Southeastern backpacker what the best overnight trek in the region is, and the majority will tell you: the 14-mile traverse of East Tennessee’s Roan Mountain Highlands via the Appalachian Trail is a true standout. Not only is it home to one of the most unique shelters on the entire A.T., but it also offers up some of the best grassy “bald” hiking in America. Think of it almost like the Southeast’s version of ridgeline hiking: You’re above the trees, surrounded by a sea of billowing grasses in the foreground and a sea of bluish-gray mountains sprawling into every direction in the background, with nothing in the way to obstruct these views.", state: "Tennessee", createdAt: new Date(), updatedAt: new Date()},
        {name:"Buckskin Gulch", description: "In a region as labyrinthine and loaded with slot canyons as Southern Utah, it’s difficult to say that Buckskin Gulch is the definitive best slot canyon hike in the region, but it’s certainly the longest and the deepest … and, yeah, probably the best, too. For 13 miles, these narrows snake through a mazy tunnel of towering red rock walls, often no more than a wingspan’s width apart and so tall that they block out sunlight. Some hikers choose to link up with nearby Paria Canyon for an overnight 20-mile trip, but for day hikers, it’s just as rewarding to park at the Wire Pass Trailhead and embark on an out-and-back distance of your choosing. The important things to remember with this hike are largely water-related: First, flash floods are a very real threat, so be sure to check the forecast and plan accordingly. Second, bring more water than you want to carry; the dehydration creeps up quick in the desert.", state: "Utah", createdAt: new Date(), updatedAt: new Date()},
        {name:"Mount Katahdin", description: "The tallest mountain in Maine and the North Star, northern terminus of the famed Appalachian Trail, Mount Katahdin is truly legendary. It juts upward out of the sprawling expanse of lakes, ponds, and deep woods that define Baxter State Park and towers over the land with a commanding presence. The most iconic way to reach the summit is via the vertiginous spine of the 1-mile Knife’s Edge Trail. Along its impossibly narrow and serrated saddle, hikers scramble from Pamola Peak across Chimney Peak to South Peak and finally to the 5,267-foot summit of Katahdin. Once the (likely fog-shrouded) summit photos have been snapped, a roughly 5-mile descent via the Appalachian Trail will take hikers back to the Katahdin Stream Campground trailhead 4,100 feet below.", state: "Maine", createdAt: new Date(), updatedAt: new Date()},
        {name:"Grayson Highlands", description: "In a word, the Grayson Highlands of Virginia are breathtaking. In 19 words, they are an almost make-believe land of high mountain meadows, 5,000-foot peaks, thick rhododendron tunnels, and mystical wild ponies. Like most state parks, there’s a large variety of activities to pick from (camping, bouldering, fishing, and horseback riding), but arguably the best way to get a comprehensive taste of the park’s character in a condensed snapshot is to hike the 8.5-mile out-and-back to the summit of Virginia’s highest point: Mount Rogers. The route starts out from the Massie Gap parking area along the Rhododendron Trail. It links with the Appalachian Trail, traveling through grassy pastures sprinkled with boulder outcroppings, and then eventually connects to the Mount Rogers Spur Trail, which twists through a lush, mossy forest to the summit.", state: "Virginia", createdAt: new Date(), updatedAt: new Date()},
        {name:"Clouds Rest", description: "The 14.2-mile round-trip hike to the Clouds Rest summit offers an exceptional taste of what Yosemite National Park is all about. As you’re standing atop its 9,926-foot perch, high above Yosemite Valley from a less-witnessed vantage point than the famous Half Dome buttress, with a giant sea of granite and coniferous pines and sequoias below, it’s hard to feel anything but utter awe and respect for your surroundings. The trailhead is located in the northeast corner of the park. From here, it’s a 7-mile mostly uphill trek whose elevation chart vaguely resembles a healthy year in the stock market—a few spikes up steep ridges here, a few dips into gullies there, but with a pretty consistent uphill hockey stick growth toward the summit. What the chart won’t illustrate, however, are all the glorious intangibles along the way—babbling snowmelt streams, sequoias so stout you’d need a group of five to fully hug them, ever-expanding panoramas as you ascend, the tranquillity at the summit, and of course, the icy plunge in Tenaya Lake as a refreshing reward once you return to the trailhead.", state: "California", createdAt: new Date(), updatedAt: new Date()},
        {name:"Wheeler Peak", description: "It’s weird to think that the tallest peak in New Mexico would be overshadowed by anything within the immediate vicinity. But with Southern Colorado’s Great Sand Dunes National Park some two hours to the north, and the cultural hotspot of Taos about 45 minutes to the south, that’s kind of what happens to Wheeler Peak. Don’t let this lack of regional recognition fool you, though: The 8.2-mile round-trip hike to this lofty summit in the Sangre de Cristo Mountains is one of the best in New Mexico and a true lesson in uphill slogging. Averaging about 800 vertical feet per mile, this trail takes hikers through lung-expanding evergreen forests and then up lung-crushing climbs above treeline. What you’ll remember other than the impressive summit panorama will be the near endless collection of switchbacks that seem to pinball you back and forth, side to side, and up-and-up through a seemingly infinite sea of scree. Patience—and quad-strength—are both virtues on this hike.", state: "New Mexico", createdAt: new Date(), updatedAt: new Date()},
        {name:"Rae Lakes Loop", description: "The 41.4-mile Rae Lakes Loop showcases some of the most stunning scenery in the High Sierra. Beginning at 5,041 feet in a forest of pines, cedars, and cottonwoods, the trek requires nearly 7,000 of climbing for hikers to visit emerald meadows and cobalt lakes surrounded by mammoth granite towers. While the hike includes the heart-pounding, 2.1-mile ascent of Glen Pass at 11,998 feet, grades are generally moderate and water is plentiful along the way. To avoid several intense climbs, do this hike clockwise. Due to high demand for permits, book as early as possible to March 1, when permits are released, and hike in May to avoid summer crowds.", state: "California", createdAt: new Date(), updatedAt: new Date()},
        {name:"Florida National Scenic Trail", description: "One of the most iconic trails in the Southeast, this 1,300-mile route stretches from the state’s Panhandle all the way to Big Cypress National Preserve at the southern end of the state. But you don’t have to tackle the whole thing to savor some of its highlights, from serene marshland to spectacular wildlife viewing. Take your pick from a number of excellent section hikes: A few recommended routes include the 11-mile stretch from Clearwater Lake to Alexander Springs, one of the trail’s oldest sections, and hikes around Hopkins Prairie, where you’re likely to see sandhill cranes and eagles. Campgrounds, both primitive and traditional, are interspersed along the way, so you can easily turn your day hike into an overnighter.", state: "Florida", createdAt: new Date(), updatedAt: new Date()},
        {name:"The Dipsea Trail", description: "Don’t let this trail’s whimsical name fool you: The approximately 7-mile stretch is a doozy, with nearly 688 steps—in the first mile—and long uphill stretches for nearly 2,000 feet in total elevation gain. Even so, doing the Dipsea is a must for any Bay Area hiker or active-minded visitor, with forests that look like they’re lifted from a fairytale book, flowy single-track through majestic redwoods, and a finish at the Pacific Ocean. The trail is also home to one of the most infamous trail races in the country (and the oldest): The Dipsea Race, which has drawn hardy runners to battle its roots, ruts, and other ankle-twisting obstacles since 1905. Whether you run it or hike it, you must do it.", state: "California", createdAt: new Date(), updatedAt: new Date()},
        {name:"Skyline-to-the-Sea Trail", description: "You can hike its sections separately, but to really experience the essence of this 31-mile trek, one of the best in the San Francisco Bay Area (if not all of California), it’s best to make a true adventure of it, with two overnighters on trailside campgrounds. Built over seven years by a local nonprofit, the trail treats hikers to roaring waterfalls and towering coastal redwoods and passes through two excellent state parks, Castle Rock and Big Basin, before culminating at the Pacific Ocean. Another big plus? With a start in the Santa Cruz Mountains, the trail is all net downhill. No surprise, then, that reservations fill up fast, so plan ahead and be patient—it’s well worth the effort.", state: "California", createdAt: new Date(), updatedAt: new Date()},
        {name:"Ammonoosuc Ravine Trail", description: "The iconic 6,288-foot Mount Washington in the White Mountains is a challenging and worthy summit, especially in the winter. While many are drawn to its eastern slopes to ski Tuckeman’s Ravine, a select few hike the Ammonoosuc Ravine Trail on the western side to the mountain’s peak. This demanding, approximately eight-mile round-trip route challenges hikers with steep and exposed sections, icy scrambles, and the threat of erratic weather and strong winds. But the stunning views, frozen waterfalls, and exhilaration of standing atop New England’s highest peak make the cold toes, burning lungs, and treacherous trek worth it.", state: "New Hampshire", createdAt: new Date(), updatedAt: new Date()},
        {name:"Greenstone Ridge Trail", description: "Located on an island in Lake Superior that’s 45 miles long and just nine miles wide, this national park is so remote you’ll have to take a ferry or seaplane to access it. But once you do, you’ll have your pick of 165 miles of hiking trails that cover spectacular terrain, including the ruins of an old copper mine and a lighthouse that dates back to the late 1800s.", state: "Minnesota", createdAt: new Date(), updatedAt: new Date()},
        {name:"Minong Trail", description: "Many hikers flock to the Greenstone Ridge Trail, which runs along the spine of the island, but the Minong Trail is a 52-mile trek that’s slightly harder, but with far fewer people and just as stunning views, wildflowers, and up-and-close wildlife viewing. Choose from several out-and-back routes, or make it a point-to-point overnight trip (there are 36 first-come, first-serve campgrounds) and you just might catch a glimpse of the Northern Lights.", state: "Minnesota", createdAt: new Date(), updatedAt: new Date()},
        {name:"Flattop Mountain Trail", description: "Flattop Mountain Trail is a 3.3 mile heavily trafficked loop trail located near Anchorage, Alaska that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, running, nature trips, and bird watching and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.", state: "Alaska", createdAt: new Date(), updatedAt: new Date()},
        {name:"Portage Pass Trail", description: "Portage Pass Trail is a 4.2 mile heavily trafficked out and back trail located near Whittier, Alaska that features a lake and is rated as moderate. The trail offers a number of activity options and is best used from March until October. Dogs are also able to use this trail but must be kept on leash.", state: "Alaska", createdAt: new Date(), updatedAt: new Date()},
        {name:"John Muir Trail", description: "The Pacific Crest Trail Association calls the John Muir Trail the “land of 13,000-foot and 14,000-foot peaks, of lakes in the thousands, and of canyons and granite cliffs.” It runs for 211 miles through the Range of Light from Yosemite to the summit of Mount Whitney, the tallest peak in the contiguous United States. Most people hike the trail from north to south over the course of a week or more between July and September.", state: "California", createdAt: new Date(), updatedAt: new Date()},
        {name:"Jackson Falls Trail", description: "The 3.7-mile Jackson Falls Trail, which features numerous scenic overlooks and terminates at a spectacular waterfall. Bring your climbing gear—the 70-foot sandstone walls offer the most climbing routes in the state. —Samantha Yadron, editorial production fellow.", state: "Illinois", createdAt: new Date(), updatedAt: new Date()},
        {name:"Elk River Hiking Trail", description: "The Elk River Hiking Trail will make you swear you’re not in Kansas anymore. This 15-mile point-to-point trail weaves through evocative rock sculptures and pinched corridors with 30-foot-high walls. Trek eastward for sweeping vistas over Elk City Lake as your grand finale. The trail hugs the bluffs of this 4,000-acre reservoir, which looks big enough to be one of the Great Lakes. In spring, the shoreline turns pale purple with blooming redbud trees.", state: "Kansas", createdAt: new Date(), updatedAt: new Date()},
        {name:"The Backbone Trail", description: "It’s hard to get high in Louisiana, where the mean elevation is just 100 feet and New Orleans actually sits below sea level. But the Backbone Trail though the Kisatchie Hills Wilderness offers escape from the swamp. This 7.7-mile path scales sandstone hills topped with Dr. Suessian longleaf pines. Savor on-high views from 300-foot outcrops and, in spring, blooming azaleas. Keep an eye out for armadillos.", state: "Louisiana", createdAt: new Date(), updatedAt: new Date()},
        {name:"Border Route Trail", description: "The 65-mile Border Route Trail follows (surprise) the border between the United States and Canada and allows you to experience the tranquility of the Boundary Waters Canoe Area Wilderness on foot. It’s a place of breathtaking cliffs, almost impassably dense trees, and serene, untouched lakes where you can feel the elves and faeries watching you through the mossy gaps in the trees.", state: "Minnesota", createdAt: new Date(), updatedAt: new Date()},
        {name:"Black Creek Trail", description: "Soft white beaches and sandbars make Black Creek, a designated National Wild and Scenic River, feel more like the Caribbean than Mississippi. The Black Creek Trail links those paradisial swimming holes with 41 miles of waterside hiking. Ten miles of the trail traverse the Black Creek Wilderness and feature pine-topped bluffs and dogwood trees that glow with white petals in spring.", state: "Mississippi", createdAt: new Date(), updatedAt: new Date()},
        {name:"Dawson-Pitamakan Loop", description: "As great as Montana is, Glacier National Park takes it to a whole different level. One of the very best hikes in the park is the 17-mile Dawson-Pitamakan loop, which circles Rising Wolf Mountain. Alpine lakes and jagged peaks make this truly one of the last best places.", state: "Montana", createdAt: new Date(), updatedAt: new Date()},
        {name:"Saddle Rock Trail", description: "Hills in corn land? You’ll find them on the 1.6-mile (one way) Saddle Rock Trail, which gains a lung-wringing 500 vertical feet on its climb up a chiseled butte in Scotts Bluff National Monument. The route tunnels through a sandstone fin before emerging atop a wind-raked crag with views over rolling prairie peppered with more buttes.", state: "Nebraska", createdAt: new Date(), updatedAt: new Date()},
        {name:"The Tahoe Rim Trail", description: "The 165-mile Tahoe Rim Trail is one of the most beautiful circuits you’ll ever do. “The scenery changes around every corner—from towering granite walls to lupine-covered hills—and because it’s circular, you can always see where you’ve been and what’s to come,” says Nancy Greenhalgh, former president of the Tahoe Rim Trail Association. The difficult 21-mile section from Mount Rose to Brockway is like a highlight reel of the trail. The views of Tahoe from the narrow trail (and on a steep side hill, to boot) are incredible. If you do it in summer, the aroma of pine and sap warming in the high-alpine sunshine just enhance your hike.", state: "Nevada", createdAt: new Date(), updatedAt: new Date()},
        {name:"Crawford Path", description: "Most people summit Mount Washington by heading straight up Tuckerman’s Ravine, which means the trail is like a highway in summer. Avoid the crowds by taking the Crawford Path, which starts in Crawford Notch and spends five of the eight total miles on a ridge above tree line. You’ll pass two alpine huts, operated by the Appalachian Mountain Club, where you can refill your water bottles and stop to rest.", state: "New Hampshire", createdAt: new Date(), updatedAt: new Date()},
        {name:"Windsor Trail", description: "This big and beautiful peak is only 30 minutes from Santa Fe. It’s easy to extend the hike if you’re feeling ambitious. And, the trail has plenty of places to camp out, as well as scenic side trips galore. The highest mountain in the southern Sangre de Cristo range, Santa Fe Baldy towers above the City of Santa Fe, NM. It’s not a difficult trek to the top, but the seven-mile approach makes it an undertaking. It is nonetheless one of the best mountains to climb in the US. The trailhead is 30 minutes from downtown Santa Fe. Head north on the Windsor Trail. It flows through rustling aspens and whispering pines.", state: "New Mexico", createdAt: new Date(), updatedAt: new Date()},
        {name:"Highpoint Trail", description: "South Dakota’s highest point, Black Elk Peak gazes out over granite cliffs and ponderosa pines. Oglala Lakota medicine man Black Elk (Heȟáka Sápa) had his first vision at age 9 on this peak. In 2016, some 150 years later, the peak, which is South Dakota’s highest point, was renamed to honor Black Elk and in recognition of the significance of the mountain to Native Americans. The summit gazes out over granite cliffs and ponderosa pines that Black Elk (a combatant in the Battle of Little Bighorn, survivor of the Wounded Knee Massacre and one-time member of Buffalo Bill's Wild West Show) described as 'the whole hoop of the world'." , state: "South Dakota", createdAt: new Date(), updatedAt: new Date()},
        {name:"Maah Daah Hey Trail", description: "The 144-mile Maah Daah Hey—which roughly translates from the native Mandan language to “an area that will be around for a long time”—traverses the wild and rugged badlands of western North Dakota. Keep an eye out for bison, wild horses, and bighorn sheep as you make your way across broad plateaus and prairies.", state: "North Dakota", createdAt: new Date(), updatedAt: new Date()},
        {name:"Ouachita Trail", description: "You’ll need three to four weeks to thru-hike the 192-mile Ouachita Trail, bridging Oklahoma and Arkansas. Weekenders can nab the choicest 20-mile segment by starting at Talimena State Park, the trail’s western terminus, and hiking east over steep, rocky terrain that ranks as the trail’s toughest but rewards hikers with expansive views. Spur paths to the Potato Hills, Panorama, and Holson Valley vistas overlook mountains that melt into the horizon.", state: "Oklahoma", createdAt: new Date(), updatedAt: new Date()},
        {name:"Tumbling Waters Trail", description: "Panoramas across the bucolic Delaware River Valley are reason enough to hike the Tumbling Waters Trail, a three-mile loop in the Delaware Water Gap National Recreation Area, but the trail also passes a delightful two-tiered waterfall surrounded by black birches. From the Pocono Environmental Education Center, hike clockwise to explore groves of red cedar, glacier-scarred bedrock, IMAX-sized views of New Jersey’s verdant Kittatinny Ridge (a 400-mile arm of the Appalachian Mountains), and wetlands filled with singing frogs.", state: "Pennsylvania", createdAt: new Date(), updatedAt: new Date()},
        {name:"Alum Cave Trail", description: "The 11-mile round-trip Alum Cave Trail is as good a pick as any. It leads you through old-growth hardwood forest, on log bridges over gushing mountain streams, and up stairways cut into the living rock to the massive rock overhangs for which the trail is named. Continue past the caves and be rewarded with one of the best views in the park from atop the 6,594-foot Mount LeConte and a stay at the rustic LeConte Lodge, the highest guesthouse in the eastern United States.", state: "Tennessee", createdAt: new Date(), updatedAt: new Date()},
        {name:"McKittrick Ridge", description: "In any season, McKittrick Ridge, in Guadalupe Mountains National Park, dazzles hikers with its vast panoramas of limestone peaks and feathery pines. But in October, the views pulsate red and gold as McKittrick Canyon’s maple, walnut, and ash trees ignite with fall color. From Dog Canyon, on the park’s north side, hike 7.5 miles east to the ridge. Camp at 7,700 feet for sunset and sunrise views over the ribbon of amber.", state: "Texas", createdAt: new Date(), updatedAt: new Date()},
        {name:"Camel's Hump", description: "Most people who want to knock off one big hike in the Green Mountains tend to head for the summit of Mount Mansfield, the tallest peak in Vermont. But for fewer crowds and equally stunning views, hike to the top of Camel’s Hump. At about six miles long, this out-and-back trail climbs over 2,000 feet and past the wreckage of a plane crash before you hit the summit. It’s a great day hike that usually takes a few hours to complete.", state: "Vermont", createdAt: new Date(), updatedAt: new Date()},
        {name:"Yellow Aster Butte", description: "Unlike Mount Baker or Shuksan, this northern 7.5-mile round-trip hike requires no mountaineering equipment or experience—though it does offer a great view of both peaks. You’ll gain 2,500 feet as you traverse south-facing slopes before you top out at 6,150 feet. Turn around for a view into Canada.", state: "Washington", createdAt: new Date(), updatedAt: new Date()},
        {name:"Devil's Lake Loop", description: "It’s not the length that makes this quick five-mile loop the best in the Badger State, but the views, which range from waterside—looking over Devil’s Lake—to the thick forest of the East Bluff Woods. On the lake’s northwest side sit 100-foot quartzite cliffs that are popular with climbers. Devil’s Lake State Park, the third oldest in Wisconsin, is home to 100 bird species and 800 types of plants. An elevation gain of 1,000 feet—a lot of vert for the rolling hills of Wisconsin—is enough to earn a plate of sliders and a flight of whiskey at Driftless Glen Distillery, three miles from the trailhead.", state: "Wisconsin", createdAt: new Date(), updatedAt: new Date()}

      ], {});

  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Trails', null, {});

  }
};
