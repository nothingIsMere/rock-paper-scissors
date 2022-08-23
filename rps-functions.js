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

    roundsPlayed = 0;
    drawCount = 0;
}
 
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

    roundsPlayed = 0;
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

    roundsPlayed = 0;
}

function playRound(){

    roundsPlayed += 1;
    
    let cpuSelection = getCpuSelection();
    let playerSelection = getPlayerSelection();
    let roundWinner = determineRoundWinner(cpuSelection, playerSelection);

    if (roundWinner === `cpu`){
        cpuWinCount++;
        alert(`Computer wins. \n Rounds played: ${roundsPlayed} \n Score: Computer: 
        ${cpuWinCount}, Player:${playerWinCount}, Draws: ${drawCount}`);
    } 
    else if (roundWinner === `player`){
        playerWinCount++;
        alert(`Player wins. \n Rounds played: ${roundsPlayed} \n Score: Computer: 
        ${cpuWinCount}, Player:${playerWinCount}, Draws: ${drawCount}`);
    }
    else if (roundWinner === `draw`){
        drawCount += 1;
        alert(`Draw. \n Rounds played: ${roundsPlayed} \n Score: Computer: 
        ${cpuWinCount}, Player:${playerWinCount}, Draws: ${drawCount}`);
    }
}


function getCpuSelection(){
    let acceptableInputs = [`rock`, `paper`, `scissors`];
    return acceptableInputs[Math.floor(Math.random() * 3)]
}

function getPlayerSelection(){

    let playerSelection;
    let playerSelectionLower;

    let acceptableInputs = [`rock`, `paper`, `scissors`];
    
    do {
        
        playerSelection = prompt(`Choose your weapon (Rock/Paper/Scissors): `);
        playerSelectionLower = playerSelection.toLowerCase();
            
    }while(!acceptableInputs.includes(playerSelectionLower));

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


