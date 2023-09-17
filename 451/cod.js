let elem = document.querySelector('#elem');
elem.addEventListener('click', function() {
	setTimeout(function() {
		alert('STOP');
	}, 10000);
});