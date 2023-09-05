# [Book/Movie Quiz](add link later)


## Introduction

- Book/Movie Quiz is a fun game to test your knowledge on various books and movies. It contains various questions that  test the general knowledge of movies, books and also on book to movie adaptations.

- Book/Movie Quiz is a targeted towards users of all ages as it contains both classics and new movies and books.

- Book/Movie Quiz will offer it's users interactive game that will respond to their answers and will offer a fun way to learn more about the all time favorite movies and books. 

- I got the idea and inspiration for the quiz from one of my favourite books Red, White and Royal Blue by Casey McQuiston being adapted into a movie recently. Additionally I love books and movies, so the idea came quite easy to me.

![Am I Responsive](add link later)

## Wireframes

Created using [Balsamiq](https://balsamiq.com)

First sketch on normal size device:
![First sketch](/assets/images/screenshots/first_sketch.png)

Sketch on tablet or similar size device
![Sketch_tablet](/assets/images/screenshots/sketch_tablet.png)

Sketch of a phone or similar size device:
![Sketch_tablet](/assets/images/screenshots/sketch_phone.png)

## About the build:

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



### Features left to implement



## Testing

|           Action            |                                Expectation                                 | Outcome |
| :-------------------------: | :------------------------------------------------------------------------: | :-----: |
|      Home screen       |                      Loads page with no issues                       |  Pass   |
|      Background image       |                          Adjusts with screen size                          |  Pass   |
|          Transparent container           |                          Adjusts with screen size             |  Pass   |
|        Play game button        | Opens and starts the quiz in same tab |  Pass   |
|   High scores button     |                          Opens and displays high scores                           |  Pass   |
|           Rules button     |                          Display and hides rules container on click                      |  Pass   |
|      Home screen buttons:hover     |      Change background colour and change text colour with transition effect |  Pass   |
|       Quiz game play      |                      Loads page with no issues                       |  Pass   |
|       Question count      |                      Displays and updates correct question count                       |  Pass   |
|       Score      |                      Displays and updates correct without issues                       |  Pass   |
|       Progress bar      |                      Displays and updates progress on answered question              |  Pass   |
|       Question      |    Loads a random question each time/removes used questions not to display again        |  Pass   |
|      Answer buttons     |         Loads  preset answers in a random order           |  Pass   |
|      Answer buttons:hover     |      Change background colour and change text colour with transition effect |  Pass   |
|      Answer buttons click     |   React to click and select as answer/Change colour and reveal if answer is true/false |  Pass   |
| Answer buttons post click:hover  |      Hover effect is disabled after an answer is selected |  Pass   |
|        Restart button        | Disabled on first question, after first question it restarts the quiz, restores original functions(questions, question count, score, progress bar) without reloading the page |  Pass   |
|   Next button     |     Next button is disabled until the answer is selected                   |  Pass   |
|   Next button click     |     After selecting an answer it loads a new question and answers, updates question count, score, progress bar and removes used question from list                          |  Pass   |
|    Save score button    |           Save score button replaces the existing next button after the 10th question is answered           |  Pass   |
|    Save score button click   |           Takes user to endscreen     |  Pass   |
|           Home button     |                          Takes user to home screen                      |  Pass   |
|      Quiz control buttons:hover     |      Change background colour and change text colour with transition effect |  Pass   |
|      Endscreen      |        Loads page with no issues       |  Pass   |
|      Message section     |        Displays one of three messages depending on the score total       |  Pass   |
|      Message section:hover      |       Transitions colours the "border" to draw attention to the message      |  Pass   |
|        Final score   |       Displays the correct total score user managed to achieve        |  Pass   |
|        Username input    |       Responds to interaction from user. Required to save score        |  Pass   |
|      Username input:hover     |      Change background colour |  Pass   |
|      Save button     |       Doesn't work without username input, takes user to the home screen after criteria met     |  Pass   |
|       Replay     |      Takes user to the quiz, to play the quiz again         |  Pass   |
|           Home button     |                          Takes user to home screen                      |  Pass   |
|      Endscreen buttons:hover     |      Change background colour and change text colour with transition effect |  Pass   |
|       High scores      |                      Loads page with no issues                       |  Pass   |
|       Scores    |       Displayed in right order (highest-lowest)        |  Pass   |
|        Scores update    |        Scores are being updated when Local Storage is changed       |  Pass   |
|       Play     |      Takes user to the quiz, to play the quiz         |  Pass   |
|           Home button     |                          Takes user to home screen                      |  Pass   |
|           |               |  Pass   |
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
|             |                      Opens Form site in separate tab                       |  Pass   |
|           |                     Opens Twitch site in separate tab                      |  Pass   |
|            |                      Opens Skype site in separate tab                      |  Pass   |
|           |                     Opens Twitch site in separate tab                      |  Pass   |
|     Home responsivness      |               Home page fully responsive with screen changes               |  Pass   |
|    Recipes responsivness    |             Recipes page fully responsive with screen changes              |  Pass   |
|    Contact responsivness    |               Form page fully responsive with screen changes               |  Pass   |
| Confirmation responsivness  |           Confirmation page fully responsive with screen changes           |  Pass   |


## Troubleshooting



### Unfixed bugs:



## Validator testing



## Deployment

- The site was deployed to GitHub pages.

- Steps of deployment:

1. Open repository [Book/Movie Quiz github](https://github.com/LukaB25/BookMovieQuiz).
2. Go to settings.
3. Locate Pages in the menu section on the left of the screen.
4. Click on none under the Branch and select main option.
5. Click on the save button.
6. After couple of minutes reload the page and you will have a live site at the top of the site.
7. Click on the link and it will take you to a live site. [My live site](link to be added)

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

- Few lines of code were taken from [StackOverflow]()
- I used an open source site for help with few lines of code to improve my site by implementing more responsive buttons in the footer. I used css and changed it slightly to benefit my site and style taken from [Uiverse.io](<https://uiverse.io/mrhyddenn/red-stingray-4>)
- Starting steps and few lines of code came from previous lessons and Love Maths project, as well as couple of online video tutorials for better understanding of Javascript
