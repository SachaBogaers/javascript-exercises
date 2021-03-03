const mybutton = document.getElementById("mybutton");
mybutton.addEventListener('click', function () {
	alert('button clicked');
})

const btnBackground = document.getElementById("btnBackground");
const body = document.getElementsByTagName("body");
btnBackground.addEventListener('click', function () {
	console.log("background");
	console.log(body[0]);
	console.log(body[0].classList);
	body[0].classList.toggle('blue-background');
	body[0].classList.toggle('red-background');
})