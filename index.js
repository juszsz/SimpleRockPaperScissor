let humanScore = 0;
let computerScore = 0;

const rounds = 5;

function getCumputerChoice() {
    let ranChoice = Math.floor(Math.random() * 3) + 1;
    switch (ranChoice) {
        case 1:
            console.log("Computer: Rock");
            return "Rock";
            break;
        case 2:
            console.log("Computer: Paper");
            return "Paper";
            break;
        case 3:
            console.log("Computer: Scissor");
            return "Scissor";
            break;
    }
    // return ranChoice;
}

// console.log(getCumputerChoice())

function getHumanChoice() {
    let humanChoice = prompt("Type Rock, Paper, or Scissor");
    const upperCasePrompt = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase(1);

    console.log("Player: " + upperCasePrompt);
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
    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getCumputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

playGame()