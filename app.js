let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userCount = document.querySelector("#user-score");
const compCount = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        msg.innerText = 'You Win! Your '+userChoice+ ' beats '+compChoice;
        msg.style.backgroundColor = "green";
        userScore++;
        userCount.innerText = userScore;
    }
    else {
        msg.innerText = 'You lost! '+compChoice+' beats your '+userChoice;
        msg.style.backgroundColor = "red";
        compScore++;
        compCount.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    //Generate computer choice -> module
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);
    if(userChoice===compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})