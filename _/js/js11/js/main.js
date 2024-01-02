// Your First Interactive Game
let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    // play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice == 1 ? "rock"
                : computerChoice == 2 ? "paper"
                    : "scissors";
            let result = `playerOne: ${playerOne}\ncomputer: ${computer}\n`;
            result += playerOne == computer ? "Tie game!"
                : playerOne == "rock" && computer == "paper" ? "Computer wins!"
                    : playerOne == "paper" && computer == "scissors" ? "Computer wins!"
                        : playerOne == "scissors" && computer == "rock" ? "Computer wins!"
                            : "playerOne wins!"
            alert(result);
            playAgain = confirm("Play again?");
            playAgain ? location.reload() : alert("Ok, thanks for playing.");
        } else {
            alert("You didn't enter rock, paper, or scissors.");
        }
    } else {
        alert("I guess you changed your mind. Maybe next time.");
    }
} else {
    alert("Ok, maybe next time.");
}
