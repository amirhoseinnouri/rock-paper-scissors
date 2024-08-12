let playerWins = 0;
let cpuWins = 0;



function play(playerChoice) {
   
    const choices = ['rock', 'paper', 'scissors'];
    
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    let resultMessage = '';



    if (playerChoice === cpuChoice) {
        resultMessage = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && cpuChoice === 'scissors') ||
        (playerChoice === 'paper' && cpuChoice === 'rock') ||
        (playerChoice === 'scissors' && cpuChoice === 'paper')
    ) {
        resultMessage = `You win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${cpuChoice}.`;
        playerWins++;
    } else {
        resultMessage = `You lose! ${cpuChoice.charAt(0).toUpperCase() + cpuChoice.slice(1)} beats ${playerChoice}.`;
        cpuWins++;
    }

    updateScoreboard();
    document.getElementById('result-message').innerText = resultMessage;
}



function updateScoreboard() {
    
    document.getElementById('player-wins').innerText = playerWins;
    
    document.getElementById('cpu-wins').innerText = cpuWins;
}



function resetGame() {
    playerWins = 0;

    cpuWins = 0;

    updateScoreboard();

    document.getElementById('result-message').innerText = '';
}














//Nouri_amirhosein 