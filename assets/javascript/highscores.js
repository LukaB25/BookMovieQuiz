document.addEventListener('load', console.log('Displaying high scores.'));

// Display High Scores
const highScoresList = document.getElementById('high-score-list');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Imports placeholder high scores to the Local Storage to prevent empty high scores page in case they are removed
document.addEventListener('DOMContentLoaded', function loadPlaceholderHighScore() {
    const placeholderHighScores = [
        { score: 9000, name: 'Tena' },
        { score: 8990, name: 'Dodo' },
        { score: 8970, name: 'Tin' },
        { score: 7870, name: 'Lara' },
        { score: 6850, name: 'Teo' }
    ];
    localStorage.setItem('highScores', JSON.stringify(placeholderHighScores));
    console.log('Importing high scores...');
});

// Checks if there are existing high scores and imports placeholder if there are none 
if (highScores.lenght === 0) {
    loadPlaceholderHighScore();
}

// Separates all high scores and places them in individual list, displaying the name and their score
highScoresList.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name} <=> ${score.score}</li>`;
}).join('');

// Random message inside of high scores page, to motivate players to test their knowledge
const highScoreMessage = document.getElementById('highscores-message');
const highScoreMessageList = [
    '<i class="fas fa-grin-alt" id="highscore-emoji"></i> Can you rise to the challenge and win? <i class="fas fa-grin-alt" id="highscore-emoji"></i>',
    '<i class="fas fa-grin-tongue-wink" id="highscore-emoji"></i> Do you think you have knowledge necessary? <i class="fas fa-grin-tongue-wink" id="highscore-emoji"></i>',
    '<i class="fas fa-laugh-wink" id="highscore-emoji"></i> Can you beat my nieces and nephews scores? <i class="fas fa-laugh-wink" id="highscore-emoji"></i>',
    '<i class="fas fa-grin-stars" id="highscore-emoji"></i> What score can you get? <i class="fas fa-grin-stars"  id="highscore-emoji"></i>',
    '<i class="fas fa-grin-alt" id="highscore-emoji"></i> Can you reach the top and win the prize? <i class="fas fa-grin-alt" id="highscore-emoji"></i>',
    '<i class="fas fa-surprise" id="highscore-emoji"></i> Did you hear, there is a prize for first place.. <i class="fas fa-surprise" id="highscore-emoji"></i>',
    '<i class="fas fa-laugh" id="highscore-emoji"></i> Test your knowledge, try the quiz. <i class="fas fa-laugh" id="highscore-emoji"></i>',
    `<i class="fas fa-laugh-beam" id="highscore-emoji"></i> I challenge you to beat ${highScores[0].name}'s score. <i class="fas fa-laugh-beam" id="highscore-emoji"></i>`,
    `<i class="fas fa-smile-beam" id="highscore-emoji"></i> Try to beat ${highScores[4].name}'s score to appear on the list <i class="fas fa-smile-beam" id="highscore-emoji"></i>`,
    '<i class="fas fa-grin-beam-sweat" id="highscore-emoji"></i> How many books will you recognise? <i class="fas fa-grin-beam-sweat" id="highscore-emoji"></i>',
    '<i class="fas fa-meh-blank" id="highscore-emoji"></i> How many movies have you heard of? <i class="fas fa-meh-blank" id="highscore-emoji"></i>',
    "I bet you haven't seen the question with Meryl Streep. <i class='fas fa-grin-hearts'id='highscore-emoji'></i>  <i class='fas fa-grin-hearts'id='highscore-emoji'></i>  <i class='fas fa-grin-hearts'id='highscore-emoji'></i>",
    '<i class="fas fa-laugh" id="highscore-emoji"></i> Imagine all of the fun facts you will learn. <i class="fas fa-laugh" id="highscore-emoji"></i>'
];

// Chooses a random message and imports it onto the page
const randomMessage = Math.floor(Math.random() * highScoreMessageList.length);
const currentMessage = highScoreMessageList[randomMessage];
highScoreMessage.innerHTML = currentMessage;