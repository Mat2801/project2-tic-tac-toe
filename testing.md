# Testing

## Starting off with validation of the code

[CSS Validator](https://jigsaw.w3.org/css-validator/)
![CSS Validation](documents/testing//css1.png)

- I decided to research my errors, after going through my code i could not see any issues withing my CSS. I found that unfortunatly this was an issue with CSS Validator. This was a bug on there end with them being a little outdated and new
code always coming in its hard for the validator to keep up to date. Below are screenshots of a couple of things i found regarding this issue.

![CSS Research](documents/testing//css2.png)

![CSS research](documents/testing//css3.PNG)

[HTML Validator](https://validator.w3.org/)
![HTML Validation](documents/testing//html.PNG) 

[JavaScript Validator](http://pythontutor.com/visualize.html#mode=edit)
![nav.js](documents/testing//java2.png)
![script.js](documents/testing//java1.png)

---

## Browser Compatability

- Tested over 4 different browsers and worked correctly.

![Browser Test](documents/testing//browsercheck.PNG)

---

## Responsivness

- I tested all devices using [ChromeDevTools](https://developer.chrome.com/docs/devtools/)

#### Desktop Tests

- Main Menu screen has 2 buttons on with a hover feature which works when hovered over.
- The Play Game button leads to the game when clicked. 
- The How To Play button leads to the rules when clicked.
![Main Menu](documents/screenshots//Screenshot1.png)

- Play Game has 2 buttons and a game board.
- The Main Menu button takes me back to the main menu screen when clicked.
- The restart button clears the game board ready for a new game when clicked.
- Once clicked on a square it will place either a X or a circle.
![Play Game](documents/screenshots//Screenshot3.png)

- The game board has a hover feature, depending on whos turn it is you will see an X or circle when hovering.
![Play Game](documents/screenshots//Playhover.png)

- When the game is over it will propmt a message and a restart button.
![Game End](documents/screenshots//winning.png)

- How To Play has 1 button this button when clicked returns you to the main menu.
![How To Play](documents/screenshots//Screenshot4.png)

#### Tablet Tests
- All the above test that were taken on the desktop site have also been testing using a tablet all tests have passed. 

- Main Menu tested **Play Game** and **How To Play** button and both worked
![Main Menu](documents/screenshots//Screenshot5.png)

- Play Game tested **Main Menu** and **restart** button both worked. 
- Tested hover feature and clciking on the squares both worked.
- Tested winning message both worked.
![Play Game](documents/screenshots//Screenshot6.png)

- Tested the **Main Menu** button and it worked.
![How To Play](documents/screenshots//Screenshot7.png)

#### Mobile 
- All the above test that were taken on the desktop site have also been testing using a mobile all tests have passed.

- Main Menu tested **Play Game** and **How To Play** button and both worked
![Main Menu](documents/screenshots//Screenshot8.png)

- Play Game tested **Main Menu** and **restart** button both worked. 
- Tested hover feature and clciking on the squares both worked.
- Tested winning message both worked.
![Play Game](documents/screenshots//Screenshot9.png)

- Tested the **Main Menu** button and it worked.
![How To Play](documents/screenshots//Screenshot0.png)

---

## Testing User Stories

##### *First Time User 
- As a first time user, I want to easily understand how to play the game.
   * From the main menu screen there is a button which say **How To Play** click this and you will see all instructions.
- As a first time user, I would like to easily play the game.
   * From the main menu screen there is a button which says **Play Game** click this and you can start playing.
- - As a first time user, I would like to be able to ecit the game when im finished.
   * To exit the game a user can click on the main menu button this will leave there game where it is at and they can come back to it at any point.
   * To start a fresh game the user can then click the restart button.

  ##### *Returning Visitor
- As a returning user, I want to be able to play the game as many times as I wish.
   * Once loaded into the game screen there will be a **reset button** at the top of the users screen this will reset the game 
     as many times as they like.
   * Once the game has finished the user is prompt with a **restart** option.

  ##### *Frequent User Goals
- As a frequent user, I would like to access the game on mobile, tablet and desktop.
   * The game is easily playable home or away due to **responsiveness** for all devices and **browser compatability**
- As a frequent user, I would like to easily navigate straight to the game.
   * The game can easily be played with the by clicking the **Play Game** button.

---

## Current Bugs
- CSS is showing errors as seen on the validation screenshots. This is a known bug with the CSS validator, i have provided     screenshots of the research i have done about these errors and warnings. 
- Gitpod.yml file has 2 errors, these errors are known by Coding Institute. 


#### Bugs that have been fixed
- Main menu image was carrying over to other pages, fixed using javascript to hide the image when otherscreens loaded
- Grid display broke whenever trying to restyle. Fixed by adding extra container and styling the grid seperate.
- Using onClick functions in html fixed using addListenerEvents in Javascript
- Main menu button on rules screen wouldn't display after being used once, fixed by creating a function in javascript allowing it to display the mainmenu function.


Head back to the [ReadMe file](README.md)