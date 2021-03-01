let colors = ['yellow', 'blue', 'red', 'orange'];
let placeInArray = 0;
while (placeInArray < colors.length) {
	console.log(colors[placeInArray]);
	placeInArray++;
}


for (i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

colors.forEach(color => console.log(color));


let object = {
	n1: "hi",
	n2: "test",
	n3: "breaking bad",
	n4: "another test",
	n5: "cats"
}

Object.keys(object).forEach(function(key) {
	console.log(key, object[key])
});

Object.entries(object).forEach(
	([key, value]) => console.log(key, value)
);