const age = 25;
const name = "Bram";

if (age >= 18 && age <= 25) {
	console.log("Woohoo, you get a 50% discount!")
} else if (age < 18) {
	console.log("You are too young for beer!")
} else {
	console.log("Sorry, full price for you.")
}


/* const isFemale = false;
if (isFemale) {
	console.log("Woohoo, you can join our Ladies Night!")
} else {
	console.log("Sorry, you are not allowed to enter.")
}

const driverStatus = "bob";
if (driverStatus == "bob") {
	console.log("Woohoo,  you are allowed to drive!")
} else {
	console.log("Sorry, you are not allowed to drive.")
} */

if (name == "Sarah" || name == "Bram") {
	console.log("You get a free beer!")
} else {
	console.log("Sorry, no beer for you...")
}

const totalAmount = 10;

if (totalAmount >= 100) {
	console.log("Free champagne")
} else if (totalAmount >= 50) {
	console.log("Free nachos")
} else if (totalAmount >= 25) {
	console.log("Free bitterballen")
} else {
	console.log("you cheapskate")
}

