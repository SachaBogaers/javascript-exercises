const paintWallRed = function () {
	console.log("The wall has been painted red.");
};

const paintWall = function (color) {
	console.log("The wall has been painted " + color);
};


paintWallRed();
paintWall("green");
paintWall("purple");
paintWall;

const paintSpecificWall = function (direction, color) {
	console.log("The " + direction + " wall has been painted " + color)
}

paintSpecificWall("north", "grey");