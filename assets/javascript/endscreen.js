// Endscreen and High Scores

const username = document.getElementById('username');
const saveButton = document.getElementById('save-score-btn');
const newestScore = localStorage.getItem('newestScore');
const finalScore = document.getElementById('final-score-total');

const highScores = JSON.parse(localStorage.getItem('highScores'));
console.log(highScores);

finalScore.innerText = newestScore;

username.addEventListener('keyup', () => {
    saveButton.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log('Clicked save button.');
    e.preventDefault();

    const score =  {
        score: newestScore,
        name: username.value
    };
};
