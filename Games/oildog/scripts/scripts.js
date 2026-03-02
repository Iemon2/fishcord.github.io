let time = 0;
let money = 15; // money variable. starting money is 15

// !! THIS IS HOW YOU STORE DATA SO IT ISNT LOST ON RELOAD !!
if (typeof(Storage) == "undefined") { 
	localStorage.setItem("sMoney", 0)  // this one saves your money
	}
	
	if (typeof(Storage) == "undefined") { 
	localStorage.setItem("oilUpgrade1", false)  // this one saves your money
	}
	if (typeof(Storage) == "undefined") { 
	localStorage.setItem("oilUpgrade2", false)  // this one saves your money
	}
	
if (typeof(Storage) == "undefined") { 
	localStorage.setItem("wineUnlocked", false)  // this one saves your money
	}
	if (typeof(Storage) == "undefined") { 
	localStorage.setItem("wineUpgrade1", false)  // this one saves your money
	}
	
if (typeof(Storage) == "undefined") { 
	localStorage.setItem("carbonUnlocked", false)  // this one saves your money
	}
	if (typeof(Storage) == "undefined") { 
	localStorage.setItem("carbonUpgrade1", false)  // this one saves your money
	}
	
if (typeof(Storage) == "undefined") { 
	localStorage.setItem("dirkUnlocked", false)  // this one saves your money
	}
	if (typeof(Storage) == "undefined") { 
	localStorage.setItem("dirkUpgrade1", false)  // this one saves your money
	}
	
if (typeof(Storage) == "undefined") { 
	localStorage.setItem("equiusUnlocked", false)  // this one saves your money
	}
	if (typeof(Storage) == "undefined") { 
	localStorage.setItem("equiusUpgrade1", false)  // this one saves your money
	}
	
if (typeof(Storage) == "undefined") { 
	localStorage.setItem("dogDogUnlocked", false)  // this one saves your money
	}
	if (typeof(Storage) == "undefined") { 
	localStorage.setItem("dogDogUpgrade1", false)  // this one saves your money
	}


function nothing(){}

function loadSaveData () { // THIS IS SUPPOSED TO LOAD YOUR UPGRADES AND IS CALLED WHEN THE GAME LOADS
	if (localStorage.sMoney) {
	money = localStorage.sMoney;}
	if (localStorage.oilUpgrade1) {
		console.log("this ran")
		upgradeOil(0, document.getElementById('oilUpgrade1'), 1)}
	if (localStorage.oilUpgrade2) {
		console.log("this ran")
		let waitOil2 = setTimeout(nothing(), 100);
		upgradeOil(0, document.getElementById('oilUpgrade2'), 2)}
		sell1 = 100;
		sell2 = 100;
		sell3 = 100;
		sell4 = 100;
		sell5 = 100;
	if (localStorage.wineUnlocked) {    //winedogs
		unlock(document.getElementById('slot6'), 0, document.getElementById('wineUnlock'), document.getElementById('wineUpgrade1'))
		if (localStorage.wineUpgrade1){
			upgradeWine(0, document.getElementById('wineUpgrade1'))}
			}
		
	if (localStorage.carbonUnlocked) {  //carbon
		unlock(document.getElementById('slot7'), 0, document.getElementById('carbonUnlock'), document.getElementById('carbonUpgrade1'))
		if (localStorage.carbonUpgrade1){
			upgradeCarbon(0, document.getElementById('carbonUpgrade1'))}
			}
		
	if (localStorage.dirkUnlocked) { // DIRK RIDER
		unlock(document.getElementById('slot8'), 0, document.getElementById('dirkUnlock'), document.getElementById('dirkUpgrade1'))
		if (localStorage.dirkUpgrade1){
			upgradeDirk(0, document.getElementById('dirkUpgrade1'))}
			}
		
	if (localStorage.equiusUnlocked) {  // equueueuq
		unlock(document.getElementById('slot9'), 0, document.getElementById('equiusUnlock'), document.getElementById('equiusUpgrade1'))
		if (localStorage.equiusUpgrade1){
			upgradeEquius(0, document.getElementById('equiusUpgrade1'))}}
		
	console.log(localStorage.oilUpgrade1)
	console.log(localStorage.oilUpgrade2)
	}




function incrementCounter() {
  time++;
  console.log("Counter:", time);
  upDog();
}



// TODO: save what you have unlocked and add an onload command to unlock everything you have unlocked

const intervalID = setInterval(incrementCounter, 1000);


	
	
	let placeholderDog = 0;  // this dog is the "no dog :(" dog breed. not an actual dog
	let dog = 1;  			//standard vanilla dog
	let deadDog = 2; 		// dog during the one second where its a corpse. maybe dont make an actual breed
	let boneDog = 3;		// bone remains of dog
	let oilDog = 4;			// what do you think.
	let wineDog = 5;		//slowly grows in sell value each second
	let carbonDog = 6;		// slowly compresses until it becomes diamond
	let diamondDog = 7;		// final state of carbondog, sells for high value
	let dirkDog = 8;		// slowly decreases in fakeness
	let equiusDog = 9;		// increases in strength as it lives, generating passive income
	let equiusDying = 10;	// the one second before equius dies
	let equiusDead = 11;	// stops generating passive income, sell for 10 dollars
	let dogDog = 12;		// just inreases in dogginess. may or may not do anything
	let nanDog = 999;		// when a dog is over 1024 true seconds of age, they become a NaNdog.

// use equivalent of age for dogs with different variables
let age1 = 0;   // age variables of the dogs assigned in functions later
let age2 = 0;
let age3 = 0;
let age4 = 0;
let age5 = 0;	
// winedog has no need for the age variable
let age7 = 0;		
let fakeness8 = 1;	// for dirkdog
	let dirkHitMax = false;
let strength9 = 0;	// for equiusdog; likely slowly grows to 100 or 1000 until killed
	let equiusLife = 0; 
let dogginess10 = 0;
// dogdog uses dogginess instead

let iterations1 = 0; // duration the dog has been alive for
let iterations2 = 0;	
let iterations3 = 0;
let iterations4 = 0;
let iterations5 = 0;
let iterations6 = 0;
let iterations7 = 0;
let iterations8 = 0;
let iterations9 = 0;
let iterations10 = 0;
  // see the indented variables up above? those are the breed values. these variables here are set when its respective dog changes breed
  // NEVERMIND BREEDS ARE STORED IN THEIR OWN TAG NOW :)))
  
  
  // declares cost variables. these which change depending on what breed the dog currently is
  // MAYBE have a penalty for selling thats like. you get one third. round down using Math.trunc() ( or .floor if that doesnt work as well)

let cost1 = 10;
let cost2 = 10;
let cost3 = 10;
let cost4 = 10;
let cost5 = 10;
let cost6 = 30;
let cost7 = 200;
let cost8 = 300;
let cost9 = 300;
let cost10 = 1000;

let sell1 = 0;
let sell2 = 0;
let sell3 = 0;
let sell4 = 0;
let sell5 = 0;
let oilMult = 1; // this is so our sell functions can work with upgrades

let sell6 = 0;
let wineMult = 1;
let wineCap = 700;

let sell7 = 5000;
let carbonMult = 1;

let sell8 = 0;
let dirkMult = 1;

let sell9 = 0;
let lifespanMin = 100;
let lifespanMult = 300;
let equiusRevenueMin = 8;
let equiusRevenueRand = 8;


function upDog() {

	// hoo boy. this loads all the variables and names and ids and stuff into slotManager to SUPPOSEDLY make things much easier. maybe it has?
	// im not smart enough to tell yet :)
	slotManager(document.getElementById('slot1'), document.getElementById('dogSprite1'), age1, document.getElementById('age1'), iterations1, document.getElementById('iterations1'), document.getElementById('breed1'), sell1) // 1-5 are oildogs
	slotManager(document.getElementById('slot2'), document.getElementById('dogSprite2'), age2, document.getElementById('age2'), iterations2, document.getElementById('iterations2'), document.getElementById('breed2'), sell2)
	slotManager(document.getElementById('slot3'), document.getElementById('dogSprite3'), age3, document.getElementById('age3'), iterations3, document.getElementById('iterations3'), document.getElementById('breed3'), sell3)
	slotManager(document.getElementById('slot4'), document.getElementById('dogSprite4'), age4, document.getElementById('age4'), iterations4, document.getElementById('iterations4'), document.getElementById('breed4'), sell4)
	slotManager(document.getElementById('slot5'), document.getElementById('dogSprite5'), age5, document.getElementById('age5'), iterations5, document.getElementById('iterations5'), document.getElementById('breed5'), sell5)
	slotManager(document.getElementById('slot6'), document.getElementById('dogSprite6'), 0, document.getElementById('age6'), iterations6, document.getElementById('iterations6'), document.getElementById('breed6'), sell6)		// this is winedog
	slotManager(document.getElementById('slot7'), document.getElementById('dogSprite7'), age7, document.getElementById('age7'), iterations7, document.getElementById('iterations7'), document.getElementById('breed7'), sell7)	// carbondog
	slotManager(document.getElementById('slot8'), document.getElementById('dogSprite8'), fakeness8, document.getElementById('age8'), iterations8, document.getElementById('iterations8'), document.getElementById('breed8'), sell8)  // dirkdog
	slotManager(document.getElementById('slot9'), document.getElementById('dogSprite9'), strength9, document.getElementById('age9'), iterations9, document.getElementById('iterations9'), document.getElementById('breed9'), sell9)	// equiusdog
	slotManager(document.getElementById('slot10'), document.getElementById('dogSprite10'), dogginess10, document.getElementById('age10'), iterations10, document.getElementById('iterations10'), document.getElementById('breed10'), 0)
	
	// update saved variables
	localStorage.sMoney = money;
	
	
	/*
	  
	 
	 
			console.log(document.getElementById('slot5').id);
			
			take a look at the above thing.
			it returns a string that says "slot5".
			using this, you can EASILY reference whatever you need to without making it super complicated.
			simple as.
			
	
	
	*/
	
	// these are simple. once the iteration is set to 1 after a dog purchase, these blocks increase those variables by one.
	if (iterations1 >= 1){ 
		document.getElementById('iterations1').innerHTML = "Born " + (iterations1) + " seconds ago";
		iterations1++;
	}
	if (iterations2 >= 1){
		document.getElementById('iterations2').innerHTML = "Born " + (iterations2) + " seconds ago";
		iterations2++;
	}
	if (iterations3 >= 1){
		document.getElementById('iterations3').innerHTML = "Born " + (iterations3) + " seconds ago";
		iterations3++;
	}
	if (iterations4 >= 1){
		document.getElementById('iterations4').innerHTML = "Born " + (iterations4) + " seconds ago";
		iterations4++;
	}
	if (iterations5 >= 1){
		document.getElementById('iterations5').innerHTML = "Born " + (iterations5) + " seconds ago";
		iterations5++;
	}
	if (iterations6 >= 1){
		document.getElementById('iterations6').innerHTML = "Born " + (iterations6) + " seconds ago";
		iterations6++;
	}
	if (iterations7 >= 1){
		document.getElementById('iterations7').innerHTML = "Born " + (iterations7) + " seconds ago";
		iterations7++;
	}
	if (iterations8 >= 1){
		document.getElementById('iterations8').innerHTML = "Born " + (iterations8) + " seconds ago";
		iterations8++;
	}
	if (iterations9 >= 1){
		document.getElementById('iterations9').innerHTML = "Born " + (iterations9) + " seconds ago";
		iterations9++;
	}


	
	// these here double the age every second. if its zero, it keeps being zero. simple as.
	// these come after everything updates like the iterations so that it can look nice on the output
	// TODO: figure out how this will work with non-oil dogs who may age differently (wine dogs, radiation foxes, etc.)
	// ^^ some may need new functions entirely. also will need a way to switch between em
	// IDEA: store breed ids, aging functions/multipliers, and other things in a list so its easier to switch out
	// OR just make new rows for different unlocked dog types. your call
	age1 *= 2;
	age2 *= 2;
	age3 *= 2;
	age4 *= 2;
	age5 *= 2;
	// no need for winedog age
	age7 *= 1.1;
	
	if (iterations8 > 0 && fakeness8 > 0 && dirkHitMax == false) {
		fakeness8 -= 0.002}
	else if (iterations8 > 0 && dirkHitMax == true && fakeness8 < 1) {
		fakeness8 += 0.002}
	else if (dirkHitMax == true && fakeness8 == 1) {
		dog8Sell()}
	
	if (iterations10 >= 1) {
		dogginess10 += 2;
		iterations10 += 1;
		}
	
	//console.log(iterations1)
	//console.log(iterations2)
	//console.log(iterations3)
	//console.log(iterations4)
	//console.log(iterations5)
	
	// THIS IS HERE so the sell buttons will actually tell you how much your dog is worth before you sell them
	document.getElementById('sell1').innerHTML = "Sell dog ($" + sell1 + ")";
	document.getElementById('sell2').innerHTML = "Sell dog ($" + sell2 + ")";
	document.getElementById('sell3').innerHTML = "Sell dog ($" + sell3 + ")";
	document.getElementById('sell4').innerHTML = "Sell dog ($" + sell4 + ")";
	document.getElementById('sell5').innerHTML = "Sell dog ($" + sell5 + ")";
	document.getElementById('sell6').innerHTML = "Sell dog ($" + Math.trunc(sell6) + ")";
	document.getElementById('sell7').innerHTML = "Sell dog ($" + Math.trunc(sell7) + ")";
	document.getElementById('sell8').innerHTML = "Sell dog ($" + Math.trunc(sell8) + ")";
	document.getElementById('sell9').innerHTML = "Sell dog ($" + Math.trunc(sell9) + ")";
	
	
		if (money <= 10 && document.getElementById('breed1').innerHTML == '0'){
	  document.getElementById('pityDog').innerHTML = "...Fine. You can have a free oil dog, on me. ($0)"}
	else {
	  document.getElementById('pityDog').innerHTML = "Buy Oildog ($10)"}
	
	document.getElementById('wallet').innerHTML = ("Money: $" + Math.trunc(money)) // this updates the money <p> tag to show your money
	}

// these buy dogs! checks to see if you have 15 or more, THEN if your age is less than one so that you arent overwriting a preexisting dog
// TODO: once more purchasable dogs are added, maybe change how this works?? unless wine dogs are their own thing...
// ALSO TODO: FIGURE OUT HOW NON-OIL DOGS WORK
function dog1Buy() { // buys dog 1. 
	if (money >= cost1) {
		if (age1 < 1) {
		money -= cost1;
		age1 = 1;
		iterations1 = 1;
		document.getElementById('breed1').innerHTML = 1;
	}
	}
	else {
	  if (age1 < 1) {
	  age1 = 1;
		iterations1 = 1;
		document.getElementById('breed1').innerHTML = 1;}}
}
function dog1Sell() {
	// TODO: implement this
	//IDEA: make each dogbreed a list of (id, value) so its easier to use in this function
	//^^ would require adjusting dog buying as well but that was inevitable
	if (document.getElementById('breed1').innerHTML != 0) {
			if (document.getElementById('breed1').innerHTML == 4) {
				money += (sell1 * oilMult);
				}
			else { money += sell1;
				}
		age1 = 0;
		iterations1 = 0;
	}
} // TODO: THE BUY AND SELL FUNCTIONS CAN PROLLY BE REDUCED TO ONE FUNCTION EACH!!! DO THIS LATER

function dog2Buy() {
	if (money >= cost2) {
		if (age2 < 1) {
		money -= cost2;
		age2 = 1;
		iterations2 = 1;
		document.getElementById('breed2').innerHTML = 1;
	}
	}
}
function dog2Sell() {
	if (document.getElementById('breed2').innerHTML != 0) {
			if (document.getElementById('breed2').innerHTML == 4) {
				money += (sell2 * oilMult);
				}
			else { money += sell2;
				}
		age2 = 0;
		iterations2 = 0;
	}
}

function dog3Buy() {
	if (money >= cost3) {
		if (age3 < 1) {
		money -= cost3;
		age3 = 1;
		iterations3 = 1;
		document.getElementById('breed3').innerHTML = 1;
	}
	}
}
function dog3Sell() {
	if (document.getElementById('breed3').innerHTML != 0) {
			if (document.getElementById('breed3').innerHTML == 4) {
				money += (sell3 * oilMult);
				}
			else { money += sell3;
				}
		age3 = 0;
		iterations3 = 0;
	}
}

function dog4Buy() {
	if (money >= cost4) {
		if (age4 < 1) {
		money -= cost4;
		age4 = 1;
		iterations4 = 1;
		document.getElementById('breed4').innerHTML = 1;
	}
	}
}
function dog4Sell() {
	if (document.getElementById('breed4').innerHTML != 0) {
			if (document.getElementById('breed4').innerHTML == 4) {
				money += (sell4 * oilMult);
				}
			else { money += sell4;
				}
		age4 = 0;
		iterations4 = 0;
	}
}

function dog5Buy() {
	if (money >= cost5) {
		if (age5 < 1) {
		money -= cost5;
		age5 = 1;
		iterations5 = 1;
		document.getElementById('breed5').innerHTML = 1;
	}
	}
}
function dog5Sell() {
	if (document.getElementById('breed5').innerHTML != 0) {
			if (document.getElementById('breed5').innerHTML == 4) {
				money += (sell5 * oilMult);
				}
			else { money += sell5;
				}
		age5 = 0;
		iterations5 = 0;
	}
}

function dog6Buy() {
	if (money >= cost6) {
		if (iterations6 < 1) {
			money -= cost6;
			sell6 = 1;
			iterations6 = 1;
			document.getElementById('breed6').innerHTML = 5;
	}
	}
}
function dog6Sell() {
	if (document.getElementById('breed6').innerHTML != 0) {
		money += (sell6);
		sell6 = 0;
		iterations6 = 0;
	}
}

function dog7Buy() {
	if (money >= cost7) {
		if (age7 < 1) {
		money -= cost7;
		age7 = 1;
		iterations7 = 1;
		document.getElementById('breed7').innerHTML = 6;
	}
	}
}
function dog7Sell() {
	if (document.getElementById('breed7').innerHTML != 0) {
			if (document.getElementById('breed7').innerHTML == 7) {
				money += sell7; //formerly oil sell value multiplier; maybe add later?
				}
			else { money += sell7;
				}
		age7 = 0;
		iterations7 = 0;
	}
}

function dog8Buy() {
	if (money >= cost8) {
		if (fakeness8 == 1) {
		money -= cost8;
		fakeness8 = 1;
		iterations8 = 1;
		document.getElementById('breed8').innerHTML = 8;
	}
	}
}
function dog8Sell() {
	if (document.getElementById('breed8').innerHTML != 0) {
		money += sell8; // spot for sell multiplier
		age8 = 0;
		iterations8 = 0;
		fakeness8 = 1;
		dirkHitMax = false;
	}
}

function dog9Buy() {
	if (money >= cost9) {
		if (iterations9 < 1) {
		money -= cost9;
		//strength9 = 1;
		iterations9 = 1;
		document.getElementById('breed9').innerHTML = 9;
		equiusLife = (Math.random() * lifespanMult) + lifespanMin;
		// (Math.random() * 300) + 100
	}
	}
}
function dog9Sell() {
	if (document.getElementById('breed9').innerHTML != 0) {
		strength9 = 0;
		iterations9 = 0;
		equiusLife = 0;
	}
}

function dog10Buy() {
	if (money >= cost10) {
		if (dogginess10 < 1) {
		money -= cost10;
		dogginess10 = 1;
		iterations10 = 1;
		document.getElementById('breed10').innerHTML = 12;
	}
	}
}


// calculates what to put in the <p> tags for iteration. called near beginning of slotManager(). returns the string that slotManager puts in the <p>
function writeIteration(itert) {
	if (itert >= 1){
		output = "Born " + (itert) + " seconds ago";
	}
	else {
		output = "No dog yet!";
		}
	return output;
}


// THE BIG ONE.
function slotManager(slot, image, age, agePTag, iteration, iterationPTag, dogBreed, sellValue) {
	
	// Updates age and iteration respectively using other functions.
	if (slot.id == ("slot6")) {
		agePTag.innerHTML = writeCost(sellValue);  
		}
	else if (slot.id == ("slot8")) { //dirkdog exception
		agePTag.innerHTML = "Dog is " + Math.trunc(age * 100) + "% fake";
		sellValue = (1 - age) * (7000 * dirkMult);
		//console.log(fakeness8);
		if (fakeness8 <= 0) {
			dirkHitMax = true;}
		}
	else if (slot.id == ("slot9") && iteration > 0) { //equiusdog exception
		if (iteration <= equiusLife) {
			currentEquineRevenue = Math.floor((Math.random() * equiusRevenueRand) + equiusRevenueMin);
			strength9 += currentEquineRevenue;
			agePTag.innerHTML = "Dog has gained " + currentEquineRevenue + " STRENGTH for a total of " + strength9;
			money += currentEquineRevenue;
			}
		else {
			agePTag.innerHTML = "Dog gained " + strength9 + " STRENGTH before passing";
			console.log(iteration);	
			console.log(equiusLife);
			}
		}
	else if (slot.id == ("slot10") && iteration > 0) {
		agePTag.innerHTML = "Dog has " + age + " dogginess";
	}
	else {
		agePTag.innerHTML = writeAge(age); // Updates age and iteration respectively using other functions.
		}
	iterationPTag.innerHTML = writeIteration(iteration);    
	
	
	
	
	// this is a big else-if statement that changes the dog image depending on the conditions.
	//                 !!!! ALSO UPDATE DOG BREEDS AFTER CHANGING IMAGE
	// REMEMBER: HIGHER NUMBERS, HIGHER IN THIS IF-ELSE!
		if (age >= Math.pow(2, 1024) && slot.id != ("slot6") && slot.id != ("slot8")){					
					image.src = './images/nandog.webp';
					dogBreed.innerHTML = "999";
					sellValue = (Math.floor(Math.random() * 10000)) + 1;
					console.log(sellValue);
				}
		else if (slot.id == ("slot8")) {		//			increase in opacity as fakeness approaches 0
			// fakeness already decreases from earlier code
			image.src = './images/dirkdog.webp';
			image.style = ('opacity:' + (1 - age));
			} 
		else if (slot.id == ("slot10")) {
			image.src = './images/dogdog.webp'
			}
		else if (dogBreed.innerHTML >= 1 && dogBreed.innerHTML <=4) {
			if (age >= Math.pow(2, 1024)){					
				if (dogBreed.innerHTML = "4"){ 
					image.src = './images/nandog.webp';
					dogBreed.innerHTML = "999";
					sellValue = (Math.floor(Math.random() * 70)) + 1;
					console.log(sellValue);
				}
				}
			if (age > 2051201880000000) { // oil age
				image.src = './images/oildog.webp';
				dogBreed.innerHTML = "4";
				sellValue = 25 * oilMult; 
				}
			else if (age > 910240376) { // skeleton age
				image.src = './images/dogbones.webp';
				dogBreed.innerHTML = "3";
				sellValue = 5;
				}
			else if (age > 410240376) { // death age
				image.src = './images/dogdead.webp';
				dogBreed.innerHTML = "2";
				sellValue = 5;
				}
			else if (age > 0) {
				image.src = './images/dog.webp';
				sellValue = 10;
				}
			}
		else if (slot.id == ("slot6")) {
			if (sellValue > 0){
				sellValue *= 1.035
				if (sellValue >= wineCap){
					sellValue = wineCap;} 
				image.src = './images/winedog.webp';
			}
			}
		else if (slot.id == ("slot7") && iteration >= 1) {
			if (age > 94672800000000000) {
				sellValue = 5000 * carbonMult
				image.src = './images/diamonddog.webp';
				}
			else {
				image.src = './images/carbondog.webp';
				}
			}
		else if (slot.id == ("slot9") && iteration >= 1){  	//equiusdog sprites
			if (iteration < equiusLife) {
				image.src = './images/equiusdog.webp';}
				else if (iteration > equiusLife) {
				image.src = './images/equiusdead.webp';}
			else if (iteration = equiusLife) {
				image.src = './images/equiusdying.webp';}
			
			}
		if (iteration < 1) { // winedog doesnt become none after selling; prolly bc above if identifies it as slot6 and ignores below
			image.src = './images/none.webp';
			dogBreed.innerHTML = "0";
			sellValue = 0;
			iteration = 0;
			image.style = 'opacity:1';
			}
		
	//sends inputted info to variableUpdate so that it can make the updated variables global.
	// REMEMBER: UPDATING VARIABLES IN HERE ALONE DOES NOTHING!!
	// thought: see how a const variable thing would work with this??
	variableUpdate(slot, age, iteration, sellValue);
	}

	
	

// this updates the age and iteration variables so that the coding is sound
function variableUpdate(slot, ageVar, iterVar, selVal) {
	if (2 == 5) {
		console.log("WAHT THE FUCK")
		}
	else if (slot == document.getElementById('slot1')) {
		age1 = ageVar;
		iterations1 = iterVar;
		sell1 = selVal;
	}
	else if (slot == document.getElementById('slot2')) {
		age2 = ageVar;
		iterations2 = iterVar;
		sell2 = selVal;
	}
	else if (slot == document.getElementById('slot3')) {
		age3 = ageVar;
		iterations3 = iterVar;
		sell3 = selVal;
	}
	else if (slot == document.getElementById('slot4')) {
		age4 = ageVar;
		iterations4 = iterVar;
		sell4 = selVal;
	}
	else if (slot == document.getElementById('slot5')) {
		age5 = ageVar;
		iterations5 = iterVar;
		sell5 = selVal;
		}
	else if (slot == document.getElementById('slot6')) {
		iterations6 = iterVar;
		sell6 = selVal;
		}
	else if (slot == document.getElementById('slot7')) {
		age7 = ageVar;
		iterations7 = iterVar;
		sell7 = selVal;
		}
	else if (slot == document.getElementById('slot8')) {
		sell8 = selVal;
		}
	}

// oh yeah this is the function that makes the age thing. it bugs out after 1024 iterations but im fine with that
// i am pretty sure this will work with dogs that age differently
function writeAge(age) {
	ageString = "Dog is ";
	displayAge = age;
	if (age >= 31556952) {
		// TODO: add "millon", "billion", and other prefixes for year amounts
		ageString += (Math.trunc(displayAge / 31556952)) + " years, ";
		displayAge = (age % 31556952)
	}
	if (age >= 86400) {
		ageString += (Math.trunc(displayAge / 86400)) + " days, ";
		displayAge = (age % 86400)
	}
	if (age >= 3600) {
		ageString += (Math.trunc(displayAge / 3600)) + " hours, ";
		displayAge = (age % 3600)
	}
	if (age >= 60) {
		ageString += (Math.trunc(displayAge / 60)) + " minutes and ";
		displayAge = (age % 60)
	}

	ageString += Math.trunc((age % 60)) + " seconds ";
	ageString = ageString + "old";
	return ageString;
}

function writeCost(cost) {
	returnString = "Dog is worth $" + Math.trunc(cost);
	return returnString;
	}
	
	
	
	
function unlock(element, cost, purchase, upgrade) {
	if (money >= cost) {
		element.style.display = "";
		money -= cost;
		console.log(element)
		purchase.style.display = "none";
		upgrade.style.display = "";
		
		if (element.id == 'slot6') {
			localStorage.wineUnlocked = true}
		if (element.id == 'slot7') {
			localStorage.carbonUnlocked = true}
		if (element.id == 'slot8') {
			localStorage.dirkUnlocked = true}
		if (element.id == 'slot9') {
			localStorage.equiusUnlocked = true}
		
		}
	}
function upgradeOil(cost, purchase, which) {
	if (money >= cost) {
		money -= cost;
		if (which == 1) {
			localStorage.oilUpgrade1 = true;
			oilMult += 1;
			}
		else if (which == 2) {
			localStorage.oilUpgrade2 = true;
			oilMult += 1;}
		purchase.style.display = "none";
		}
	}

function upgradeWine(cost, purchase) {
	if (money >= cost) {
		money -= cost;
		wineCap *= 3;
		purchase.style.display = "none";
		localStorage.wineUpgrade1 = true;
		}
	}
	
function upgradeCarbon(cost, purchase) {
	if (money >= cost) {
		money -= cost;
		carbonMult *= 2;
		purchase.style.display = "none";
		localStorage.carbonUpgrade1 = true;
		}
	}
	
function upgradeDirk(cost, purchase) {
	if (money >= cost) {
		money -= cost;
		dirkMult += 1;
		purchase.style.display = "none";
		localStorage.dirkUpgrade1 = true;
		}
	}

function upgradeEquius(cost, purchase) {
	if (money >= cost) {
		money -= cost;
		lifespanMin += 100
		lifespanMult *= 2
		equiusRevenueMin *= 3
		equiusRevenueRand *= 2
		purchase.style.display = "none";
		localStorage.equiusUpgrade1 = true;
		}
	}

function devCash() {
	money += 1000000;
	}

function deleteSave() {
	localStorage.removeItem('sMoney')
	console.log(localStorage.oilUpgrade1)
	localStorage.oilUpgrade1 = false;
	localStorage.removeItem('oilUpgrade1')
	localStorage.oilUpgrade2 = false;
	localStorage.removeItem('oilUpgrade2')
	
	localStorage.removeItem('wineUnlocked')
	localStorage.removeItem('carbonUnlocked')
	localStorage.removeItem('dirkUnlocked')
	localStorage.removeItem('equiusUnlocked')
	
	localStorage.removeItem('wineUpgrade1')
	localStorage.removeItem('carbonUpgrade1')
	localStorage.removeItem('dirkUpgrade1')
	localStorage.removeItem('equiusUpgrade1')
	
	window.location.reload();
	}
