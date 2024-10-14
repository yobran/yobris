// Step 1: Get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Step 2: Get the human player's choice
function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    // Validate the user input
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid input. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

// Step 3: Play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
        return "human";
    } else {
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
        return "computer";
    }
}

// Step 4: Play the entire game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5;

    for (let i = 0; i < rounds; i++) {
        console.log(`Round ${i + 1}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(humanChoice, computerChoice);

        if (roundResult === "human") {
            humanScore++;
        } else if (roundResult === "computer") {
            computerScore++;
        }

        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Step 5: Declare the overall winner
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game. The final score was ${computerScore} to ${humanScore}.`);
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();
