// JavaScript Document
// itunes search app controller 
//
// var getMediaApp = angular.module('getMediaApp', [])

saveTheRhinoApp.controller('saveTheRhino_controller', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
	
	



	$scope.activeMenu = localStorage.getItem('whatMenu');

	$scope.whatMenu = function(acMen){
		$scope.activeMenu=acMen;
		localStorage.setItem('whatMenu', acMen);
	};


	$scope.thisRhino = localStorage.getItem('whatRhino');
$scope.whatRhino = function(rhinoNum){
	$scope.thisRhino=rhinoNum;
	localStorage.setItem('whatRhino', rhinoNum);
}


$scope.whatImage = function(imgNum){
	$scope.thisImage=imgNum;
}

$scope.viewMenu = true;

	$scope.toggleMenu = function (value) {
		$scope.viewMenu = value;
	};
	

$scope.thisImage = 1;


// $scope.whatCity = function (thisCity) {
// 	localStorage.clear();
// 	localStorage.setItem('whatCity', thisCity);
// }
// $scope.savedCity = localStorage.getItem('whatCity');


$scope.rhino = [
{
	// white Rhino
	type: "White Rhino",
	imgNam:"white",
	synonym: "Square-lipped rhino",
	scientific: "Ceratotherium simum",
	population: "Between 19,666 and 21,085",
	location: "The Southern white rhino can be found mostly in South Africa, with smaller translocated populations found in Kenya, Namibia and Zimbabwe.",
	habitat: "African long and short grass savannah areas.",
	food: "Grasses and ground vegetation.",
	size: "The white rhino is the larger of the two African species. It has a bigger head, due to the muscles that support its neck, as the animal feeds from the ground with its head lowered for much of the day.",
	weight: "1,800 - 2000",
	height: "1.5 - 1.8",
	skin: "The colour of their skin is grey. There is no difference in the skin colour of white and black rhinos, despite their names.",
	hair: "Rhinos have hair only on ears, tail tips and eyelashes.",
	characteristic: "Their outline is characterised by a pronounced hump. The head hangs down, low to the ground; they look up only when alarmed. White rhinos have two horns on the end of their nose. The front horn is usually much larger than the inner horn. Rhinos are known for their distinct 'prehistoric', solid look; an appropriate labelling for one of the oldest land mammal species in the world.",
	sociability: "White rhinos are sedentary, semi-social and territorial. Adult bulls are basically solitary and associate only with females in oestrus. Stable groups of up to six animals can be commonly observed, while larger groups are the result of temporary aggregations, due to availability of food, watering, or resting conditions.",
	femaleTer: "Females' home ranges vary between 6-20 km2, and usually overlap several males' territories. White rhino cows are rarely solitary. They associate typically in pairs, usually a female with her latest calf. A juvenile stays with the mother for around three years. When the mother calves again, it seeks another companion, preferably of similar age and the same sex.",
	maleTer: "Bulls’ territorial ranges are relatively small, averaging between 1-3 km2. The size depends on many factors, including the quality and availability of food and water in a particular area. Each territory is held by a mature male, often with between one and three resident satellite bulls. The territory owner ignores these satellite bulls, as long as they behave submissively. Territorial bulls are far more aggressive to foreign bulls than to resident satellite bulls.",
	scent: "As with other rhino species, white rhino home ranges are scent-posted with dung heaps used by both sexes. The collective dung heaps, or middens, are usually located at territory boundaries and serve as communication and marking points. All animals add their deposits there, but only territorial males scatter the dung with ritualised kicks and spray urine. Marking by urine spraying is mostly displayed along territorial boundaries.",
	sounds: "White rhinos can communicate vocally, using a wide range of sounds from calf squeaking to snarling or wailing of adults.",
	dailyActivity: "White rhinoceroses feed and rest alternately during day and night. In hot, dry weather they routinely rest during the hottest part of the day. Much of their resting time is spent wallowing to keep cool and to get rid of skin parasites. They need water for drinking every 2-4 days. If there is no wallowing place available, they will roll in dry dust.",
	mating: "When the urine test (sensed through scent glands) reveals a cow approaching oestrus, the territorial bull will join the female for up to 20 days. He at first accompanies the female by keeping a fair distance, until she comes into full oestrus and allows him to approach. The courtship lasts up to a day, characterised by the male resting his chin on the female’s rump and attempted mounting. Finally, the cow will stand still, with tail curled, and allow copulation. Mating is remarkably prolonged, lasting from 20 minutes to one hour",
	birth: "White rhino have a gestation period of approximately 16 months. Records of captive breeding in zoos vary between 480 and 548 days’ gestation. Females usually give birth for the first time at the age of 6.5-7 years. The interval between calving is 3-4 years. Pregnant females will leave their crash shortly before the parturition and stay apart for several days afterwards. Calves stand up within one hour, immediately attempting to suckle. Mother and calf become inseparable; the calf usually moves in front of its mother and immediately responds to the mother’s behaviour. The calf begins grazing at two months, weaning occurs at around one year of age. The calf stays with mother for around three years.",
	facts: "White rhinos are surprisingly agile and can run very fast, up to 40 km/h for short periods."
},
{
	// black Rhino
	type: "Black Rhino",
	imgNam:"black",
	synonym: "The hook-lipped rhino",
	scientific: "Diceros Bicornis",
	population: "Between 5,040 and 5,458",
	location: "black rhino occur throughout southern and eastern Africa, including: Kenya, Tanzania, Namibia, South Africa and Zimbabwe",
	habitat: "Black rhino can occur in a range of habitats where there is sufficient resources to support them. When looking for a new residence, rhinos will tend to look for somewhere with a healthy supply of shrubs and woody herb and plant-life occur, and also a place with a nearby water source and mineral licks, that is within at least a 5- 10 mile radius. This spans a wide range of habitats in Africa, including: semi-desert savannah, woodlands, forests and wetlands.",
	food: "Black rhino are browsers (i.e., they eat trees, bushes and shrubs), compared to their cousins, white rhinos: which are grazers. When they bite off woody plant parts they often leave a clean-angled (pruning-shear type) edge (elephant tend to shred the ends of branches like a toothbrush), achieved by the shape of their hooked lip. This neatly bitten, woody material can be clearly seen in the traces of their dung.",
	size: "The black rhino is the smaller of the two African species.",
	weight: "900 - 1350",
	height: "1.5 - 1.8",
	skin: "The colour of their skin is grey. There is no difference in the skin colour of white and black rhinos, despite their names.",
	hair: "Rhinos have hair only on ears, tail tips and eyelashes.",
	characteristic: "Black rhinos are smaller than white rhinos, and have less of a pronounced hump on the back of their necks. They have a smaller head also, as unlike the white rhino, they are browsers, so eat from higher bushes or trees, requiring less muscle strength around their necks than white rhinos. The most distinguishable characteristic between a black and a white rhino is that black rhinos have a hooked lip, as opposed to a flat-based lip, which is related to their eating habits.",
	sociability: "Black rhinos can be either solitary and territorial, or semi-social and less aggressively-territorial, depending on the habitat. Incredible footage from the recent BBC Africa series recorded a group of black rhinos congregating socially at a waterhole, thus disproving myths that black rhinos are strictly solitary.",
	femaleTer: "This tends to range from 5.8km-7.7km. Females tend to remain solitary, and are usually only found in the presence with their latest calf.",
	maleTer: "A typical bulls' territorial range is generally around 3.9km -4.7km Adult male black rhinos tend to live on their own, except when courting females. Among males, there are dominant and subordinate animals. Subordinate rhino within these ranges are often young adults, who must be submissive to the dominant bull. Young bulls and old males who cannot defend themselves as strongly are often killed or injured in aggressive territorial interactions, or become confined to a small area until they die.",
	scent: "This is a crucial method of communication for rhinos, as they have extremely poor eyesight and often live in solitary. Urine spraying is a common form of scent marking, both for males seeking to mark their territory, and also for females to signify to nearby bulls when they are in oestrus. Spraying bursts can reach up to a 3-4 metre range, and can be found along feeding and water tracks also. Dung piles are also a common scent-mark, known as 'middens'. Black rhinos may defecate repeatedly in one spot, or distribute dung piles across their home range. Head rubbing is also a form of scent marking:  black rhinos leave a distinctive scent against a rock or tree by rubbing a scent gland located on their skin to mark a territory.",
	sounds: "Sniffing and snorting are the most common noises made by rhinos, especially when disturbed. Some grunting between social groups has also been observed as a form of communication.",
	dailyActivity: "Black rhinos can be active both day and night, but are least active during the hottest parts of the day (around 10am-3opm), where they seek shade under large rocks, trees or mud wallows.",
	mating: "These are very similar to that of the white rhino; upon sensing that a female is in oestrus, a bull will approach the female, gradually moving closer during the days that she is in oestrus. When the female has accepted his presence, she will cock her tail ready for mating. Copulation usually lasts around half an hour, but pairs may stay together for up to 30 days.",
	birth: "Females will reach sexual maturity and may have their first calf at 3.5- 4 years old. The gestation period of a black rhino is 15-17 months, and when a female is preparing to calve, she will find a solitary, sheltered spot to give birth.",
	facts: "Like all rhino species, they have three toes, and thus three stout nails, which leave impressions on the ground to the front and side of a softer wrinkled sole. The front feet are bigger than the back feet."
},
{
	// one-horned rhino
	type: "One-Horned Rhino",
	imgNam:"horn",
	synonym: "The Indian rhino",
	scientific: "Rhinoceros unicornis",
	population: "Around 3,550",
	location: "The Greater one-horned rhino can be found in India and Nepal, and particularly in the foothills of the Himalayas. In the past, greater one-horned rhinos roamed freely in the floodplains and forests alongside the Brahmaputra, Ganges and Indus River valley.",
	habitat: "Greater one-horned rhinos are semi-aquatic, and are often seen to take up residence in swamps, forests and riversides, and anywhere that is near nutritious mineral licks.",
	food: "They feed on wide variety of plants (up to 183 different species) with a strong seasonal variation: grass, fruits, leaves and branches of trees and shrubs, submerged and floating aquatic plants and agricultural crops. Greater one-horned rhinos eat on average 1% of their body weight daily, and are known to swim for their food.",
	size: "The Greater one-horned rhino are second in size only to the white rhino.",
	weight: "1,800-2,700",
	height: "1.75 - 2.0",
	skin: "They have an ashy grey, hairless skin which develops thick folds, resembling armour plating. Several prominent folds of skin protect the neck. The skin has a maximum thickness of four cm; the subcutaneous fat is 2-5 cm thick and well supplied with blood, which helps thermo-regulation, so that the animal is able to regulate its own body temperature in varying weather conditions. Between the folds, around the stomach, the inner legs and the facial area, the skin is rather soft and thin.",
	hair: "Rhinos have hair only on ears, tail tips and eyelashes.",
	characteristic: "Aside from their unique 'armour-plating' appearance, they have a prehensile upper lip, much like that of the black rhino, which assists in foraging.",
	sociability: "Greater one-horned rhinos are usually solitary, except for females with small calves. Males have loosely defined territories where they live alone, and which they defend aggressively, but may overlap with other territories. The territories change according to food availability in relation to the current season. The females can move in and out of these territories as they like. If food is abundant within an area, it is not unusual to see several animals all grazing close together.",
	femaleTer: "these tend to overlap with other territories, and again, depend on the resources available in a particular area.",
	maleTer: "Male greater one-horned rhinos fight violently for preferred habitual areas. The death of one male in one of these fights is not uncommon (usually due to wounds a few days after the fight).",
	scent: "'middens' (rhino dung heaps) serve as communication points and mark territorial boundaries. Several animals often defecate at the same spot. Such a dung heap can become up to five metres wide and one metre high. After defecating, greater one-horned rhinos scratch their hind feet in the dung. By continuing to walk, they “transport” their own smell around the paths, thus establishing a scent-marked trail that is claimed by the rhino in question.",
	sounds: "In greater one-horned rhinos 12 different communication sounds are known which are frequently used, including snorts, honks and roars.",
	dailyActivity: "Greater one-horned rhinos tend to use the same path, which are marked by a scent gland on the bottom of their feet. Traces of their urine and dung (as distribute on their feet also) act as scent-markers as well.",
	mating: "Females may begin breeding at 4 years old, and males are usually sexually mature at 9 years old. There is no set breeding season for these animals, and a female will leave a gap of around 3-4 years between calves.",
	birth: "At birth, a greater one-horned rhino calf can weigh as much as 58-70kg. The calf with remain with its mother for the first year and a half of its life, before being rejected.",
	facts: "The Mughal emperors of South Asia used the Greater one-horned rhino in fights against elephants as entertainment. The rhinos would often win. Thankfully, this sport is no longer practised or permitted."
},
{
	// Sumatran rhino
	type: "Sumatran Rhino",
	imgNam:"sam",
	synonym: "The hairy rhino",
	scientific: "Dicerorhinus sumatrensis",
	population: "About 100",
	location: "Across parts of Southeast Asia, including: Sumatra, Indonesia, the foothills of Bhutan and northeast India, southern China, Cambodia and Borneo.",
	habitat: " Sumatran rhino lives in dense tropical forest, in both the lowlands and highlands. Sumatran rhinos are very well adapted to life in very dense tropical forests. They are primarily attracted to areas with plentiful food resources (shrubs, fruits, shoots, leaves and roots etc.)",
	food: "the Sumatran rhino is a browser, and its diet consists of a diverse range of tropical forest plant life. They eat the tips of plants growing on the forest floor, browse the leaves from sapling trees that they break to reach the crown and pull climbers from trees. They feed mostly in small patches of juicy secondary vegetation created by landslides, tree falls and along river banks. They are also fond of fruits that have fallen from the forest trees.Sumatran rhinos eat on average 50-60 kg (almost 10% of their body weight) of plant matter per day.",
	size: "Sumatran rhino are by far the smallest species of rhino",
	weight: "500 - 960",
	height: "1.25 - 1.45",
	skin: "Sumatran rhinos have a reddish-brown skin, in the wild variably covered with short bristly hair.",
	hair: "These are the hairiest species of rhino. This can vary from a short, bristly coat, to a shaggy fur for those in captivity because of less abrasion from vegetation. The ears have a fringe of longer hairs, and the tail end has a tuft of thicker hairs.",
	characteristic: "Aside from their smaller size and hairy bodies as distinguishable features of the Sumatran rhinos from other rhino species, they also have unique skin folds. There are two prominent folds in the skin that circle the body behind the front legs and before the hind legs, and lesser folds on the neck and at the base of the legs. The skin is fairly thin: about 10-16 mm, and is soft and pliable. Sumatran rhinos also have a prehensile upper lip, which assists in grasping their food.",
	sociability: "Sumatran rhinos are usually solitary, except for females with small calves, and during a short period of courtship around the time a female is in oestrous.",
	femaleTer: "Females have much smaller ranges (around 10-15 km2), and appear to be quite well spaced but will sometimes overlap with male territories.",
	maleTer: "Males have large territories (can range up to 50 km2), which overlap with other males’ territories. There is no indication that these territories are actually defended by territorial fights as happens in other rhino species, but they are marked along the main trails by urine, faeces, scrapes and twisted saplings.",
	scent: "Sumatran rhino meets a heap of dung, it usually deposits a fresh pile nearby. After defecating, Sumatran rhinos scratch their hind feet in the dung and kick it around in the bushes. This probably serves to mark the feet and surrounding tracks with the scent of the faeces.",
	sounds: "The Sumatran rhino is surprisingly vocal and communicates with many different sounds, mostly whistling or whining noises. Dung heaps (middens) also serve as a communication point, though the large latrines common in territories of the Greater one-horned rhino do not occur, probably because of the much lower natural density of these animals.",
	dailyActivity: "Sumatran rhinos tend to spend their days sitting in pond or mud wallows to keep cool.",
	mating: "Females reach sexual maturity at around 4 years of age, and males are sexually active by around 7 years old.",
	birth: "The birth weight is 40-50 kg. A calf drinks and grows 1- 2kg daily. They start nibbling from the food hanging from the mother’s mouth at an early age to learn which plants are good to eat, but may continue to suckle up to the age of 13-15 months.",
	facts: "The Sumatran rhino has been on earth longer than any other living mammal"
},
{
	// Javan rhino
	type: "Javan rhino",
	imgNam:"java",
	synonym: "The lesser one-horned rhino",
	scientific: "Rhinoceros sondaicus",
	population: "About 67",
	location: "The Javan rhino exists in a single population in Ujung Kulon peninsular, western Java, Indonesia. Here the rhino population has recovered quite well from fewer than 30 individuals in 1967 to between 50 and 60 in 1980. Since then the population has been stagnant or even slowly declining. The 2015 estimate is between 61 and 63 animals.",
	habitat: "Javan rhinos used to live in a variety of tropical landscapes, both lowland and highland, from the mangroves of the Sunderbans in India and Bangladesh, the mountains of southern China, to the sub-montane shrubs on the highest volcanoes of Java. The Javan rhino probably had a wider ecological range than either its larger relative, the greater one-horned rhino, or its compatriot, the Sumatran rhino.",
	food: "The Javan rhino's diet is characterized by high species diversity. Hundreds of food plant species have been recorded, but about 40% of the quantity of food eaten comes from a few preferred and common plant species. The rhinos eat mostly leaves, young shoots and twigs. Most of the plants eaten by rhinos grow in unshaded locations, in vegetation without tall trees, gaps created by fallen trees, and shrubland without trees. These unshaded places have a better average quality of food plants. Javan rhinos rarely feed in vegetation types where the quantity of available food is low.",
	size: "The Javan rhino is a smaller and lighter relative of the greater one-horned rhino. There is not much difference in size between the males and females, there is a possibility that females are slightly bigger.",
	weight: "900 - 2,300",
	height: "1.4 - 1.7",
	skin: "Javan rhinos have grey or grey-brown skin, almost black when wet, with pink colouring in the folds.",
	hair: "Rhinos have hair only on ears, tail tips and eyelashes.",
	characteristic: "Javan rhinos have long pointed upper lip, which assists in grasping their food. Such prehensile lips are found in all browsing rhino species: the African black rhino, and the greater one-horned and Sumatran rhinos. As for the other Asian rhinos, there are two folds in the skin circling the body behind the front legs and before the hind legs, and horizontal folds at the base of the legs. The neck folds are less massive than in the greater one-horned rhino, but two folds continue over the back of the neck, forming a characteristic “saddle” on the neck-shoulder. The skin is covered with a mosaic pattern, giving a scale-like appearance.",
	sociability: "Javan rhinos are usually solitary, except for females with small calves, or during courtship. Occasionally young animals may form pairs or small groups for some time.",
	femaleTer: "The ranges of the females in Ujung Kulon are much smaller (3-14 km2) and overlap each other considerably.",
	maleTer: "Males in Ujung Kulon have larger territories (12-20 km2), only marginally overlapping with other males territories. There is no indication that these territories are actually defended by territorial fights as happens in other rhino species, but they are marked along the main trails by urine, faeces, scrapes and twisted saplings.",
	scent: " Dung heaps serve as a communication point, though the large latrines common in the greater one-horned rhino do not occur, probably because of the much lower natural density of these animals. Unlike Sumatran rhinos, Javan rhinos do not scratch their hind feet in the dung and kick it around in the bushes. They drag a hind foot, sometimes for several metres, to mark the scratch with the secretions of the foot glands. The visual marks made by the Sumatran rhinos in the form of twisted saplings are also unknown in Javan rhinos",
	sounds: "Javan rhinos are not very vocal, much less than Sumatran rhinos, and only few vocalisations have been recorded. As with other rhino species, indirect communication through dung, urine and scrapes scented with the secretions of the foot glands play a more prominent role",
	dailyActivity: "The Javan rhino is possibly the rarest large mammal on earth.",
	mating: "There is a short period of courtship around the time when a female is in oestrus and this is generally the only time adult males and adult female socialise.",
	birth: "The gestation period is estimated to be between 16 and 19 months, however Javan rhinos have never been born in captivity so the exact length of time is unknown",
	facts: "The Javan rhino is more likely to run away from an enemy than attack."
},
];

}]);