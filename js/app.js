'use strict';

// geting the users name

var userName = prompt('Howdy, what is your name?');

// personalized welcome to page

alert('Welcome ' + userName + ' to a page all about me! Let us see what you can guess about me, good luck!');

// guess if I have 4 cats

var howManyCats = prompt(userName + ' do you think I have 4 cats?').toLowerCase();

if(howManyCats.toLowerCase() === 'yes' || howManyCats.toLowerCase() === 'y'){
  alert('YES! ' + userName + ' more cats the better!');
} else if (howManyCats.toLowerCase() === 'no'){
  alert(userName + ' I know I do not always have cats falling off of me but I do in fact have 4 cats.');
} else {
  prompt(userName + ' please answer with yes or no');
}

// guess if I'm always eating

var alwaysEating = prompt('Do you think Im constantly eating in class while coding?');

if(alwaysEating.toLowerCase() === 'yes'){
  alert('That is correct ' + userName + ' coding needs brain food, snacks all every day!');
} else if (alwaysEating.toLowerCase() === 'no'){
  alert('That is very kind of you ' + userName + ' but I am always eating and probably eating right now.');
} else{
  prompt(userName + ' please answer with yes or no');
}




