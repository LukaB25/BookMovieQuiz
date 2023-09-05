// Rules of the game.
const rules = [];
rules[0] = '1. For best user experience open the game on a larger screen devices, otherwise use a portrait mode on your smaller devices.';
rules[1] = '2. You can start the game as soon as the site loads by pressing Start Game button';
rules[2] = '3. The game will give you a random questions about books and/or movies that you have to guess.';
rules[3] = '4. Choose your answers wisely as each correct answer will give you points, and incorrect answer will show you how many points you have missed out on.';
rules[4] = '5. Each time you answer correct the answer will light up green and you will be awarded 10 points.';
rules[5] = '6. Each incorrect answer will light up as red and 2 points will be taken from the total score.';
rules[6] = '7. Try and answer as many correct answers, and if you answer all of them correctly, you might get a prize.';
rules[7] = '8. If you are stuck, you can press restart, to start from beggining.';
rules[8] = '9. Once you reach the end the game will automatically end, where you will have an option to either restart or to save your score to the highscore on your local storage.';
rules[9] = '10. To save your score you will need to fill out requested details and save your score.';


document.addEventListener('load', console.log('Welcome to the site.'));
document.addEventListener('DOMContentLoaded', function displayRules() {
    const rulesButton = document.getElementById('rules-btn');
    const rulesList = document.getElementById('rules-list');
    let rulesVisible = false;
    // Keeps track of rules visibility

    rulesButton.addEventListener('click', function displayRules() {
        if (rulesVisible) {
            rulesList.innerHTML = '';
            console.log('Hiding rules..');
            // Clear rules when button is clicked again
        } else {
            rules.forEach(rule => {
                const li = document.createElement('li');
                li.textContent = rule;
                li.classList.add('rule-item');
                // Add the 'rule-item' class
                rulesList.appendChild(li);


            });
            console.log('Displaying rules..');
        }

        rulesVisible = !rulesVisible;
        // Toggles visibility
    });
});

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

if (highScores.lenght === 0) {
    loadPlaceholderHighScore();

}

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