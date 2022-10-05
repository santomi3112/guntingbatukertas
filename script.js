const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return `tie!. computer = ${computerSelection}, you = ${playerSelection}`;
    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        return `Player won!. computer = ${computerSelection}, you = ${playerSelection}`
    } else {
        return `Computer won!. computer = ${computerSelection}, you = ${playerSelection}`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("km mau pilih rock/paper/scissors?")
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection));
    }
}