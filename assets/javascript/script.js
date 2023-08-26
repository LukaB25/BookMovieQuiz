// Rules of the game.
const rules = [];
rules[0] = 'For best user experience open the game on a larger screen devices, otherwise use a portrait mode on your smaller devices.';
rules[1] = 'You can start the game as soon as the site loads by pressin Start Game button';
rules[2] = 'The game will give you a random questions about books and/or movies that you have to guess.';
rules[3] = 'Choose your answers wisely as each correct answer will give you points, and incorrect answer will show you how many points you have missed out on.';
rules[4] = 'Each time you answer correct the answer will light up green.';
rules[5] = 'Each incorrect answer will light up as red.';
rules[6] = 'Try and answer as many correct answers, and if you answer all of them correctly, you might get a prize.';
rules[7] = 'Each correct answer will award you 10 points.';
rules[8] = 'If you are stuck, you can press restart, to start from beggining.';
rules[9] = 'Once you reach the end the game will automatically end, showing you your total score.';
rules[10] = 'You can save your score , entering requested details and saving, which will take you to main menu';



document.addEventListener('DOMContentLoaded', function () {
    const rulesButton = document.getElementById('rules-btn');
    const rulesList = document.getElementById('rules-list');
    let rulesVisible = false;
    // Keeps track of rules visibility

    rulesButton.addEventListener('click', function () {
        if (rulesVisible) {
            rulesList.innerHTML = '';
            // Clear rules when button is clicked again
        } else {
            rules.forEach(rule => {
                const li = document.createElement('li');
                li.textContent = rule;
                li.classList.add('rule-item');
                // Add the 'rule-item' class
                rulesList.appendChild(li);
            });
        }

        rulesVisible = !rulesVisible;
        // Toggles visibility
    });
});







// const question = document.getElementById('question');
// const answers = Array.from(document.getElementsByClassName('answer-btn'));
// console.log(answers);

// let currentQuestion = {};
// let score = 0;
// let questionCount = 0;
// let availableQuestions = [];

// let questions = [
//     {
//         question: "The Hunger Games is a:",

//     },
// ];