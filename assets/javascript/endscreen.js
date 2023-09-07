document.addEventListener('DOMContentLoaded', console.log('Displaying final score..'));

// Endscreen
// Part of the code was taken and improved to fit my site from https://www.youtube.com/watch?v=DFhmNLKwwGw

// Constants and selectors
const username = document.getElementById('username');
const saveButton = document.getElementById('save-score-btn');
const newestScore = localStorage.getItem('newestScore');
const finalScore = document.getElementById('final-score-total');
const endgameMessage = document.getElementById('endgame-message');

// Takes high scores from local storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const maxHighScores = 5;

// Imputs the final score into the page
finalScore.innerText = newestScore;

// Compares users score to the existing high scores on the list 
// and displays a message that fits preset criteria
if (newestScore === '10000' | newestScore > highScores[0].score) {
    endgameMessage.innerText = `Congratulations! You beat the highest score. Your score is: ${newestScore}. Make sure you save your score, to receive your prize of 10 minutes of a bragging time, totally free of charge.`;
} else if (newestScore > highScores[4].score) {
    endgameMessage.innerText = `Great job! You managed to beat some of the old high scores. You managed to get ${newestScore} points. Sadly given that your score is not the highest, you will have to try and beat it to get the prize.`;
} else if (newestScore < highScores[4].score) {
    endgameMessage.innerText = `Good try, but your score is only ${newestScore}. Play the quiz again to get your score on the list.`;
}

// Listens if user  started typing in the username input field and keeps 
// Save Button disabled until there is input in the field
username.addEventListener('keyup', () => {
    saveButton.disabled = !username.value;
});

// Removes hover effect if the Save Button is disabled
if (saveButton.disabled) {
    removeHoverEffect(document.querySelectorAll('.save-btn'));
}

// Checks if there is any text input in the username field to either 
// return or remove hover effect
username.addEventListener('input', () => {
    if (username.value) {
        returnHoverEffect(document.querySelectorAll('.save-btn'));
    } else {
        removeHoverEffect(document.querySelectorAll('.save-btn'));
    }
});

// Checks if users score is bigger than the lowest high score within the
// stored high scores and either disables the input field and Save Button
// and removes hover effect, or allowes input and save
if (newestScore <= highScores[4].score) {
    username.placeholder = 'Score too low..';
    username.disabled = true;
    removeHoverEffect(document.querySelectorAll('#username'));
} else {
    username.placeholder = 'username';
    username.disabled = false;
    returnHoverEffect(document.querySelectorAll('#username'));
}


// Code for submit on Enter was used from: 
// https://weekendprojects.dev/posts/addeventlistener-for-enter-key/?utm_content=cmp-true
username.addEventListener('keydown', function (event) {
    if (event.keyCode === 13 || event.key === 'Enter') {
        console.log('Saving your high score...');
    }
});

// saves the new high score to local storage, removes lowest high score located
// at the end of stored array
// Automatically sends user to the high score page to see current score list
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

    return window.location.assign('highscores.html');
};

// Remove hover effect
function removeHoverEffect(element) {
    element.forEach(button => {
        button.classList.remove('btn-hover');
    });
}

// Return hover effect
function returnHoverEffect(element) {
    element.forEach(button => {
        button.classList.add('btn-hover');
    });
}