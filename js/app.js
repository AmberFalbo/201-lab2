'use strict';

// Score scoreCounter
var scoreCounter = 0;

// getting the users name
var userName = prompt('Howdy, what is your name?');

// personalized welcome to page
alert('Welcome ' + userName + ' to a page all about me! Let us see what you can guess about me, good luck!');
// console.log('Hello ' + userName + ' welcome to my guessing game!');

// Global Array for the yes and no answers
var yesNoArray = ['yes', 'y' , 'no' , 'n'];
//                  0     1     2      3

// guess if I have 4 cats
function catAmount(){
  var howManyCats = prompt(userName + ' do you think I have 4 cats?').toLowerCase();

  if(howManyCats.toLowerCase() === yesNoArray[0] || howManyCats.toLowerCase() === yesNoArray[1]){
    alert('YES! ' + userName + ' more cats the better!');
    // console.log('correct');
    scoreCounter++;
  } else if (howManyCats.toLowerCase() === yesNoArray[3] || howManyCats.toLowerCase() === yesNoArray[4]){
    alert(userName + ' I know I do not always have cats falling off of me but I do in fact have 4 cats.');
    // console.log('incorrect');
  } else {
    prompt(userName + ' please answer with yes or no');
  }
}

// guess if I'm always eating
function foodMonster(){
  var alwaysEating = prompt('Do you think Im constantly eating in class while coding?');

  if(alwaysEating.toLowerCase() === yesNoArray[0] || alwaysEating.toLowerCase() === yesNoArray[1]){
    alert('That is correct ' + userName + ' coding needs brain food, snacks all every day!');
    // console.log('correct');
    scoreCounter++;
  } else if (alwaysEating.toLowerCase() === yesNoArray[2] || alwaysEating.toLowerCase() === yesNoArray[3]){
    alert('That is very kind of you ' + userName + ' but I am always eating and probably eating right now.');
    // console.log('incorrect');
  } else{
    prompt(userName + ' please answer with yes or no');
  }
}

// guess if I have braces
function bracesFace(){
  var braces = prompt('Do I have braces?');

  if(braces.toLowerCase() === yesNoArray[0] || braces.toLowerCase() === yesNoArray[1]){
    alert('That is correct ' + userName + ' I am 32 and have braces as an adult!');
    // console.log('correct');
    scoreCounter++;
  } else if (braces.toLowerCase() === yesNoArray[2] || braces.toLowerCase() === yesNoArray[3]){
    alert('Saddly ' + userName + ' that is not correct, they are painful.');
    // console.log('incorrect');
  } else{
    prompt(userName + ' please answer with yes or no');
  }
}

// guess if I have skydived
function planeJumper(){
  var skydive = prompt('Do you think I have gone skydiving?');

  if(skydive.toLowerCase() === yesNoArray[0] || skydive.toLowerCase() === yesNoArray[1]){
    alert('That is correct ' + userName + ', I went skydiving when I was 20!');
    // console.log('correct');
    scoreCounter++;
  } else if (skydive.toLowerCase() === yesNoArray[2] || skydive.toLowerCase() === yesNoArray[3]){
    alert('My mom wishes that was the answer ' + userName + ' but nope I decided to skydive the day of when I took a friend to their appointment!');
    // console.log('incorrect');
  } else{
    prompt(userName + ' please answer with yes or no');
  }
}

// guess if I watch the venture bros
function teamVenture(){
  var venture = prompt('Have I watched The Venture Bros. series multiple times?');

  if(venture.toLowerCase() === yesNoArray[0] || venture.toLowerCase() === yesNoArray[1]){
    alert('That is correct ' + userName + ', this cartoon is more than just a cartoon you should really check it out! GO TEAM VENTURE!!!');
    // console.log('correct');
    scoreCounter++;
  } else if (venture.toLowerCase() === yesNoArray[2] || venture.toLowerCase() === yesNoArray[3]){
    alert('That is very much untrue ' + userName + ', but now hopefully I\'ve peaked your interest in checking out this rad show with a million pop culture nerdy easter eggs!');
    // console.log('incorrect');
  } else{
    prompt(userName + ' please answer with yes or no');
  }
}

// question 6 number guessing game
function matteGame(){
  var matteNumber = 15;

  for(var i = 0; i < 4; i++){
    var matte = prompt(userName + ' how many cups of matte do you think I have in a day?');
    matte = parseInt(matte);

    if(matteNumber === matte){
      alert('Dang ' + userName + ' you are good!');
      // console.log('correct');
      scoreCounter++;
      break;
    } else if (matte > matteNumber) {
      alert('Sorry, your guess is too high!');
    } else if (matte < matteNumber) {
      alert('Sorry, your guess is too low, I need more caffeine then that!');
    }
  }

  if(i === 4){
    alert('I\'m sorry you couldn\'t guess my matte amount but the answer is 15!');
  }
}

// question 7: guess my cats
function crazyCatLady(){
  var guessedCorrect = false;
  var myCreatures = ['lucipurr', 'ethel', 'spaceghost', 'harry winston'];
  //                       0           1          2               3

  for(var j = 0; j < 6; j++){ // loop through the number of guesses
    var guess =  prompt('Guess what the name is of one of my many cats!').toLowerCase();
    for(var k=0; k < myCreatures.length; k++){ // loop there each position of the array to compare user answer with te correct answers
      console.log(myCreatures[k]);

      if(guess === myCreatures[k]){
        alert('You got it! That is one of my creatures!');
        guessedCorrect = true;
        // console.log('correct');
        scoreCounter++;
        break;//will only break us out of the inner for loop
      }
    }

    if(guessedCorrect){
      // if guessedCorrect is true
      break;
    } else if (j < 5) {
      alert('Sorry please try again!');
    }
  }
}

// array to call all questions
var questionMaster = [catAmount(), foodMonster(), bracesFace(), planeJumper(), teamVenture(), matteGame(), crazyCatLady()];

for(var m = 0; m < questionMaster.length; m++){
  questionMaster[m];
}

alert('I\'m sure you are very curious so here are all of the names of my creatures, Lucipurr, Ethel, Spaceghost, and Harry Winsten!');

alert(userName + ' you got ' + scoreCounter + ' out of 7 in my guessing game!');

