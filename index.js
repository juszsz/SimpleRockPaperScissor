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
    let humanChoice = prompt("Type Rock, Paper, or Scissor")
    return humanChoice;
}

console.log(getHumanChoice());