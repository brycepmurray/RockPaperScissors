function play(playerChoice) {
    var compChoice = computerChoice()
    results(compChoice, playerChoice)
}

function playerChoice(playerChoice) {
    document.getElementById('playerChoice').innerText = 'You Chose ' + playerChoice
    play(playerChoice)
}

function computerChoice() {
    var choices = ['Rock', 'Scissors', 'Paper']
    var num = Math.floor(Math.random() * 4);
    return choices[num]

}

function results(compChoice, playerChoice) {
    if (playerChoice == compChoice) {
        results = 'Tie';
    } else if (playerChoice === 'Rock' && compChoice === 'Scissors',
        playerChoice === 'Scissors' && compChoice === 'Paper') {
        playerChoice === 'Paper' && compChoice === 'Rock',
            results = 'Win!';
    } else {
        results = 'Lose'
    }
    return results;

    play(results)

}

function endResults(results) {
    document.getElementById('results').innerText = 'You ' + results
}