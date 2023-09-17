let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
let timerId;
let i = 100;

const decrementAndLog = () => {
	console.log(--i)
		if (i <= 0) {
			clearTimeout(timerId);
		}
};

start.addEventListener('click', function() {
	timerId = setTimeout(decrementAndLog, 1000);
});

stop.addEventListener('click', function() {
	clearTimeout(timerId);
});