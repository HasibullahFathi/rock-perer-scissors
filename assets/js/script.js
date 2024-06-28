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
       
        console.log(playerWeapon);
    });
}