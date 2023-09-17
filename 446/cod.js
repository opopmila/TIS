let start = document.querySelector('#start');
let interval;
start.addEventListener('click', function() {
	let i = 100;
	if (interval){
		clearInterval(interval);
	}
	inteval = setInterval(function() {
		console.log(--i);
	}, 1000);
	this.removeEventListener('click', func);
});