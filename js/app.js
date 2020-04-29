'use strict';

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
} else if (skydive.toLowerCase() === 'no' || skydive.toLowerCase() === 'n'){
  alert('My mom wishes that was the answer ' + userName + ' but nope I decided to skydive the day of when I took a friend to their appointment!');
  // console.log('incorrect');
} else{
  prompt(userName + ' please answer with yes or no');
}
