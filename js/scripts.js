// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(' ');
  wordArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0 || word.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(' ');
  let wordCount = 0;
  wordArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// UI Logic
function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById('text-passage').value;
  const word = document.getElementById('word').value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById('total-count').innerText = wordCount;
  document.getElementById('selected-count').innerText = occurrencesOfWord;
}

window.addEventListener('load', function () {
  document
    .querySelector('form#word-counter')
    .addEventListener('submit', handleFormSubmission);
});

function boldPassage(word, text) {
  if (text.trim().length === 0 || word.trim().length === 0) {
    return null;
  }
  const p = document.createElement('p');
  let textArray = text.split(' ');
  textArray.forEach(function (element) {
    if (word === element) {
      const bold = document.createElement('strong');
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== textArray.length - 1) {
      p.append(' ');
    }
  });
  return p;
}
