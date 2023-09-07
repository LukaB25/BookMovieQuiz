// Rules of the game.
const rules = [];
rules[0] = '1. For best user experience open the game on a larger screen devices, otherwise use a portrait mode on your smaller devices.';
rules[1] = '2. You can start the game as soon as the site loads by pressing Play Game button';
rules[2] = '3. The game will give you a random questions about books and/or movies that you have to guess.';
rules[3] = '4. There is a total of 27 questions, out of which you will need to answer 10 random ones.';
rules[4] = '5. Choose your answers wisely as each correct answer will give you points, and incorrect answer will deduct points from your score.';
rules[5] = '6. Each time you answer correctly, the selected answer will light up green and you will be awarded 1000 points.';
rules[6] = '7. Each time incorrect answer is selected it will light up red, the correct answer will be revealed by lighting up green and random points, either none, 10, 30, 50 or 100 points, will be deducted from the your score.';
rules[7] = '8. Try and get as many correct answers, and if you manage to get all of them correctly, you might get a prize.';
rules[8] = "9. Make sure to keep track of your timer coundown, as if it runs out, it will count as incorrect answer, which will deduct your points.";
rules[9] = '10. If you want to start from the beggining, you can press restart, to start from beggining. You will need to answer the question to activate Restart Button.';
rules[10] = '11. Keep in mind, to load each next question, you will need to press next button. You will need to answer the question to activate Next Button.';
rules[11] = '12. Once you reach the end the game will automatically end, where you will have an option to either restart or to save your score to the highscore on your local storage.';
rules[12] = '13. To save your score you will need to fill out requested details and save your score.';
rules[13] = 'May the odds be ever in your favor!';


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

            // Replace Close Rules button text with Rules text
            rulesButton.innerHTML = '<i class="fas fa-list-alt"></i> Rules';

            // Clear rules when button is clicked again
        } else {
            rules.forEach(rule => {
                const li = document.createElement('li');
                li.textContent = rule;
                li.classList.add('rule-item');
                // Add the 'rule-item' class
                rulesList.appendChild(li);

                // Replace Rules button text with Close Rules text
                rulesButton.innerHTML = '<i class="fas fa-list-alt"></i> Close Rules';

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