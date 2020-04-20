const hourHand = document.querySelector(".hour-hand");
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".minute-hand");
function setTime() {
	
	const curDate = new Date();
	//15 minutes = 90 degrees starting from the default position of minutes hand, so 1 minute = 6 degrees
	const getMinutes = curDate.getMinutes();
	const minutesInDegree = getMinutes * 6;
	minHand.style.transform = `rotate(${minutesInDegree}deg)`;

	const getSeconds = curDate.getSeconds();
	//15 seconds = 90 degrees starting from the default position of seconds hand, so 1 second = 6 degrees
	const secondsInDegree = getSeconds * 6;
	secondHand.style.transform = `rotate(${secondsInDegree}deg)`;


	const getHours = curDate.getHours();
	//3 hours = 90 degrees starting from the default postion of hours hand, so  1 hour = 30 degrees;
	const hoursInDegree = getHours * 30;
	hourHand.style.transform = `rotate(${hoursInDegree}deg)`;

}

setInterval(setTime, 1000);