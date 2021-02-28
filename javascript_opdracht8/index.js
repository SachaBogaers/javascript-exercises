// Checking if a number is big

const biggerThanHundred = function (number) {
	if (number > 100) {
		return true;
	} else {
		return false;
	}
}


console.log(biggerThanHundred(200));
console.log(biggerThanHundred(10));
console.log(biggerThanHundred(0));


// Bouncer at a club

const bouncerBrenda = function (maxAmount, currentAmount, age) {
	if (age < 18) {
		return "this is a club for adults";
	} else if (currentAmount >= maxAmount) {
		return "it's too busy now, come back later";
	} else if (currentAmount < maxAmount) {
		return "come in";
	}
}

console.log(bouncerBrenda(100, 20, 20));
console.log(bouncerBrenda(200, 200, 18));
console.log(bouncerBrenda(200, 200, 10));


// Calculating the average
const calculateAverage = function (firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber) {
	return Math.round((firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber) / 5);
}

console.log(calculateAverage(10, 20, 10, 15, 20));
console.log(calculateAverage(200, 501, 233, 245, 122));
console.log(calculateAverage(1, 3, 1, 3, 2));
console.log(calculateAverage(1234, 23523, 123, 123, 1));