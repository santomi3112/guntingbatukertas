const SELECTIONS = [
    {
        name: 'batu',
        emoji: '✊',
        beats: 'gunting'
    },
    {
        name: 'gunting',
        emoji: '🖖',
        beats: 'kertas'
    },
    {
        name: 'kertas',
        emoji: '✋',
        beats: 'batu'
    }
];
const finalColumn = document.querySelector('[data-final-column]')
const selectionButton = document.querySelectorAll('[data-selection]')
const botScoreSpan = document.querySelector('[data-bot-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')

selectionButton.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const botSelection = randomSelection()
    const yourWinner = isWinner(selection, botSelection)
    const botWinner = isWinner(botSelection, selection)
    
    addSelectionResult(botSelection, botWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (botWinner) incrementScore(botScoreSpan)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult (selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}