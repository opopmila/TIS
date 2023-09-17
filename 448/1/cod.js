let elem = document.querySelector('#elem');

setInterval(function() {
	elem.value = Number(elem.value) + 1;
}, 1000);
// убрать функцию Number, то в инпуте будет увеличиваться число ТОЛЬКО в еденичной форме