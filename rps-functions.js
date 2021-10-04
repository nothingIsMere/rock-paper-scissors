function playGameBestOfThree(){
    
    for (let i = 1; i <= 3; i++){
       playRound();
    }
        

    if (cpuWinCount === playerWinCount){
        alert(`The game is a draw!`);
    } else if (cpuWinCount > playerWinCount){
        alert(`The computer wins the game!`);
    } else if (playerWinCount > cpuWinCount){
        alert(`You win the game!`); 
    }
}

//executes a game of Rock, Paper, Scissors if user selects
//best of 5 game. Will keep executing as long as
//user chooses to play again when prompted. 
function playGameBestOfFive(){
    
    for (let i = 1; i <= 5; i++){
       playRound();
    }
        

    if (cpuWinCount === playerWinCount){
        alert(`The game is a draw!`);
    } else if (cpuWinCount > playerWinCount){
        alert(`The computer wins the game!`);
    } else if (playerWinCount > cpuWinCount){
        alert(`You win the game!`); 
    }
}
 
function playGameBestOfSeven(){
    
    for (let i = 1; i <= 7; i++){
       playRound();
    }
        

    if (cpuWinCount === playerWinCount){
        alert(`The game is a draw!`);
    } else if (cpuWinCount > playerWinCount){
        alert(`The computer wins the game!`);
    } else if (playerWinCount > cpuWinCount){
        alert(`You win the game!`); 
    }
}

function playRound(){ 
    
    let cpuSelection = getCpuSelection();
    let playerSelection = getPlayerSelection();
    let roundWinner = determineRoundWinner(cpuSelection, playerSelection);

    if (roundWinner === `cpu`){
        cpuWinCount++;
        alert(`Computer wins this round! Computer has won ${cpuWinCount}
                rounds!`);
    } 
    else if (roundWinner === `player`){
        playerWinCount++;
        alert(`Player wins this round! Player has won ${playerWinCount} 
                rounds!`);
    }
    else if (roundWinner === `draw`){
        alert(`This round is a draw!`);
    }
}


function getCpuSelection(){
    let acceptableInputs = [`rock`, `paper`, `scissors`];
    return acceptableInputs[Math.floor(Math.random() * 3)]
}

function getPlayerSelection(){

    let keepGoing = true; 

    let acceptableInputs = [`rock`, `paper`, `scissors`];
    
    let playerSelection = prompt(`Please enter your choice: `);
    playerSelectionLower = playerSelection.toLowerCase();
    
    while(keepGoing) {
        if (acceptableInputs.includes(playerSelectionLower)) {
            keepGoing = false;
        } else {
            playerSelection = prompt(`That is not a valid choice. Please choose 
                    "rock, "paper", or "scissors":`);
        }
    }

    return playerSelectionLower; 
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
    } else if (cpuSelection == `paper`){
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


