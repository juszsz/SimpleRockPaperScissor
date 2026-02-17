let humanScore = 0;
let computerScore = 0;

function getCumputerChoice() {
    let ranChoice = Math.floor(Math.random() * 3) + 1;
    switch (ranChoice) {
        case 1:
            console.log("Rock")
            break;
        case 2:
            console.log("Paper")
            break;
        case 3:
            console.log("Scissor")
            break;
    }
    // return ranChoice;
}

console.log(getCumputerChoice())

function getHumanChoice() {
    let humanChoice = prompt("Type Rock, Paper, or Scissor");

    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase(1);
}

function playRound(humanChoice, computerChoice) {
    
}

console.log(getHumanChoice());