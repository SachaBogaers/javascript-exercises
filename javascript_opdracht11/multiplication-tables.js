for (i = 1; i <= 10; i++) {
	console.log(`Table of ${i}`)
	for (j = 1; j <= 10; j++) {
		let outcome = i * j;
		console.log(`${j} x ${i} = ${outcome}`);
	}
}