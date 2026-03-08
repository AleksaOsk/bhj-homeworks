const timer = document.getElementById('timer');

const countdown = setInterval(() => {
    timer.textContent = parseInt(timer.textContent) - 1;

    if (parseInt(timer.textContent) <= 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе!');
    }
}, 1000);