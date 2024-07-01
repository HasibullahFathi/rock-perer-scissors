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
        return "0";
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
        return "1";
    } else {
        return "2";
    }
}

/** This function updates the score for both players and shows the result */
function updateScores(result) {
    let playerScoreValue = parseInt(playerScore.textContent);
    let computerScoreValue = parseInt(computerScore.textContent);

    if (result === "0") {
        resultBox.textContent = "It's a tie!";
    } else if (result === "1") {
        playerScoreValue++;
        resultBox.textContent = "You win!";
    } else {
        computerScoreValue++;
        resultBox.textContent = "Computer wins!";
    }

    playerScore.textContent = playerScoreValue;
    computerScore.textContent = computerScoreValue;
}