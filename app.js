//codefoo 38695 for Jakes fancy version
function play(playerChoice) {
    var compChoice = computerChoice()
    var res = results(compChoice, playerChoice)
    endResults(res)
}

function playerChoice(pChoice) {
    document.getElementById('playerChoice').innerText = 'You Chose ' + pChoice
    play(pChoice)
}

function computerChoice() {
    var choices = ['Rock', 'Paper', 'Scissors']
    var num = Math.floor(Math.random() * choices.length);
    return choices[num]

}

function results(compChoice, playerChoice) {
    if (playerChoice == compChoice) {
        return 'Tie';
    } else if (playerChoice == 'Rock' && compChoice == 'Scissors' ||
        playerChoice == 'Paper' && compChoice == 'Rock' ||
        playerChoice == 'Scissors' && compChoice == 'Paper') {
        return 'Chose Wisely!';
    } else {
        return 'Chose...Poorly'
    }
}

function endResults(str) {
    document.getElementById('results').innerText = 'You ' + str
}