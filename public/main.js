function main() {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

document.addEventListener('DOMContentLoaded', main)

// Team 1 Scoring and Win Message Mechanics

const team1Scores = document.querySelector('.team1 fieldset i:first-child')

team1Scores.addEventListener('click', function () {
  if (document.querySelector('.team1 h3').innerText < 21) {
    document.querySelector('.team1 h3').innerText++
  }
  if (document.querySelector('.team1 h3').innerText == 21) {
    let team1Name = document.querySelector('.team1 h2').textContent
    window.alert(`${team1Name} has won 2 Billion Favors!`)
    document.querySelector('.team1 h3').innerText = 0
    document.querySelector('.team2 h3').innerText = 0
  }
})

const team1Misses = document.querySelector('.team1 fieldset i:last-child')

team1Misses.addEventListener('click', function () {
  if (document.querySelector('.team1 h3').innerText > 0) {
    document.querySelector('.team1 h3').innerText--
  }
})

const team2Scores = document.querySelector('.team2 fieldset i:first-child')

team2Scores.addEventListener('click', function () {
  if (document.querySelector('.team2 h3').innerText < 21) {
    document.querySelector('.team2 h3').innerText++
  }
  if (document.querySelector('.team2 h3').innerText == 21) {
    let team2Name = document.querySelector('.team2 h2').textContent
    window.alert(`${team2Name} has won 1 Billion Favors!`)
    document.querySelector('.team1 h3').innerText = 0
    document.querySelector('.team2 h3').innerText = 0
  }
})

const team2Misses = document.querySelector('.team2 fieldset i:last-child')

team2Misses.addEventListener('click', function () {
  if (document.querySelector('.team2 h3').innerText > 0) {
    document.querySelector('.team2 h3').innerText--
  }
})

const team1NameChanges = document.querySelector('.team1 input')
team1NameChanges.addEventListener('input', function () {
  document.querySelector('.team1 h2').textContent = document.querySelector(
    '.team1 input'
  ).value
})

const team2NameChanges = document.querySelector('.team2 input')
team2NameChanges.addEventListener('input', function () {
  document.querySelector('.team2 h2').textContent = document.querySelector(
    '.team2 input'
  ).value
})
