const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

cookie.onclick = function() {
    let currentCount = parseInt(counter.textContent);
    counter.textContent = currentCount + 1;

    cookie.width = 150;

    setTimeout(function() {
        cookie.width = 200;
    }, 50);
}