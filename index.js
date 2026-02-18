let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getCumputerChoice();
const rounds = 5;

function getCumputerChoice() {
    let ranChoice = Math.floor(Math.random() * 3) + 1;
    switch (ranChoice) {
        case 1:
            console.log("Rock");
            return "Rock";
            break;
        case 2:
            console.log("Paper");
            return "Paper";
            break;
        case 3:
            console.log("Scissor");
            return "Scissor";
            break;
    }
    // return ranChoice;
}

// console.log(getCumputerChoice())

function getHumanChoice() {
    let humanChoice = prompt("Type Rock, Paper, or Scissor");
    const upperCasePrompt = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase(1);

    console.log(upperCasePrompt);
    return upperCasePrompt;
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if (computerChoice === "Rock" && humanChoice === "Rock") {
        console.log("DRAW!");
    } else if (computerChoice === "Rock" && humanChoice === "Paper") {
        console.log("YOU WIN!");
        humanScore++
    } else if (computerChoice === "Rock" && humanChoice === "Scissor") {
        console.log("YOU LOSE")
        computerScore++
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        console.log("YOU LOSE")
        computerScore++
    } else if (computerChoice === "Paper" && humanChoice === "Paper") {
        console.log("DRAW")
    } else if (computerChoice === "Paper" && humanChoice === "Scissor") {
        console.log("YOU WIN!")
        humanScore++
    } else if (computerChoice === "Scissor" && humanChoice === "Rock") {
        console.log("YOU WIN!")
        humanScore++
    } else if (computerChoice === "Scissor" && humanChoice === "Paper") {
        console.log("YOU LOSE")
        computerScore++
    } else if (computerChoice === "Scissor" && humanChoice === "Scissor") {
        console.log("DRAW")
    }
}

//  playRound(humanSelection, computerSelection)

function playGame() {
 playRound(humanSelection, computerSelection);
 console.log("Your Score: " + humanScore);
 console.log("Computer Score: " + computerScore);
}


for (let i = 1; i <= rounds; i++) {
    playGame()
}