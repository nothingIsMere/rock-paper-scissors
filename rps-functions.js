function playRound(playerSelection){

    let cpuSelection = getCpuSelection();
    let roundWinner = determineRoundWinner(cpuSelection, playerSelection);

    if (roundWinner === `cpu`){
        cpuScore += 1;
        alert(`You played ${playerSelection}. Computer played ${cpuSelection}. Computer wins.`);
        cpuScoreDisplay.innerHTML = `${cpuScore}`;
    } 
    else if (roundWinner === `player`){
        playerScore += 1;
        alert(`You played ${playerSelection}. Computer played ${cpuSelection}. You win.`);
        playerScoreDisplay.innerHTML = `${playerScore}`;
    }
    else if (roundWinner === `draw`){
        alert(`You played ${playerSelection}. Computer played ${cpuSelection}. This round's a draw!`);
    }
}

function getCpuSelection(){
    let acceptableInputs = [`rock`, `paper`, `scissors`];
    return acceptableInputs[Math.floor(Math.random() * 3)]
}

function determineRoundWinner(cpuSelection, playerSelection){
    
    let winner;
    
    if (cpuSelection === playerSelection){
        winner = `draw`; 
    } else if (cpuSelection === `scissors`){
        switch (playerSelection){
            case `paper`:
                winner = `cpu`;
                break;
            case `rock`:
                winner = `player`;
                break;
        }
    } else if (cpuSelection === `rock`){
        switch (playerSelection){
            case `paper`:
                winner = `player`;
                break;
            case `scissors`:
                winner = `cpu`;
                break;
        }
    } else if (cpuSelection === `paper`){
        switch (playerSelection){
            case `scissors`:
                winner = `player`;
                break;
            case `rock`:
                winner = `cpu`;
                break;
        }
    }

    return winner; 
}

let cpuScore = 0;
let playerScore = 0;

const playerScoreDisplay = document.getElementById("playerScore");
const cpuScoreDisplay = document.getElementById("cpuScore");
const buttons = document.querySelectorAll("button");

buttons.forEach(addEventListener("click", (e) => 
    playRound(e.target.innerHTML.toLowerCase())));

//PROBLEM: How to end the game once either player or computer has scored 5 points?


