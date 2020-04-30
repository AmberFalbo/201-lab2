'use strict';

var counter = 0;

// geting the users name

var userName = prompt('Howdy, what is your name?');

// personalized welcome to page

alert('Welcome ' + userName + ' to a page all about me! Let us see what you can guess about me, good luck!');
// console.log('Hello ' + userName + ' welcome to my guessing game!');


// guess if I have 4 cats

var howManyCats = prompt(userName + ' do you think I have 4 cats?').toLowerCase();

if(howManyCats.toLowerCase() === 'yes' || howManyCats.toLowerCase() === 'y'){
  alert('YES! ' + userName + ' more cats the better!');
  // console.log('correct');
  counter = counter + 1;
} else if (howManyCats.toLowerCase() === 'no' || howManyCats.toLowerCase() === 'n'){
  alert(userName + ' I know I do not always have cats falling off of me but I do in fact have 4 cats.');
  // console.log('incorrect');
} else {
  prompt(userName + ' please answer with yes or no');
}

// guess if I'm always eating

var alwaysEating = prompt('Do you think Im constantly eating in class while coding?');

if(alwaysEating.toLowerCase() === 'yes' || alwaysEating.toLowerCase() === 'y'){
  alert('That is correct ' + userName + ' coding needs brain food, snacks all every day!');
  // console.log('correct');
  counter = counter + 1;
} else if (alwaysEating.toLowerCase() === 'no' || alwaysEating.toLowerCase() === 'n'){
  alert('That is very kind of you ' + userName + ' but I am always eating and probably eating right now.');
  // console.log('incorrect');
} else{
  prompt(userName + ' please answer with yes or no');
}

// guess if I have braces

var braces = prompt('Do I have braces?');

if(braces.toLowerCase() === 'yes' || braces.toLowerCase() === 'y'){
  alert('That is correct ' + userName + ' I am 32 and have braces as an adult!');
  // console.log('correct');
  counter = counter + 1;
} else if (braces.toLowerCase() === 'no' || braces.toLowerCase() === 'n'){
  alert('Saddly ' + userName + ' that is not correct, they are painful.');
  // console.log('incorrect');
} else{
  prompt(userName + ' please answer with yes or no');
}





// guess if I have skydived


var skydive = prompt('Do you think I have gone skydiving?');

if(skydive.toLowerCase() === 'yes' || skydive.toLowerCase() === 'y'){
  alert('That is correct ' + userName + ', I went skydiving when I was 20!');
  // console.log('correct');
  counter = counter + 1;
} else if (skydive.toLowerCase() === 'no' || skydive.toLowerCase() === 'n'){
  alert('My mom wishes that was the answer ' + userName + ' but nope I decided to skydive the day of when I took a friend to their appointment!');
  // console.log('incorrect');
} else{
  prompt(userName + ' please answer with yes or no');
}

// guess if I watch the venture bros


var venture = prompt('Have I watched The Venture Bros. series multiple times?');

if(venture.toLowerCase() === 'yes' || venture.toLowerCase() === 'y'){
  alert('That is correct ' + userName + ', this cartoon is more than just a cartoon you should really check it out! GO TEAM VENTURE!!!');
  // console.log('correct');
  counter = counter + 1;
} else if (venture.toLowerCase() === 'no' || venture.toLowerCase() === 'n'){
  alert('That is very much untrue ' + userName + ', but now hopefully I\'ve peaked your interest in checking out this rad show with a million pop culture nerdy easter eggs!');
  // console.log('incorrect');
} else{
  prompt(userName + ' please answer with yes or no');
}


// question 6 number guessing game

var matteNumber = 15;


for(var i = 0; i < 4; i++){
  var matte = prompt(userName + ' how many cups of matte do you think I have in a day?');
  matte = parseInt(matte);

  if(matteNumber === matte){
    alert('Dang ' + userName + ' you are good!');
    // console.log('correct');
    counter = counter + 1;
    break;
  } else if (matte > matteNumber) {
    alert('Sorry, your guess is too high!');
  } else if (matte < matteNumber) {
    alert('Sorry, your guess is too low, I need more caffine then that!');
  }
}

if(i === 4){
  alert('I\'m sorry you couldn\'t guess my matte amount but the answer is 15!');
}


// question 7

var guessedCorrect = false;
var myCreatures = ['Lucipurr', 'Ethel', 'Spaceghost', 'Harry Winston'];
//              0           1          2               3


for(var j = 0; j < 6; j++){
  var guess =  prompt('Guess what the name is of one of my many cats!');
  for(var k=0; k < myCreatures.length; k++){
    console.log(myCreatures[k]);

    if(guess === myCreatures[k]){
      alert('You got it! That is one of my creatures!');
      guessedCorrect = true;
      // console.log('correct');
      counter = counter + 1;
      break;
    }
  }

  if(guessedCorrect){
    // if guessedCorrect is true
    break;
  } else if (j < 5) {
    alert('Sorry please try again!');
  }

}

alert('I\'m sure you are very curious so here are all of the names of my creatures, Lucipurr, Ethel, Spaceghost, and Harry Winsten!');






alert(userName + ' you got ' + counter + ' out of 7 in my guessing game!');


