// Rules of the game.
const rules = [];
rules[0] = '1. For best user experience open the game on a larger screen devices, otherwise use a portrait mode on your smaller devices.';
rules[1] = '2. You can start the game as soon as the site loads by pressin Start Game button';
rules[2] = '3. The game will give you a random questions about books and/or movies that you have to guess.';
rules[3] = '4. Choose your answers wisely as each correct answer will give you points, and incorrect answer will show you how many points you have missed out on.';
rules[4] = '5. Each time you answer correct the answer will light up green and you will be awarded 10 points.';
rules[5] = '6. Each incorrect answer will light up as red and 10 points will be awarded to missed points.';
rules[6] = '7. Try and answer as many correct answers, and if you answer all of them correctly, you might get a prize.';
rules[7] = '8. If you are stuck, you can press restart, to start from beggining.';
rules[8] = '9. Once you reach the end the game will automatically end, showing you your total score.';
rules[9] = '10. You can save your score , entering requested details and saving, which will take you to main menu';



document.addEventListener('DOMContentLoaded', function () {
    const rulesButton = document.getElementById('rules-btn');
    const rulesList = document.getElementById('rules-list');
    let rulesVisible = false;
    // Keeps track of rules visibility

    rulesButton.addEventListener('click', function () {
        if (rulesVisible) {
            rulesList.innerHTML = '';
            console.log('Hiding rules..')
            // Clear rules when button is clicked again
        } else {
            rules.forEach(rule => {
                const li = document.createElement('li');
                li.textContent = rule;
                li.classList.add('rule-item');
                // Add the 'rule-item' class
                rulesList.appendChild(li);

                
            });
            console.log('Displaying rules..')
        }

        rulesVisible = !rulesVisible;
        // Toggles visibility
    });
});


const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-btn'));
console.log(answers);

let currentQuestion = {};
let score = 0;
let questionCount = 0;
let availableQuestions = [];

let questions = [
    {
        question: "The Hunger Games is a:",
        answers: [
            { text: 'Book', correct: false },
            { text: 'Movie', correct: false },
            { text: 'Both', correct: true },
            { text: 'Neither', correct: false },
        ]
    },
    {
        question: "Trilogy under the name Divirgent is a:",
        answers: [
            { text: 'Movie', correct: false },
            { text: 'Both', correct: true },
            { text: 'Book', correct: false },
            { text: 'Neither', correct: false },
        ]
    },
    {
        question: "Which of the following was not Book-To-Movie adaptation?",
        answers: [
            { text: 'The Godfather (1972)', correct: false },
            { text: 'Titanic (1997)', correct: true },
            { text: 'The Help (2011)', correct: false },
            { text: 'The Devil Wears Prada (2006)', correct: false },
        ]
    },
    {
        question: "Was a novel Red, White and Royal Blue adapted into a movie?",
        answers: [
            { text: 'Yes', correct: true },
            { text: 'Maybe', correct: false },
            { text: 'No', correct: false },
            { text: 'Not sure', correct: false },
        ]
    },
    {
        question: "Guess a movie where the main heroine uses a bow and arrows to take down the Capitol",
        answers: [
            { text: 'The Hobbit (2012)', correct: false },
            { text: 'Smurfs (2011)', correct: false },
            { text: 'The Hunger Games (2012)', correct: true },
            { text: 'Matilda (1996)', correct: false },
        ]
    },
    {
        question: "Jurassic Park (1993) is a:",
        answers: [
            { text: 'Book', correct: false },
            { text: 'Neither', correct: false },
            { text: 'Movie', correct: false },
            { text: 'Both', correct: true },
        ]
    },
    {
        question: "Hidden figures (2016) is a:",
        answers: [
            { text: 'Neither', correct: false },
            { text: 'Both', correct: true },
            { text: 'Movie', correct: false },
            { text: 'Book', correct: false },
        ]
    },
    {
        question: "The Alpha’s Son (By: Penny Jessup) is a:",
        answers: [
            { text: 'Book', correct: true },
            { text: 'Neither', correct: false },
            { text: 'Movie', correct: false },
            { text: 'Both', correct: false },
        ]
    },
    {
        question: "Which of this books was not adapted into a movie or a Tv Show:",
        answers: [
            { text: 'Enemies with Benefits (by Lavander Fields)', correct: true },
            { text: 'Red, White and Royal Blue (by Casey McQuiston)', correct: false },
            { text: 'Heartstopper (by Alice Oseman)', correct: false },
            { text: 'Call Me by Your Name (by André Aciman)', correct: false },
        ]
    },
    {
        question: "Is Gone Girl (2014) a Book-To-Movie adaptation?",
        answers: [
            { text: 'Who?', correct: false },
            { text: 'No', correct: false },
            { text: 'Maybe', correct: false },
            { text: 'Yes', correct: true },
        ]
    },
    {
        question: "Who were the main actresses in a Book-To-Movie adaptation of A Simple Favour (2018)?",
        answers: [
            { text: 'Blake Lively and Anne Hathaway', correct: false },
            { text: 'Blake Lively and Anna Kendrick', correct: true },
            { text: 'Kate Winslet and Anna Kendrick', correct: false },
            { text: 'Anne Hathaway and Meryl Streep', correct: false },
        ]
    },
    {
        question: "The Harry Potter (2001-2011) is a:",
        answers: [
            { text: 'Both', correct: true },
            { text: 'Book', correct: false },
            { text: 'Neither', correct: false },
            { text: 'Movie', correct: false },
        ]
    },
    {
        question: "Who was the main actor in a Book-To-Movie adaptation of Forrest Gump (1994)",
        answers: [
            { text: 'Tom Hanks', correct: true },
            { text: 'Tom Hiddleston', correct: false },
            { text: 'Tom Hardy', correct: false },
            { text: 'Tom Holland', correct: false },
        ]
    },
    {
        question: "Shrek (2001) is a:",
        answers: [
            { text: 'Neither', correct: false },
            { text: 'Both', correct: true },
            { text: 'Book', correct: false },
            { text: 'Movie', correct: false },
        ]
    },
    {
        question: "The Fault in Our Stars (2014) is a:",
        answers: [
            { text: 'Neither', correct: false },
            { text: 'Movie', correct: false },
            { text: 'Book', correct: false },
            { text: 'Both', correct: true },
        ]
    },
    {
        question: "The Maze Runner is a Movie-To-Book adaptation",
        answers: [
            { text: 'True', correct: false },
            { text: 'Not Not True', correct: false },
            { text: 'False', correct: true },
            { text: 'Not False', correct: false },
        ]
    },
    {
        question: "Which book was not adapted into a movie:",
        answers: [
            { text: 'The Princess Diaries by Meg Cabot', correct: false },
            { text: 'The Maze Runner by James Dashner', correct: false },
            { text: 'Bleeding Edge by Thomas Pynchon', correct: true },
            { text: 'The Color Purple by Alice Walker', correct: false },
        ]
    },
    {
        question: "Which was not adapted into a movie",
        answers: [
            { text: 'Brokeback Mountain by Annie Proulx', correct: false },
            { text: 'They Both Die at the End by Adam Silvera', correct: true },
            { text: 'The Talented Mr. Ripley by Patricia Highsmith', correct: false },
            { text: 'Simon vs. The Homo Sapiens Agenda by Becky Albertalli', correct: false },
        ]
    },
    {
        question: "Which of this actors was not in The Harry Potter (2001-2011)?",
        answers: [
            { text: 'Daniel Radcliffe', correct: false },
            { text: 'Ralph Fiennes', correct: false },
            { text: 'Maggie Smith', correct: false },
            { text: 'Ian McKellen', correct: true },
        ]
    },
    {
        question: "Which of this actors was both in Dune (2021) and Call Me by Your Name (2017)",
        answers: [
            { text: 'Armie Hammer', correct: false },
            { text: 'Timothée Chalamet', correct: true },
            { text: 'Tom Holland', correct: false },
            { text: 'Zendaya', correct: false },
        ]
    },
    {
        question: "Which of these Meryl Streep movies was not adaptation of a book?",
        answers: [
            { text: 'Julie and Julia (2009)', correct: false },
            { text: 'Mamma Mia! (2008)', correct: true },
            { text: 'Sophie’s Choice (1982)', correct: false },
            { text: 'The Devil Wears Prada (2006)', correct: false },
        ]
    },
    {
        question: "Which of these actors was not in a Death Becomes Her (1992)",
        answers: [
            { text: 'Meryl Streep', correct: false },
            { text: 'Goldie Hawn', correct: false },
            { text: 'Bruce Willis', correct: false },
            { text: 'Brad Pitt', correct: true },
        ]
    },
    {
        question: "Which movie did not come out in 1996?",
        answers: [
            { text: '101 Dalmations', correct: false },
            { text: 'Independence Day', correct: false },
            { text: 'Scream', correct: false },
            { text: 'Miss Congeniality', correct: true },
        ]
    },
    {
        question: "Which of this books was not published in 1996?",
        answers: [
            { text: 'A Game of Thrones by George R. R. Martin', correct: false },
            { text: "Bridget Jones's Diary by Helen Fielding", correct: false },
            { text: 'Twilight by Stephenie Meyer', correct: true },
            { text: 'The Notebook by Nicholas Sparks', correct: false },
        ]
    },
    {
        question: "Which of these movies is not sci-fi?",
        answers: [
            { text: 'The Matrix (1999)', correct: false },
            { text: 'Mission Impossible (1996)', correct: true },
            { text: 'Avatar (2009)', correct: false },
            { text: 'Inception ()2010', correct: false },
        ]
    },
    {
        question: "The Martian (2015) was adapted from a novel with a same name?",
        answers: [
            { text: 'False', correct: false },
            { text: 'Truly false', correct: false },
            { text: 'Falsely true', correct: false },
            { text: 'True', correct: true },
        ]
    },
    {
        question: "Which of these movies has no aliens in it?",
        answers: [
            { text: 'Mars Attacks! (1996)', correct: false },
            { text: 'E.T. (1982)', correct: false },
            { text: 'The Martian (2015)', correct: true },
            { text: 'Arrival (2016)', correct: false },
        ]
    },
];