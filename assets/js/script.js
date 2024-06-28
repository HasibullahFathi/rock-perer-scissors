const buttons = document.getElementsByClassName('btn');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerImage = document.getElementById('player-img');
const computerImage = document.getElementById('computer-img');
const resultBox = document.getElementById('result');
const weapons = ["Rock", "Paper", "Scissors", "Lizard", "Spack"];

for(let button of buttons) {
    button.addEventListener("click", function() {
        let playerWeapon = this.getAttribute("data-weapon");

        startGame(playerWeapon);
    });
}

function startGame(playerWeapon) {
    
    playerImage.src = `assets/images/${weapons[playerWeapon]}.webp`;
    playerImage.alt = `weapons ${playerWeapon}`;

    let computerWeapon = Math.floor(Math.random() * 5);
    computerImage.src = `assets/images/${weapons[computerWeapon]}.webp`;
    computerImage.alt = `weapons ${weapons[computerWeapon]}`;

    console.log(computerWeapon);
    console.log(playerWeapon);

}

// startGame(playerWeapon);