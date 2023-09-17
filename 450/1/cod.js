document.getElementById('start').addEventListener('click', startTimer);

function startTimer() {
    let numberElement = document.getElementById('number');
    const interval = setInterval(function() {
        let currentNumber = parseInt(numberElement.innerHTML) || 0;
        numberElement.innerText = ++currentNumber;
    }, 1000);
}
