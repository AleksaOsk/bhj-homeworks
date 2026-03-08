function getHole(index) {
    return document.getElementById(`hole${index}`);
}

const deadElement = document.getElementById('dead');
const lostElement = document.getElementById('lost');

let dead = 0;
let lost = 0;

function updateScore() {
    deadElement.textContent = dead;
    lostElement.textContent = lost;
}

function resetGame() {
    dead = 0;
    lost = 0;
    updateScore();
}

function checkGameOver() {
    if (dead >= 10) {
        alert('Победа! Вы убили 10 кротов!');
        resetGame();
        return true;
    }

    if (lost >= 5) {
        alert('Игра окончена! Вы промахнулись 5 раз!');
        resetGame();
        return true;
    }

    return false;
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = function() {
        if (this.classList.contains('hole_has-mole')) {
            dead++;
        } else {
            lost++;
        }

        updateScore();

        checkGameOver();
    };
}