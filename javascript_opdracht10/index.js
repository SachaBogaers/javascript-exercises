// Hey kiddo
const checkIfAdult = age => {
	if (age >= 18) {
		return true;
	} else {
		return false;
	}
};

const greeting = age => {
	if (checkIfAdult(age)) {
		return "Hello there"
	} else return "Hey kiddo"
};


console.log(greeting(10));
console.log(greeting(18));
console.log(greeting(100));


//VAT calculations

let vatAmount = (basePrice, vatPercentage) => {
	return basePrice * vatPercentage / 100;
}

const fullPrice = (basePrice, vatPercentage) => {
	const vat = vatAmount(basePrice, vatPercentage);
	const fullPrice = basePrice + vat;
	console.log("Full price is " + fullPrice)
	return fullPrice;
}

console.log(fullPrice(100, 9));
console.log(fullPrice(200, 21));
console.log(fullPrice(100, 0));


// Exercise 2
const basePrice = (fullPrice, vatPercentage) => {
	console.log(fullPrice, vatPercentage);
	const basePrice = (fullPrice / (1 + vatPercentage / 100));
	console.log('Baseprice is ' + basePrice)
	return basePrice;
}

const vatAmount = (fullPrice, vatPercentage) => {
	console.log("VatAmount function" + fullPrice, vatPercentage);
	console.log("Fullprice is ", fullPrice);
	console.log(vatPercentage)
	const amount = fullPrice - (fullPrice / (1 + (vatPercentage / 100)));
	return amount;
}

const priceAndVAT = (fullPrice, vatPercentage) => {
	const result = [];
	const price = basePrice(fullPrice, vatPercentage);
	const amount = vatAmount(fullPrice, vatPercentage);
	result.push(price);
	result.push(amount);
	console.log("result is " + result);
	return result;
}

console.log(priceAndVAT(1210, 21))
console.log(priceAndVAT(2.18, 9))