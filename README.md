# [Book/Movie Quiz](https://lukab25.github.io/BookMovieQuiz/)

## Introduction

- Book/Movie Quiz is a fun game to test your knowledge on various books and movies. It contains various questions that  test the general knowledge of movies, books and also on book to movie adaptations.

- Book/Movie Quiz is a targeted towards users of all ages as it contains both classics and new movies and books.

- Book/Movie Quiz will offer it's users interactive game that will respond to their answers and will offer a fun way to learn more about the all time favorite movies and books.

- I got the idea and inspiration for the quiz from one of my favourite books Red, White and Royal Blue by Casey McQuiston being adapted into a movie recently. Additionally I love books and movies, so the idea came quite easy to me.

![Am I Responsive](/assets/images/screenshots/validator-tests/am-i-responsive.avif)

## Wireframes

Created using [Balsamiq](https://balsamiq.com)

First sketch on normal size device:
![First sketch](/assets/images/screenshots/first_sketch.avif)

Sketch on tablet or similar size device
![Sketch_tablet](/assets/images/screenshots/sketch_tablet.avif)

Sketch of a phone or similar size device:
![Sketch_tablet](/assets/images/screenshots/sketch_phone.avif)

## About the build

- In the beginning I created three pages that my project website will conisist of, index.html(starter page), quiz.html(quiz game page) and highscores.html, which I later on changed by adding fourth page endscreen.html("final" screen that will be shown after you finish the quiz), to improve my site and for it to be more user efficient. At the same time I created all of the necessary folders and files. I started with a style.css file and a single script.js file, which I slowly separated into three different files, as I kept having issues with the console log reading the functions that were not being used on each site, so to avoid clogging up the console log, I decided to separate the js files.

### index.html and start.js

- Before starting to work on the site I made couple of drawings and wireframes and watched a lot of tutorials as to learn as much as possible about javascript and how to work with it as to try and decide how the site will look and respond to the users. My main inspiration for the style and look of the site came when I stumbled upon the most perfect picture for my background, I decided to keep the same picture across all four pages to keep with the complete consistency of the user experience.
- I started by creating the basic structure and went with the responsive design that will, for the most part, respond to most screen sizes with the viewwidth and viewheight sizing in place, as to avoid extensive use of media queries, as I did on my first project.
- The background of the site is outside view of a cinema with a neon sign and a red tint to the whole picture. To avoid issues with the background interference with any of the elements on the page, I created the semi transparent container that will take up the full vw and vh of the site on smaller screens, but will show more of the beautiful background on larger screens. I decided to use three buttons on the index.html site underneath a large title. I had an idea to create the rules section that will use completely javascript to create and implement all of the rules on click of the button, and also remove them when you interact with the button for the second time.
- The buttons are fully responsive and interactive.
- For the footer I decided to copy and reuse mhe footer from my previous project and to adjust it to fit my current needs, by adjusting and changing colours. I ended up completely changing it and making it fully interactive, they each have their colour, that has some connection to their original site and they change on hover. I got the inspiration from the [UIVERSE website](https://uiverse.io/) as I saw a lot of different options and how to create nice designs.

### quiz.html and script.js

- For the quiz game page, I decided to copy the styles from the initial index.html and work with the same background and container. Here I started to play around with javascript and slowly started implementing questions, answers and all of the functions that are controlling and responding to users actions and interactions with the site. I kept watching multiple tutorials and reading up on how to use javascript and what can you do with it. I was using few tutorials for inspiration, but this one I was using for certain aspect of the code I needed to make my code work: [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k)
- I kept playing with the site and trying out, creating and deleting functions to understand how they work and what happens when you remove certain aspects (of course site mostly broke or didn't respond to interaction).
- Prior to starting to create the quiz, I was writing out all of the questions I could come up with. I decided for the quiz to have total of  27 questions out of which only 10 questions  will be displayed, each question is being chosen at random. 27 questions is slight tribute to myself, as I turned 27 while I was in the process of creating the quiz.
- When discussing everything with my mentor in the first meeting, he asked me if the answers will be randomised as well and will I store the high scores in the Local Storage, which I actually haven't thought much about, but he inspired me to try and create a code to randomise them as well and look into the Local Storage. I ended up writing out the code to randomise answers by following the learning material from code institute, for the pre set answers to be shuffled when each question is loaded up.

### endscreen.html and endscreen.js

- After you finish the quiz, you have an option to save your score. I created a code to display three different messages depending on the score. The messages will display if you get everything correct, ie get 10000 points, if you have less than 10000 points, but more than the lowest high score that is saved on the Local Storage, and if your score is less than the lowest high score on the Local Storage. Each message is being controlled and being imported by javascript.
- The endscreen will only be accessable after you finish the quiz and choose to proceed to save score. Once on endscreen page you will have your message and the final score. If you managed to beat lowest high score you can save your score and it will automatically remove the lowest score from the list and save yours. Once you imput a username and press enter or save score button, you will be automatically transfered onto the highscores.html. Given that the scores are being saved to Local Storage, they will be only visible on the same computer and browser it was played on. You will have an option to go back to home screen or to play the game again.
- Later in the project I couldn't figure out how to create an option for users to save their high scores. So I watched couple of "lessons" outside of the course lessons and a few tutorials on how to implement Local Storage and I came onto tutorial from [James Q Quick](https://www.youtube.com/watch?v=DFhmNLKwwGw) which I changed slightly to fit my site and worked on adding in some improvements.

### highscores.html and highscores.js

- I created a placeholder code that loads on the initial load of the site that will imput placeholder high scores to the Local Storage so the highscores.html is not empty until the game has been played. As placeholder high scores I decided to make a tribute to my nieces and nephews and have their names as current winners with a high score record.
- The page will have the same layout and style as rest of the site.
- From highscores.html you can either go to the home screen or to play the game.

## Features

### Background Image & Adjustable Container

- The site background image responds to the screen change, by hiding the overflow on smaller screen sizes and repeating the image on left and right, on extra large screens. The image repeat function is not distracting from or obstructing any elements of the site. All of the pages have the same background image.
- The adjustable container is set up to be resposive to the screen size by adjusting to the screen width and height. on bigger screens it is keeping the quiz size to an optimum design and pleasing user experience. The container is transparent, to make sure that the full background image is visible. The image outside of the container is vibrant in colour, but not distracting from the content. All of the pages have the same container styles and sizing.
- Inside of the quiz game page the container is set up to change colour to green every time the user selects correct answer and to change to red on incorrect answer. The style is cleared every time a new question is loaded or the game is restarted.

![Background image and container](assets/images/screenshots/features/background-and-container.avif)

### Home screen

- Home screen has a simple yet effective design. It contains game name or "Logo", for the logo I purpusefully decided for it to be static and users can't interact with it. It is followed by three anchor links, that are styled as buttons, all three "buttons" are fully responsive and users can interact with them. On the bottom of the screen we have a footer.
- As soon as the home page loads there is a function that will insert placeholder high scores, to insure that the score list is not empty when opened
- Play game button will take users to the quiz, load the first question. The button has a hover effect that will change the button background colour and the text colour will transit from black to white slowly.
- High scores button will take users to the high score list.  The button has a hover effect that will change the button background colour and the text colour will transit from black to white slowly.
- Rules button when clicked will display all of the rules and the text inside of the button will change to Close Rules, if clicked again it will hide the rules as if they were never there. The rules are completely being implemented by javascript.  The button has a hover effect that will change the button background colour and the text colour will transit from black to white slowly.

![Home screen](assets/images/screenshots/features/home-screen.avif)

![Play game button](assets/images/screenshots/features/play-game-btn.avif)

![High scores button](assets/images/screenshots/features/high-scores-btn.avif)

![Rules button](assets/images/screenshots/features/rules-btn.avif)

![Close rules button](assets/images/screenshots/features/close-rules-btn.avif)

### Quiz game

- The quiz will load completely and display a question randomly from stored array, it will also display all of the answers to the question in a randomised position. When the page is first loaded, you can see the question counter, score, progress bar, followed by question and answers, restart, next and home buttons.
- **Question counter** is completely controlled by javascript and will update with each question that is being answered.
- **Score** will automatically increment any points users win or lose. For each correct answer user answers they will gain 1000 points, but for each wrong answer I have set up an array of point they could lose, the game randomly chooses if user will lose 0, 10, 30, 50 or 100 points on incorrect answer.
- **Progress bar** indicates how far along is the user. After each selected answer, no matter if it is correct or wrong, the progress bar will move for 10%. The progress bar is set up to have a smooth transition, as it filles up the colors will change and expand.
- **Questions**. There is a total of 27 questions (Small tribute to me turning 27 years old), out of which the game will choose random question and implement it into the game. After each question is used, it will be removed from the selection and it won't repeat.
- **Answers**. For each question, there are 4 answers. The order of the answers will change with each time question is loaded. Each answer button has a hover effect that will change the button background colour and the text colour which will transit from black to white slowly. After a user selects their answer, the hover effect is removed from other answers, the selected answer will change colour to either green(showing the answer was correct) or red(showing the answer was wrong), the buttons can not be clicked again.
- **Incorrect answers**. Each time a user selects an incorrect answer or the timer runs out, the correct answer will be revealed. The background of the container will change to red colour to indicate wrong selection was made and the score will be deducted for random amount of points.
- **Correct answers**.The correct answer will light up as green. The background of the container will change to green colour to indicate correct selection was made and the score will be incresed for 1000 points.
- **Restart button** offers users to restart the game from the beggining. The button is disabled on first question, to prevent switching questions, user can see that the button is disabled, by lack of hover effect on the button. After the first question is answered the button is enabled and when clicked, the game will start from the beginning, without reloading the page. The question count, score, the progress bar and answer selection will all return to starting point, ie the changes will be reverted and cleared. The button has a hover effect that will change the button background colour and the text colour will transit from black to white slowly. I added the disable function that changes the background and text colour if the button is not enabled.
- **Next button** lets users switch to next question. The button is disabled until the user makes a selection, , user can see that the button is disabled, by lack of hover effect on the button. After user selects the answer the button is enabled, has hover effect and when clicked it will load a new questions and answers. After the final question has been answered the Next button will change into Save score button The button has a hover effect that will change the button background colour and the text colour will transit from black to white slowly. I added the disable function that changes the background and text colour if the button is not enabled.
- **Save score** button showes up in place of a next button once the final question is answered. Once pressed the user will be taken to the endscreen. In case the user clicks on Restart button, the Save score button will return to Next button state.
- **Home button** offers users an option to return to the home page, without having to click return button on their browser. The button has a hover effect that will change the button background colour and the text colour will transit from black to white slowly.
- **Timer** is used to keep track if the quiz is being played. Starting timer structure was taken from [shecode.ie](https://www.shecodes.io/athena/ 52336-how-to-create-a-countdown-timer-in-javascript#:~:text=let%20count%20%3D%2060%3B%20const%20timer,second%20using%20the%20setInterval%20method.) but it was updated and changed to fit within the site. The timer returns to the starting state every time the question is answered or when the timer runs out. The timer consists of the countdown that is visible to the user and the automatic progress bar that automatically updates and reduces to visually represent the time that is left.

![Quiz game](assets/images/screenshots/features/quiz-game.avif)

![Timer feature](assets/images/screenshots/features/timer-feature.avif)

![Question count, Score and Progress bar](assets/images/screenshots/features/q-count-score&progress-bar.avif)

![Correct answer](assets/images/screenshots/features/correct-answer.avif)

![Incorrect answer selected, revealing correct answer](assets/images/screenshots/features/incorrect-correct-answer.avif)

![Restart button:hover](assets/images/screenshots/features/restart-btn.avif)

![Next button:hover](assets/images/screenshots/features/next-btn.avif)

![Restart and Next button disabled](assets/images/screenshots/features/restart-next-btn-disabled.avif)

![Save Score button:hover](assets/images/screenshots/features/save-score-btn.avif)

![Home button:hover](assets/images/screenshots/features/home-btn.avif)

### Endscreen

- The only way to reach the Endscreen is through playing and finishing the quiz and pressing on Save Score button that replaces the Next button, after last question has been answered.
- The Endscreen will display one of three different messages that depend on the score user managed to receive.
- In case user didn't beat at least the lowest high score, the Username input field will display a message "score too low" and it will disable any input to the field. Apart from that the Save button will be completely disabled.
- If a user beats the lowest high score, they will need to input their username to save their score. The Save button will only be activated once the input field is filled out, after which the user can click on the button or press Enter key to save their score and to be taken to high scores.
- User also has a choice to Replay the quiz or go to the Home screen by pressing on either of those two buttons.
- I added the disable function that changes the background and text colour of username and save button if they are not enabled.

![Endscreen](assets/images/screenshots/features/endscreen.avif)

![Endscreen input enabled](assets/images/screenshots/features/endscreen-input-enabled.avif)

![Endscreen input field filled out](assets/images/screenshots/features/endscreen-input-done.avif)

### High scores

- When the site is first loaded the site will import the placeholder high score values into the Local Storage, as to make sure that the high scores list is not empty on open.
- The high scores are set up to hold only the total of 5 top scores at the time. On open, prior to playing the quiz and beating any of the scores, five placeholder scores are loaded. I made a small tribute to 5 nieces and nephews of mine, by using their names as score holders.
- The high scores has 13 random messages that will change on each load of the scores page. I created various messages to help motivate the users to play the game if they haven't already.
- The page has two buttons, one to take you to the quiz once you press Play Game. and another that will return you to the Home page.
- All of the emoji that loads along side of the randomised messages have a hover effect to offer more interaction with the site

![High Scores page](assets/images/screenshots/features/high-scores.avif)

### Interactive footer

- The footer consists of [Facebook](https://www.facebook.com), [Instagram](https://www.instagram.com), [X or Twitter](https://www.twitter.com), [Youtube](https://www.youtube.com) and links for [Code Institute Website](https://codeinstitute.net/ie/) and [my own linked in profile](https://www.linkedin.com/in/luka-black-lb96/).
- Each link has an interactive links that are styled as a button, that respond to the hover by changing colours and adding a glow effect. Once clicked on, each button will take you to their own website in another tab.

![Footer](assets/images/screenshots/features/footer.avif)

## Features left to implement

- None, I managed to implement all of the features I thought of at the time

## Possible future features

- Adding more questions and/or replacing the existing questions with time.
- Fireworks when maximum possible score is reached.
- Offering option for users to add their own questions and answers through a specialised form.
- Creating multiple branches for different quiz options, implementing diferent categories of questions, not just book and movie related.

## Testing

|           Action            |                                Expectation                                 | Outcome |
| :-------------------------: | :------------------------------------------------------------------------: | :-----: |
|      Home screen       |                      Loads page with no issues                       |  Pass   |
|      Background image       |                          Adjusts with screen size                          |  Pass   |
|          Transparent container           |                          Adjusts with screen size             |  Pass   |
|        Play game button        | Opens and starts the quiz in same tab |  Pass   |
|   High scores button     |                          Opens and displays high scores                           |  Pass   |
|           Rules button     |    Displays rules container on click, changes to Close Rules button        |  Pass   |
|      Close Rules button     |    Hides rules container on click, changes to Rules button     |  Pass   |
|      Home screen buttons:hover     |      Change background colour and change text colour with transition effect |  Pass   |
|       Quiz game play      |                      Loads page with no issues                       |  Pass   |
|       Question count      |                      Displays and updates correct question count                       |  Pass   |
|       Score      |                      Displays and updates correct without issues                       |  Pass   |
|       Progress bar      |                      Displays and updates progress on answered question              |  Pass   |
|   Timer count     |     Timer is loaded and increments correctly with each second                   |  Pass   |
|   Timer bar     |     timer bar reduces correctly in regards to the remaining time on the count                   |  Pass   |
|       Question      |    Loads a random question each time/removes used questions not to display again        |  Pass   |
|      Answer buttons     |         Loads  preset answers in a random order           |  Pass   |
|      Answer buttons:hover     |      Change background colour and change text colour with transition effect |  Pass   |
|      Answer buttons click     |   React to click and select as answer/Change colour and reveal if answer is true/false |  Pass   |
|   Correct Answer Selected     |     If a correct answer is selected the button changes colour to green and correct points are added to the score                   |  Pass   |
|   Incorrect Answer Selected     |     If a incorrect answer is selected the button changes colour to red, random points are deducted from preset array and the correct answer is displayed                  |  Pass   |
| Answer buttons post click:hover  |      Hover effect is disabled after an answer is selected |  Pass   |
|        Restart button        | Disabled before the answer is selected, after selecting answer, when clicked it restores original functions(questions, question count, score, progress bar and timer) without reloading the page |  Pass   |
|   Next button     |     Next button is disabled until the answer is selected                   |  Pass   |
|   Next/restart button:disabled     |     Button is disabled and has different style to indicate it is inactive                   |  Pass   |
|   Next button click     |     After selecting an answer it loads a new question and answers, updates question count, score, progress bar, restores timer to initial settings and removes used question from list                          |  Pass   |
|    Save score button    |           Save score button replaces the existing next button after the 10th question is answered           |  Pass   |
|    Save score button click   |           Takes user to endscreen     |  Pass   |
|           Home button     |                          Takes user to home screen                      |  Pass   |
|      Quiz control buttons:hover     |      Change background colour and change text colour with transition effect, unless disabled |  Pass   |
|      Endscreen      |        Loads page with no issues       |  Pass   |
|      Message section     |        Displays one of three messages depending on the score total       |  Pass   |
|      Message section:hover      |       Transitions colours the "border" to draw attention to the message      |  Pass   |
|        Final score   |       Displays the correct total score user managed to achieve        |  Pass   |
|        Username input    |       Responds to interaction from user. Required to save score        |  Pass   |
|        Username input disabled    |       Disabled when score is too low, displays message and styled differently to let user know it doesn't work and why,        |  Pass   |
|      Username input:hover     |      Change background colour and size if score is high enough to be saved |  Pass   |
|      Save button     |       Doesn't work without username input, takes user to the high scores screen after criteria met     |  Pass   |
|      Save button:disabled     |       Disabled if score is too low, has different style to indicate it is not enabled     |  Pass   |
|       Replay     |      Takes user to the quiz, to play the quiz again         |  Pass   |
|           Home button     |                          Takes user to home screen                      |  Pass   |
|      Endscreen buttons:hover     |      Change background colour and change text colour with transition effect |  Pass   |
|       High scores      |                      Loads page with no issues                       |  Pass   |
|       High scores message      |      Changes and displays different message when site reloads        |  Pass   |
|       Scores    |       Displayed in right order (highest-lowest)        |  Pass   |
|        Scores update    |        Scores are being updated when Local Storage is changed       |  Pass   |
|       Play     |      Takes user to the quiz, to play the quiz         |  Pass   |
|           Home button     |                          Takes user to home screen                      |  Pass   |
|           Footers           |                          Adjust with screen size                           |  Pass   |
|     Footer icons:hover      |                          Changes colour on hover                           |  Pass   |
|    Footer Facebook icon     |                    Opens Facebook site in separate tab                     |  Pass   |
|    Footer Instagram icon    |                    Opens Instagram site in separate tab                    |  Pass   |
|     Footer Twitter icon     |                     Opens Twitter site in separate tab                     |  Pass   |
|     Footer Youtube icon     |                     Opens Youtube site in separate tab                     |  Pass   |
| Footer Code Institute link  |                 Opens Code Institute site in separate tab                  |  Pass   |
| Footer Code institute:hover |                          Changes colour on hover                           |  Pass   |
|   Footer Luka Black link    |                     Opens my LinkedIn in separate tab                      |  Pass   |
|   Footer Luka Black:hover   |                          Changes colour on hover                           |  Pass   |
|     Home responsivness      |               Home page fully responsive with screen changes               |  Pass   |
|    Quiz game responsivness    |             Quiz game page fully responsive with screen changes              |  Pass   |
|    Endscreen responsivness    |               Endscreen page fully responsive with screen changes               |  Pass   |
| High Score responsivness  |           High score page fully responsive with screen changes           |  Pass   |

## Troubleshooting

- I kept having issues in the console log from certain functions that were not being used on each site, so I decided to separate all of the javascript code by pages, to prevent console log being clogged up with errors, when they were not real errors.
- After building the quiz and implementing most of the  code, I kept having issues with remaining answer buttons still having a hover effect after user makes a choice for their answer. I kept trying to find solutions online and couldn't find answers anywhere. I even tried running that part of the code through ChatGPT but it was unsucessful in giving me the right answer. No matter what I tried it didn't work, so I spent couple of days on and off playing with the code and trying to merge different event listeners and functions to get it to work and I finally managed to figure it out and disable the hover effect once the user selects an answer.
- I had issues trying to understand the Local Storage and how to construct it, I watched multiple tutorials and in the end I decided to following a tutorial from [James Q Quick](https://www.youtube.com/watch?v=DFhmNLKwwGw) and adding my own minor changes to it.
- Given that we are using font awesomes older version the logo for [X or Twitter](https://www.twitter.com) can not be changed to the new logo, and for that reason it has remained the same.
- For the longest time I have been trying to implement the code that will display the correct answer if an incorrect answer was selected by the user. I created, deleted and recreated the same part of the code many times, but was unable to get it to work as I was accessing the variable from one function, and needed to use it within a different function. After days of trying to construct that code, I decided to test out each section of my code to see which parts will be able to read the file and extract variables from within the function, by running multiple console.logs. I managed to get a response from the console log, at the bottom of the code, after every function was already called and was running. I constructed my showCorrectAnswer code and it worked. I tryed moving it in other spots and it didn't work, so I just decided to leave it on the bottom of the file, and have it working from there.
- After my final meeting with my mentor, he instructed me that it would be good for me to remove excess blank rows and to add more comments explaining what each function and or code does. I went through and I fixed blank rows and added comments where necessary. While I was doing that I fixed couple of typos and unnecessary parts of code I found along the way, I played a little bit more with styles and finalised the look and feel of the site.

### Unfixed bugs

- There are no unfixed bugs that I am aware off

## Validator testing

### Performance

- The site was checked and is working seamlessly and without errors or problems in multiple browsers: Safari, Chrome, Firefox
- The site was tested on multiple screen sizes and is working seamslessly without any errors or problems.

- I checked the whole site via lighthouse in devtools and made sure that the site is easily readable and fully accessible. Here are the reports for each page:

#### index.html

![Lighthouse performance index.html](assets/images/screenshots/validator-tests/index.html-lighthouse.avif)

#### quiz.html

![Lighthouse performance quiz.html](assets/images/screenshots/validator-tests/quiz.html-lighthouse.avif)

#### endscreen.html

![Lighthouse performance endscreen.html](assets/images/screenshots/validator-tests/endscreen.html-lighthouse.avif)

#### highscores.html

![Lighthouse performance highscores.html](assets/images/screenshots/validator-tests/highscores.html-lighthouse.avif)

### HTML, CSS and JavaScript

#### HTML

- index.html Error found on line 57, inside of the footer. There was no closing tag for the unordered list. It was corrected and fixed. After checking the rest of the pages, I noticed the same closing tag was missing in all of the pages and I corrected all of them prior to running any other tests.
- quiz.html had an arror where it found a stray closing div tag that was unnecessary. I deleted the closing tag and error was cleared
- endscreen.html has no errors
- highscores.html has no errors. It has one warning that the h2 element is empty, but that is intentional, as it is being filled out by javascript.

#### CSS

- The CSS file had two errors and two warnings all being connected to the translate style that was unnecessary. I corrected the CSS file and removed them.

#### JavaScript

- I ran all of my javascript code throuhh jslint to check my code and it came up with couple of warnings, but no errors. I removed excess unused variables and ran the code again, there were no major warnings, errors or issues spotted.

## Deployment

- The site was deployed to GitHub pages.

- Steps of deployment:

1. Open repository [Book/Movie Quiz github](https://github.com/LukaB25/BookMovieQuiz).
2. Go to settings.
3. Locate Pages in the menu section on the left of the screen.
4. Click on none under the Branch and select main option.
5. Click on the save button.
6. After couple of minutes reload the page and you will have a live site at the top of the site.
7. Click on the link and it will take you to a live site. [Book/Movie Quiz](https://lukab25.github.io/BookMovieQuiz/)

- Local deployment steps:

1. Open my repository [Book/Movie Quiz github](https://github.com/LukaB25/BookMovieQuiz).
2. Locate and click on the green button with Code written on it.
3. Copy the link from the menu
4. Clone the code onto your machine and start working on the code.

## Credits

### Media

- The photos used on the site were taken from [PixaBay](https://www.pixabay.com) and [Unsplash](https://www.unsplash.com)
- The Favicon Icon was downloaded from: [icon8](https://icons8.com/icon/FoDhNGl8I5hv/clapper-board)

### Content

- Few lines of code were taken from [James Q Quick - youtube video and channel](https://www.youtube.com/watch?v=DFhmNLKwwGw); [shecode.ie](https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript#:~:text=let%20count%20%3D%2060%3B%20const%20timer,second%20using%20the%20setInterval%20method.); [Web Dev Simplified - youtube video and channel](https://www.youtube.com/watch?v=riDzcEQbX6k).
- I used a lot of Youtube video tutorials and lessons to learn more about javascript and how to use and implement it.
- I used an open source site for help with few lines of code to improve my site by implementing more responsive buttons in the footer. I used css and changed it slightly to benefit my site and style taken from [Uiverse.io](<https://uiverse.io/mrhyddenn/red-stingray-4>)
- Starting steps and few lines of code came from previous lessons and Love Maths project, as well as couple of online video tutorials for better understanding of Javascript
