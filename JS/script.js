const game = () => {
    let pScore = 0;
    let pcScore = 0;
    //Start the game
    const startGame = () => {
        const battleBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        battleBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //PLay match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");


        //Computer options
        const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //Computer choice
                const computerNumber = Math.round(Math.random() * 5);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(() => {
                    //Call compare hands
                    compareHands(this.textContent, computerChoice);

                    //Update Images
                    playerHand.src = `../images/${this.textContent}.png`;
                    computerHand.src = `../images/${computerChoice}.png`;
                }, 2000);
                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = pcScore;

    };
    const compareHands = (playerChoice, computerChoice) => {
        //Update text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            //return to end function
            return;
        }
        //Check for rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors" || computerChoice === "lizard") {
                winner.textContent = "Player Wins"
                pScore++;
                updateScore()
                return;
            } else {
                winner.textContent = "computer Wins"
                pcScore++;
                updateScore()
                return;
            }
        }
        // Check for paper
        if (playerChoice === "paper") {
            if (computerChoice === "rock" || computerChoice === "spock") {
                winner.textContent = "Player Wins"
                pScore++;
                updateScore()
                return;
            } else {
                winner.textContent = "computer Wins"
                pcScore++;
                updateScore()
                return;
            }
        }
        // Check for scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "paper" || computerChoice === "lizard") {
                winner.textContent = "Player Wins"
                pScore++;
                updateScore()
                return;
            } else {
                winner.textContent = "computer Wins"
                pcScore++;
                updateScore()
                return;
            }
        }
        // Check for lizard
        if (playerChoice === "lizard") {
            if (computerChoice === "spock" || computerChoice === "paper") {
                winner.textContent = "Player Wins"
                pScore++;
                updateScore()
                return;
            } else {
                winner.textContent = "computer Wins"
                pcScore++;
                updateScore()
                return;
            }
        }
        // Check for spock
        if (playerChoice === "spock") {
            if (computerChoice === "rock" || computerChoice === "scissors") {
                pScore++;
                winner.textContent = "Player Wins"
                updateScore()
                return;
            } else {
                winner.textContent = "computer Wins"
                pcScore++;
                updateScore()
                return;
            }
        }
    };
    //call all the inner functions
    startGame();
    playMatch();
};
//start the game function
game();
