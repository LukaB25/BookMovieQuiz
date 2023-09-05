document.addEventListener('load', console.log('Displaying high scores.'));

// Display High Scores

const highScoresList = document.getElementById('high-score-list');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

if (highScores.lenght === 0) {
    loadPlaceholderHighScore();
}

highScoresList.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name} <=> ${score.score}</li>`;
}).join('');


