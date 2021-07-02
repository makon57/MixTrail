'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {trailId: 7, userId: 4, rating: 4, text: "Bring Sunscreen", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 15, userId: 5, rating: 5, text: "I just love Hawaii", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 16, userId: 3, rating: 1, text: "Just blame it on the Tetons", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 7, userId: 7, rating:	4, text: "Took a great nap just after mile 7 that caused me to have this wild dream where I was a Lion in the savannah chasing gazelle. 4/5 only because the sun woke me up.", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 44, userId: 6, rating: 5, text: "Great trail for bikes. Made a whole day out of the full 144 miles", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 34, userId: 8, rating: 1, text: "Didn't see any rivers of elk. 1/5. Lake was pretty though", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 49, userId: 9, rating: 3, text: "I see that they really call this camel's hump because it is just a hill. Wack", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 21, userId: 10, rating: 5, text: "Wonderful hike that my son and I were able to bond over.", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 45, userId: 11, rating: 4, text: "4/5 only because I fell and yelled expletives in front of my step kid", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 51, userId: 11, rating: 2, text: "No devils found within this loop. Beautiful views, but I came here for the devils.", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 38, userId: 3, rating: 5, text: "Ran into 4 different Dawsons, and 3 separate Pitamakans. Very Popular trail for a reason!", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 26, userId: 6, rating: 5, text: "Beautiful Skylines, beautiful sea, long trail.", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 25, userId: 9, rating: 3, text: "Completely saw a dip within the SEA! THE SEA!", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 50, userId: 12, rating: 4, text: "I don't like the color yellow. 4/5", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 7, userId: 7, rating:	5, text: "Been here every year since I lost Jenny, my wife of 60 years, and it is always beautiful.", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 47, userId: 12, rating: 3, text: "Found a lot of aluminium foil around the trail and it made me sad to see", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 46, userId: 9, rating: 5, text: "Amazing scenery and not too bad on the knees!", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 43, userId: 5, rating: 5, text: "Above a kite", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 42, userId: 4, rating: 2, text: "Thought this trail would lead me to Windsor Manor, it did not.", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 41, userId: 3, rating: 5, text: "Found so many crawdads that were away from water, idek. Boil at my house l8r", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 40, userId: 10, rating: 4, text: "Keep Tahoe Clear!", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 39, userId: 8, rating: 4, text: "Looked like the saddle I rode in on. Blew my little mind away", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 37, userId: 8, rating: 5, text: "Water was definitely black", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 36, userId: 5, rating: 5, text: "I was so excited to see Canada from The Good Ole US of A", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 35, userId: 5, rating: 3, text: "Saw some bovine and panther spines", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 33, userId: 4, rating: 4, text: "Jacks male heir took a tumble", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 14, userId: 7, rating: 5, text: "Beautiful when the fog isn't in.", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 1, userId: 3, rating:	3, text: "Found a nugget of gold in them there hills.", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 2, userId: 6, rating:	5, text: "The things that are found on trails make you wonder about the primal nature of nature.", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 3, userId: 3, rating:	2, text: "MY SON WAS CHASED BY A DANG BILLY GOAT. I ASKED THE PARK RANGER TO REFUND MY MONEY AND THEY SAID THEY COULDN'T DO ANYTHING ABOUT IT1! ME OR MY FAMILY WILL NEVER COME BACK TO THIS ESTABLISHMENT EVER AGAIN. THEY SHOULD BE ASHAMED OF THEMSELVES", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 4, userId: 7, rating:	5, text: "Visited in 94' because I just wanted to go for a run.", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 4, userId: 11, rating: 3, text: "I started this trail after seeing a fella run the whole thing in the 90's, quit after the first mile because it wasn't hard enough", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 5, userId: 2, rating:	5, text: "Johnny slapped a bison on the keister in 2011 and got his toyota echo totaled by it. I visit him every year after I do this trail", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 6, userId: 8, rating:	2, text: "Went looking for a lady by the name of Ida. Took me until I got home after finishing the trail that the people at NAPA were messing with me after I asked for Blinker Fluid.", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 8, userId: 4, rating:	5, text: "The cascading colors of the rock are the reason I wanted to make this trip. I was blinded by brilliance", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 9, userId: 5, rating:	5, text: "Above a kite", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 10, userId: 3, rating: 1, text: "On my way to this trail  I saw an elderly man fall in a crosswalk, so I jumped off my bike to help. As I helped him across, the light turned green. I then watched across a 6 lane street as someone stole my bike.", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 11, userId: 2, rating: 1, text: "Just needed to vent. I was at the dentist, I was getting my teeth cleaned. Looking up at his nose, I saw runny snot dripping onto his lip. I tried to slowly move away. He told me 'Stop'! The movement of his lips caused the snot to fall right into my mouth.", createdAt: new Date (), updatedAt: new Date()},
        {trailId: 12, userId: 6, rating: 5, text: "Wonderful", createdAt: new Date (), updatedAt: new Date()},
      ], {});

  },

  down: async (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
