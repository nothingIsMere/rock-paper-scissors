function playRound(playerSelection){

    let cpuSelection = getCpuSelection();
    let roundWinner = determineRoundWinner(cpuSelection, playerSelection);

    if (roundWinner === `cpu`){
        cpuScore += 1;
        cpuScoreDisplay.innerHTML = `${cpuScore}`;
        alert(`You played ${playerSelection}. Computer played ${cpuSelection}. Computer wins.`);
        setTimeout(() => {
            endGame();
        }, 1);
    } 
    else if (roundWinner === `player`){
        playerScore += 1;
        playerScoreDisplay.innerHTML = `${playerScore}`;
        alert(`You played ${playerSelection}. Computer played ${cpuSelection}. You win.`);
        setTimeout(() => {
            endGame();
        }, 1);
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

function endGame(){
 
    if (playerScore === 5){
        
        alert("Player wins!");
        
        let playAgain = prompt("Would you like to play again? [y/n]");
        
        if (playAgain === "y"){
            playerScore = 0;
            cpuScore = 0;
            cpuScoreDisplay.innerHTML = `${cpuScore}`;
            playerScoreDisplay.innerHTML = `${playerScore}`;
        } else{
            alert('Thanks for playing!'); 
        }
    }
    
    if (cpuScore === 5){
        
        alert("Computer wins!");
        
        let playAgain = prompt("Would you like to play again? [y/n]");
        
        if (playAgain === "y"){
            playerScore = 0;
            cpuScore = 0;
            cpuScoreDisplay.innerHTML = `${cpuScore}`;
            playerScoreDisplay.innerHTML = `${playerScore}`;
        } else{
            alert('Thanks for playing!'); 
        }
    }

}

let cpuScore = 0;
let playerScore = 0;

const playerScoreDisplay = document.getElementById("playerScore");
const cpuScoreDisplay = document.getElementById("cpuScore");
const buttons = document.querySelectorAll("button");

buttons.forEach(addEventListener("click", (e) => 
    playRound(e.target.innerHTML.toLowerCase())));

//PROBLEM: How to end the game once either player or computer has scored 5 points?
//Options: When either playerScore or cpuScore reaches 5:
//-disable the button
//-have button tell player games is over and give option of playing again. If yes, restore
//appropriate event listener 


