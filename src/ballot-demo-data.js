var candidates = "đ¸,đ°,đ,đĩ,đŧ,đĻ,đ´,".split(",").slice(0, 6);
//đŽ,đļ,,đ­
var simpleRandom = (choiceCount, ballotCount, candidates) => {
	const idLength = ballotCount.toString().length;
	return Array(ballotCount)
		.fill()
		.map(
			(_, i) => {
				var votes = Array(choiceCount)
					.fill()
					.reduce(
						(state) => {
							let i = Math.floor(
								Math.random() * state.availableCandidates.length
							);
							let [selectedCandidate] = 
								Math.random() < 0.0
								? ['']
								//a voter may not vote for any one candidate more than once.
								: state.availableCandidates.splice(i, 1);
							state.votes.push(selectedCandidate);
							return state;
						},
						{
							votes: [],
							availableCandidates: candidates.slice(0)
						}
					).votes;

					return {
						id: (i+1).toString().padStart(idLength,"0"),
						votes
					}
			}
		);
}
var emojiAnimals = (choiceCount, ballotCount) => simpleRandom(choiceCount, ballotCount, candidates);

export default {
	emojiAnimals,
	simpleRandom
};

/*

đģđąđ¯đˇ
đ See-No-Evil Monkey
đ Hear-No-Evil Monkey
đ Speak-No-Evil Monkey
đ Monkey
đĻ Gorilla
đĻ§ Orangutan
đļ Dog Face
đ Dog
đĻŽ Guide Dog
đâđĻē Service Dog
đŠ Poodle
đē Wolf
đĻ Fox
đĻ Raccoon
đą Cat Face
đ Cat
đââŦ Black Cat
đĻ Lion
đ¯ Tiger Face
đ Tiger
đ Leopard
đ´ Horse Face
đ Horse
đĻ Unicorn
đĻ Zebra
đĻ Deer
đĻŦ Bison
 Cow Face
đ Ox
đ Water Buffalo
đ Cow
đ Pig
đ Boar
đŊ Pig Nose
đ Ram
đ Ewe
đ Goat
đĒ Camel
đĢ Two-Hump Camel
đĻ Llama
đĻ Giraffe
đ Elephant
đĻŖ Mammoth
đĻ Rhinoceros
đĻ Hippopotamus
đ­ Mouse Face
đ Mouse
đ Rat
đš Hamster

đ Rabbit
đŋī¸ Chipmunk
đĻĢ Beaver
đĻ Hedgehog
đĻ Bat
 Bear
đģââī¸ Polar Bear
đ¨ Koala
đŧ Panda
đĻĨ Sloth
đĻĻ Otter
đĻ¨ Skunk
đĻ Kangaroo
đĻĄ Badger
đž Paw Prints
đĻ Turkey
đ Chicken
đ Rooster
đŖ Hatching Chick
đ¤ Baby Chick
đĨ Front-Facing Baby Chick
đĻ Bird
đ§ Penguin
đī¸ Dove
đĻ Eagle
đĻ Duck
đĻĸ Swan
đĻ Owl
đĻ¤ Dodo
đĒļ Feather
đĻŠ Flamingo
đĻ Peacock
đĻ Parrot

đ Crocodile
đĸ Turtle
đĻ Lizard
đ Snake
đ˛ Dragon Face
đ Dragon
đĻ Sauropod
đĻ T-Rex
đŗ Spouting Whale
đ Whale
đŦ Dolphin
đĻ­ Seal
đ Fish
đ  Tropical Fish
đĄ Blowfish
đĻ Shark
đ Octopus
đ Spiral Shell
đ Snail
đĻ Butterfly
đ Bug
đ Ant
đ Honeybee
đĒ˛ Beetle
đ Lady Beetle
đĻ Cricket
đĒŗ Cockroach
đˇī¸ Spider
đ¸ī¸ Spider Web
đĻ Scorpion
đĻ Mosquito
đĒ° Fly
đĒą Worm
đĻ  Microbe
đ Bouquet
đ¸ Cherry Blossom
đŽ White Flower
đĩī¸ Rosette
đš Rose
đĨ Wilted Flower
đē Hibiscus
đģ Sunflower
đŧ Blossom
đˇ Tulip
đą Seedling
đĒ´ Potted Plant
đ˛ Evergreen Tree
đŗ Deciduous Tree
đ´ Palm Tree
đĩ Cactus
đž Sheaf of Rice
đŋ Herb
âī¸ Shamrock
đ Four Leaf Clover
đ Maple Leaf
đ Fallen Leaf
đ Leaf Fluttering in Wind
đ Mushroom
đ° Chestnut
đĻ Crab
đĻ Lobster
đĻ Shrimp
đĻ Squid
đ Globe Showing Europe-Africa
đ Globe Showing Americas
đ Globe Showing Asia-Australia
đ Globe with Meridians
đĒ¨ Rock
đ New Moon
đ Waxing Crescent Moon
đ First Quarter Moon
đ Waxing Gibbous Moon
đ Full Moon
đ Waning Gibbous Moon
đ Last Quarter Moon
đ Waning Crescent Moon
đ Crescent Moon
đ New Moon Face
đ First Quarter Moon Face
đ Last Quarter Moon Face
âī¸ Sun
đ Full Moon Face
đ Sun with Face
â­ Star
đ Glowing Star
đ  Shooting Star
âī¸ Cloud
â Sun Behind Cloud
âī¸ Cloud with Lightning and Rain
đ¤ī¸ Sun Behind Small Cloud
đĨī¸ Sun Behind Large Cloud
đĻī¸ Sun Behind Rain Cloud
đ§ī¸ Cloud with Rain
đ¨ī¸ Cloud with Snow
đŠī¸ Cloud with Lightning
đĒī¸ Tornado
đĢī¸ Fog
đŦī¸ Wind Face
đ Rainbow
âī¸ Umbrella
â Umbrella with Rain Drops
âĄ High Voltage
âī¸ Snowflake
âī¸ Snowman
â Snowman Without Snow
âī¸ Comet
đĨ Fire
đ§ Droplet
đ Water Wave
đ Christmas Tree
â¨ Sparkles
đ Tanabata Tree
đ Pine Decoration
*/