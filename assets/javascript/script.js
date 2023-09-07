document.addEventListener('load', console.log('Quiz loaded completely.'));

// Constants and selectors
const question = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const answerContainer = document.getElementById('answer-btns');
const restartButton = document.getElementById("restart-btn");
const nextButton = document.getElementById("next-btn");
const yourScore = document.getElementById('score');
const questionCounter = document.getElementById('question-counter');
const scoreCounter = document.getElementById('score-counter');
const progressBar = document.getElementById('progress-bar');

let currentQuestion = {};
let randomQuestion;
let acceptingAnswers = false;
let score = 0;
let questionCount = 0;
let availableQuestions = [];
const correctPoints = 1000;
const incorrectPoints = [0, 10, 30, 50, 100];
const maxQuestions = 10;

// Questions and their answers
const questions = [
    {
        question: "The Hunger Games is a:",
        answers: [
            { text: 'Both', correct: true },
            { text: 'Book', correct: false },
            { text: 'Movie', correct: false },
            { text: 'Neither', correct: false },
        ]
    },
    {
        question: "Trilogy under the name Divirgent is a:",
        answers: [
            { text: 'Both', correct: true },
            { text: 'Movie', correct: false },
            { text: 'Book', correct: false },
            { text: 'Neither', correct: false },
        ]
    },
    {
        question: "Which of the following was not Book-To-Movie adaptation?",
        answers: [
            { text: 'Titanic (1997)', correct: true },
            { text: 'The Godfather (1972)', correct: false },
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
        question: "In which movie does the main heroine use a bow and arrows to take down the Capitol?",
        answers: [
            { text: 'The Hunger Games (2012)', correct: true },
            { text: 'The Hobbit (2012)', correct: false },
            { text: 'Smurfs (2011)', correct: false },
            { text: 'Matilda (1996)', correct: false },
        ]
    },
    {
        question: "Jurassic Park (1993) is a:",
        answers: [
            { text: 'Both', correct: true },
            { text: 'Book', correct: false },
            { text: 'Neither', correct: false },
            { text: 'Movie', correct: false },
        ]
    },
    {
        question: "Hidden figures (2016) is a:",
        answers: [
            { text: 'Both', correct: true },
            { text: 'Neither', correct: false },
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
            { text: 'Yes', correct: true },
            { text: 'Who?', correct: false },
            { text: 'No', correct: false },
            { text: 'Maybe', correct: false },
        ]
    },
    {
        question: "Which two actresses were in a Book-To-Movie adaptation of A Simple Favour (2018)?",
        answers: [
            { text: 'Blake Lively and Anna Kendrick', correct: true },
            { text: 'Blake Lively and Anne Hathaway', correct: false },
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
        question: "Who was the main actor in a Book-To-Movie adaptation of Forrest Gump (1994)?",
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
            { text: 'Both', correct: true },
            { text: 'Neither', correct: false },
            { text: 'Book', correct: false },
            { text: 'Movie', correct: false },
        ]
    },
    {
        question: "The Fault in Our Stars (2014) is a:",
        answers: [
            { text: 'Both', correct: true },
            { text: 'Neither', correct: false },
            { text: 'Movie', correct: false },
            { text: 'Book', correct: false },
        ]
    },
    {
        question: "The Maze Runner is a Movie-To-Book adaptation?",
        answers: [
            { text: 'False', correct: true },
            { text: 'True', correct: false },
            { text: 'Not Not True', correct: false },
            { text: 'Not False', correct: false },
        ]
    },
    {
        question: "Which book was not adapted into a movie:",
        answers: [
            { text: 'Bleeding Edge by Thomas Pynchon', correct: true },
            { text: 'The Princess Diaries by Meg Cabot', correct: false },
            { text: 'The Maze Runner by James Dashner', correct: false },
            { text: 'The Color Purple by Alice Walker', correct: false },
        ]
    },
    {
        question: "Which book was not adapted into a movie?",
        answers: [
            { text: 'They Both Die at the End by Adam Silvera', correct: true },
            { text: 'Brokeback Mountain by Annie Proulx', correct: false },
            { text: 'The Talented Mr. Ripley by Patricia Highsmith', correct: false },
            { text: 'Simon vs. The Homo Sapiens Agenda by Becky Albertalli', correct: false },
        ]
    },
    {
        question: "Which actor was not in The Harry Potter (2001-2011)?",
        answers: [
            { text: 'Ian McKellen', correct: true },
            { text: 'Daniel Radcliffe', correct: false },
            { text: 'Ralph Fiennes', correct: false },
            { text: 'Maggie Smith', correct: false },
        ]
    },
    {
        question: "Which actor was both in Dune (2021) and Call Me by Your Name (2017)?",
        answers: [
            { text: 'Timothée Chalamet', correct: true },
            { text: 'Armie Hammer', correct: false },
            { text: 'Tom Holland', correct: false },
            { text: 'Zendaya', correct: false },
        ]
    },
    {
        question: "Which one of Meryl Streep movies was not an adaptation of a book?",
        answers: [
            { text: 'Mamma Mia! (2008)', correct: true },
            { text: 'Julie and Julia (2009)', correct: false },
            { text: 'Sophie’s Choice (1982)', correct: false },
            { text: 'The Devil Wears Prada (2006)', correct: false },
        ]
    },
    {
        question: "Which actor was not in a Death Becomes Her (1992)?",
        answers: [
            { text: 'Brad Pitt', correct: true },
            { text: 'Meryl Streep', correct: false },
            { text: 'Goldie Hawn', correct: false },
            { text: 'Bruce Willis', correct: false },
        ]
    },
    {
        question: "Which movie did not come out in 1996?",
        answers: [
            { text: 'Miss Congeniality', correct: true },
            { text: '101 Dalmations', correct: false },
            { text: 'Independence Day', correct: false },
            { text: 'Scream', correct: false },
        ]
    },
    {
        question: "Which books was not published in 1996?",
        answers: [
            { text: 'Twilight by Stephenie Meyer', correct: true },
            { text: 'A Game of Thrones by George R. R. Martin', correct: false },
            { text: "Bridget Jones's Diary by Helen Fielding", correct: false },
            { text: 'The Notebook by Nicholas Sparks', correct: false },
        ]
    },
    {
        question: "Which movie does not belong in sci-fi genre?",
        answers: [
            { text: 'Mission Impossible (1996)', correct: true },
            { text: 'The Matrix (1999)', correct: false },
            { text: 'Avatar (2009)', correct: false },
            { text: 'Inception (2010)', correct: false },
        ]
    },
    {
        question: "The Martian (2015) was adapted from a novel with a same name?",
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
            { text: 'Truly false', correct: false },
            { text: 'Falsely true', correct: false },
        ]
    },
    {
        question: "Which movie has no aliens in it?",
        answers: [
            { text: 'The Martian (2015)', correct: true },
            { text: 'Mars Attacks! (1996)', correct: false },
            { text: 'E.T. (1982)', correct: false },
            { text: 'Arrival (2016)', correct: false },
        ]
    },
];

// Starts the quiz
startGame = () => {
    questionCount = 0;
    score = 0;
    availableQuestions = [...questions];
    nextQuestion();
    restartButton.disabled = true;
    if (restartButton.disabled) {
        removeHoverEffect(document.querySelectorAll('.restart-btn'));
    }
};

// Loads the next random question from the pre set questions
nextQuestion = () => {
    acceptingAnswers = true;

    startTimer();

    // Stores the total score won to local storage when all 10 questions are answered
    if (availableQuestions.length === 0 || questionCount >= maxQuestions) {
        localStorage.setItem('newestScore', score);
        console.log('Quiz finished. Save your score.');

        // Take user to endscreen to save the score
        return window.location.assign('endscreen.html');
    }

    // Incrementing the question number and adding it to quiz
    questionCount++;
    questionCounter.innerText = `${questionCount}/${maxQuestions}`;

    clearAnswers();
    removeAnswerEventListeners();

    // Choosing the random question that will be implemented into the quiz
    randomQuestion = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[randomQuestion];
    question.innerText = currentQuestion.question;

    nextButton.disabled = true;
    restartButton.disabled = true;

    // Checks if the next and restart buttons are disabled to remove hover styles
    if (nextButton.disabled || restartButton.disabled) {
        removeHoverEffect(document.querySelectorAll('.next-btn'));
        removeHoverEffect(document.querySelectorAll('.restart-btn'));
    }

    // Clear container 
    document.querySelector('.container').classList.remove('correct', 'wrong');
    document.querySelector('footer').classList.remove('correct', 'wrong');

    // Random answers
    const arrayAnswers = currentQuestion.answers;

    for (let i = arrayAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayAnswers[i], arrayAnswers[j]] = [arrayAnswers[j], arrayAnswers[i]];
    }


    // Insert a button for each answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'answer-btn', 'answer', 'btn-hover');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerContainer.appendChild(button);

        const buttons = document.querySelectorAll('.answer-btn');

        //  Event listener cheking when answer was selected on each button 
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                selectAnswer(e);
                stopTimer();
                // Remove hover from all buttons when any button is clicked
                removeHoverEffect(document.querySelectorAll('.answer-btn'));
            });
        });
    });
    // Removes used question from an array of questions
    availableQuestions.splice(randomQuestion, 1);
};

// Timer
const timerCount = document.getElementById('timer-count');
const timerProgressBar = document.getElementById('timer-progress-bar');
timerCount.textContent = '';
const totalCount = 30;
let count = totalCount;
let timer;
let timerWorking = false;

function startTimer() {
    restartTimer(); // Restart the timer before starting a new one
    if (!timerWorking) {
        timerWorking = true;
        timer = setInterval(function () {
            count--;
            timerCount.innerText = `${count}/30s`;

            let timerProgressWidth = (count / 30) * 100;

            if (count > 0) {
                // Keeps track of the timer and reduces in size with each second that passes
                timerProgressBar.style.width = `${timerProgressWidth}%`;
            } else if (count === 0) {
                clearInterval(timer);
                console.log("Time's up!");
                // Keeps track of the timer and reduces completely when timer reaches 0
                timerProgressBar.style.width = `${timerProgressWidth}%`;

                // When timer reaches 0, the game applies everything as if the user selected wrong answer.
                // Various functions and settings are applied
                document.querySelector('.container').classList.add('wrong');
                document.querySelector('footer').classList.add('wrong');

                acceptingAnswers = false;

                if (acceptingAnswers) return;

                removeAnswerEventListeners();

                // Increments the progress bar as if the user selected an answer
                progressBar.style.width = `${(questionCount / maxQuestions) * 100}%`;

                // Enables next and restart buttons, adds their hover effects and removes hover effect from answer button
                nextButton.disabled = false;
                restartButton.disabled = false;
                removeHoverEffect(document.querySelectorAll('.answer-btn'));
                returnHoverEffect(document.querySelectorAll('.restart-btn'));
                returnHoverEffect(document.querySelectorAll('.next-btn'));

                console.log('Sadly time ran out.');

                // Reveals correct answer, deducts random points and stops timer
                showCorrectAnswers();
                deductPoints();
                stopTimer();

                // If the last question was answered or timer ran out, it changes the next button to save score button
                if (availableQuestions.length === 0 || questionCount >= maxQuestions) {
                    // Replace Next button text with Save Highscore text
                    nextButton.innerHTML = '<i class="far fa-save"></i> Save Score';
                    console.log('Quiz finished. Save your score.');
                }
            }
        }, 1000);
        restartButton.addEventListener('click', restartGame);
        nextButton.addEventListener('click', nextQuestion);
    }
}

// Restarts the timer to starting point
function restartTimer() {
    clearInterval(timer);
    count = totalCount;
    timerCount.innerText = `${count}/30s`;
}

// Stops and sets up timer for next question
function stopTimer() {
    clearInterval(timer);
    count = totalCount;
    timerCount.innerText = `${count}/30s`;
    timerProgressBar.style.width = `100%`;
    timerWorking = false;
}


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

// Adds status class
function addStatusClass(element, correct) {
    removeStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

// Removes status class
function removeStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// Makes a random selection on how many points the user is loosing from preset array
function deductPoints() {
    const randomDeductor = Math.floor(Math.random() * incorrectPoints.length);
    const selectedDeductionPoints = incorrectPoints[randomDeductor];

    score -= selectedDeductionPoints;
    scoreCounter.innerText = score;
    console.log(`You lost ${selectedDeductionPoints} points.`);
}

// Parts of code were used from: https://www.youtube.com/watch?v=riDzcEQbX6k
// Targets clicked answer as a selected answer and checks if it is correct or incorrect
function selectAnswer(e) {
    if (!acceptingAnswers) return;

    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    document.querySelector('.container').classList.remove('correct', 'wrong');

    // Changes the container background colour to green on correct and red on incorrect answer
    if (correct === 'true') {
        document.querySelector('.container').classList.add('correct');
        document.querySelector('footer').classList.add('correct');
    } else {
        document.querySelector('.container').classList.add('wrong');
        document.querySelector('footer').classList.add('wrong');
    }

    // Update the progress bar with every answer
    progressBar.style.width = `${(questionCount / maxQuestions) * 100}%`;

    // If selected answer is correct it adds points
    // If selected answer is incorrect it deducts points
    if (correct) {
        score += correctPoints;
        scoreCounter.innerText = score;
        console.log(`That was a correct answer, you win ${correctPoints} points.`);
    } else {
        showCorrectAnswers();
        console.log('Sadly that was an incorrect answer.');
        deductPoints();
    }

    addStatusClass(selectedButton, correct);

    // Checks if the last question was answered or timer ran out, it changes the next button to save score button
    if (availableQuestions.length === 0 || questionCount >= maxQuestions) {
        // Replace Next button text with Save Score text
        nextButton.innerHTML = '<i class="far fa-save"></i> Save Score';
    }

    acceptingAnswers = false;

    // Enables next and restart button and returns their hover effects
    nextButton.disabled = false;
    restartButton.disabled = false;
    if (!restartButton.disabled) {
        returnHoverEffect(document.querySelectorAll('.restart-btn'));
    }
    if (!nextButton.disabled) {
        returnHoverEffect(document.querySelectorAll('.next-btn'));
    }
    restartButton.addEventListener('click', restartGame);
    nextButton.addEventListener('click', nextQuestion);
}

// Removes event listeners from answer buttons
function removeAnswerEventListeners() {
    answerButtons.forEach(answerButton => {
        answerButton.removeEventListener('click', selectAnswer);
    });
}

// Removes answers to previous question to make room for new answers
function clearAnswers() {
    while (answerContainer.firstChild) {
        answerContainer.removeChild(answerContainer.firstChild);
    }
}

// Clear existing answers and restart the game with all of the values set back to 0
// when Restart button is clicked
restartGame = () => {
    clearAnswers();
    removeAnswerEventListeners();

    // Changes the Save Score button back to Next button if the game is restarted 
    // after final question is answered
    if (!availableQuestions.length === 0 || questionCount >= maxQuestions) {
        // Replace Save Score text with Next button text
        nextButton.innerHTML = '<i class="fas fa-arrow-circle-right"></i> Next';
    }

    console.log('Restarting quiz...');

    // Resets all progress made to starting settings
    questionCount = 0;
    scoreCounter.innerText = 0;
    score = 0;
    progressBar.style.width = `0%`;

    // Reloads all of the questions, to return previously removed used questions
    availableQuestions = [...questions];

    // Loads up the new question
    nextQuestion();

    // Disables restart button and removes hover effect to prevent repeat clicking
    restartButton.disabled = true;
    if (restartButton.disabled) {
        removeHoverEffect(document.querySelectorAll('.restart-btn'));
    }
};

// Starts the game on page load
startGame();

// Reveals correct answers when user chooses incorrect answer or the timer runs out.
function showCorrectAnswers() {
    const currentAnswers = currentQuestion.answers;

    currentAnswers.forEach(answer => {
        const answerButton = document.querySelector(`.answer-btn[data-correct="true"]`);

        if (answer.correct) {
            answerButton.classList.add('correct');
        } else {
            answerButton.classList.add('wrong');
        }
    });
}