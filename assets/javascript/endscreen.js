document.addEventListener('DOMContentLoaded', console.log('Displaying final score..'));

// Endscreen and High Scores
// Code was taken and implemented to fit my site from https://www.youtube.com/watch?v=DFhmNLKwwGw
// I additionally worked on adding some functions 

const username = document.getElementById('username');
const saveButton = document.getElementById('save-score-btn');
const newestScore = localStorage.getItem('newestScore');
const finalScore = document.getElementById('final-score-total');
const endgameMessage = document.getElementById('endgame-message');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const maxHighScores = 5;

finalScore.innerText = newestScore;

if (newestScore === '10000') {
    endgameMessage.innerText = `Congradulations! You beat the highest score. Your score is: ${newestScore}. Make sure you save your score, to receive your prize of 10 minutes of a bragging time, totally free of charge.`;
} else if (newestScore > highScores[4].score) {
    endgameMessage.innerText = `Great job! You managed to beat some of the old high scores. You managed to get ${newestScore} points. Sadly given that your score is not the highest, you will have to try and beat it to get the prize.`;
} else if (newestScore < highScores[4].score) {
    endgameMessage.innerText = `Good try, but your score is only ${newestScore}. Play the quiz again to get your score on the list.`;
}

username.addEventListener('keyup', () => {
    saveButton.disabled = !username.value;
});

// Code for submit on Enter was used from: https://weekendprojects.dev/posts/addeventlistener-for-enter-key/?utm_content=cmp-true
username.addEventListener('keydown', function (event) {
    if (event.keyCode === 13 || event.key === 'Enter') {
        console.log('Saving your high score...');
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