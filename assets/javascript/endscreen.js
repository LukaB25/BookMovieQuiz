// Endscreen and High Scores

const username = document.getElementById('username');
const saveButton = document.getElementById('save-score-btn');
const newestScore = localStorage.getItem('newestScore');
const finalScore = document.getElementById('final-score-total');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const maxHighScores = 5;

finalScore.innerText = newestScore;

username.addEventListener('keyup', () => {
    saveButton.disabled = !username.value;
});

// Code for submit on Enter was used from: https://weekendprojects.dev/posts/addeventlistener-for-enter-key/?utm_content=cmp-true
username.addEventListener('keydown', function (event) {
    if (event.keyCode === 13 || event.key === 'Enter') {
        console.log('Enter key was pressed');
    }
});

saveHighScore = (e) => {
    console.log('Clicked save button.');
    e.preventDefault();

    const score = {
        score: newestScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => b.score - a.score);

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));

    console.log(score);

    return window.location.assign('/highscores.html');
};