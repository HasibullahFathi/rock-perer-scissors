// declare variables to access the dom elements
const buttons = document.getElementsByClassName('btn');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerImage = document.getElementById('player-img');
const computerImage = document.getElementById('computer-img');
const resultBox = document.getElementById('result');
const weapons = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

// add eventListener to the buttons send user's weapon to the function start game 
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerWeapon = this.getAttribute("data-weapon");

        startGame(playerWeapon);
    });
}

/** function start game choose computer weapons rundomly and set for both players photo according to thier weapons */
function startGame(playerWeapon) {

    playerImage.src = `assets/images/${weapons[playerWeapon]}.webp`;
    playerImage.alt = `weapons ${playerWeapon}`;

    let computerWeapon = Math.floor(Math.random() * 5);
    computerImage.src = `assets/images/${weapons[computerWeapon]}.webp`;
    computerImage.alt = `weapons ${weapons[computerWeapon]}`;

    let result = compareWeapons(weapons[playerWeapon], weapons[computerWeapon]);

    updateScores(result);
}

/** This function compare both choices and send the result back to start game function. */
function compareWeapons(playerWeapon, computerWeapon) {
    if (playerWeapon === computerWeapon) {
        return "It's a tie!";
    } else if (
        (playerWeapon === "Scissors" && computerWeapon === "Paper") ||
        (playerWeapon === "Paper" && computerWeapon === "Rock") ||
        (playerWeapon === "Rock" && computerWeapon === "Lizard") ||
        (playerWeapon === "Lizard" && computerWeapon === "Spock") ||
        (playerWeapon === "Spock" && computerWeapon === "Scissors") ||
        (playerWeapon === "Scissors" && computerWeapon === "Lizard") ||
        (playerWeapon === "Lizard" && computerWeapon === "Paper") ||
        (playerWeapon === "Paper" && computerWeapon === "Spock") ||
        (playerWeapon === "Spock" && computerWeapon === "Rock") ||
        (playerWeapon === "Rock" && computerWeapon === "Scissors")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

/** This function updates the score and set the result */
function updateScores(result) {
    if (result === "You win!") {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if (result === "Computer wins!") {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }

    resultBox.innerHTML = `${result}`;
}