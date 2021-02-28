// Function declaration

function function1(num1, num2) {
	let sum = Math.pow(num1, 2) + Math.pow(num2, 2);
	let sumSquared = Math.pow(sum, 2);
	return sumSquared
}


// Function expression

const function2 = function (num1, num2) {
	let sum = Math.pow(num1, 2) + Math.pow(num2, 2);
	let sumSquared = Math.pow(sum, 2);
	return sumSquared
}

// Arrow function

const function3 = (num1, num2) => {
	let sum = Math.pow(num1, 2) + Math.pow(num2, 2);
	let sumSquared = Math.pow(sum, 2);
	return sumSquared
}

console.log(function1(2, 5));
console.log(function2(2, 5));
console.log(function3(2, 5));