function decrementCounter() {
    let countdown = document.getElementById("countdown");
    if (countdown.innerHTML > 0) {
        countdown.innerHTML = Number(countdown.innerHTML) - 1;
    } else {
        clearInterval(timer);
        document.getElementById("Start").disabled = true;
        document.getElementById("Stop").disabled = false;
    }
}

const btnStart = document.getElementById('Start');
btnStart.addEventListener('click', () => {
    btnStart.disabled = true;
    btnStop.disabled = false;

    const timer = setInterval(decrementCounter, 1000);
});

const btnStop = document.getElementById('Stop');