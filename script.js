const SELECTIONS = [
  {
    name: "batu",
    emoji: "✊",
    beats: "gunting",
  },
  {
    name: "gunting",
    emoji: "🖖",
    beats: "kertas",
  },
  {
    name: "kertas",
    emoji: "✋",
    beats: "batu",
  },
];

const selectionButton = document.querySelectorAll("[data-selection]");
const yourScoreSpan = document.querySelector("[data-your-score]");
const botScoreSpan = document.querySelector("[data-bot-score]");
const yourResult = document.querySelector("[data-your-result]");
const botResult = document.querySelector("[data-bot-result]");
const finalColumn = document.querySelector("data-greetings")

selectionButton.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function makeSelection(selection) {
  const botSelection = randomSelection();
  const yourWinner = isWinner(selection, botSelection);
  const botWinner = isWinner(botSelection, selection);

  updateScore(selection, botSelection)
  if (yourWinner) incrementScore(yourScoreSpan);
  if (botWinner) incrementScore(botScoreSpan);


  // LANJUT NTR
  // const div = document.createElement('div')
  // if (yourWinner) div.innerText = "hore!"
  // if (botWinner) div.innerText = "huft :("
  // finalColumn.after(div)
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function updateScore(selection, botSelection) {
  yourResult.innerText = selection.emoji
  botResult.innerText = botSelection.emoji
}

// lg berpikir keras
