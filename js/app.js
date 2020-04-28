'use strict';

var watchedTigarKing = prompt('did you watch Tiger King?');

// if they did watch Tiger King, I want to say 'Did Carol Baskin Kill her husband?'
// if they didn't watch Tiger King, I want to say 'Sorry'

if(watchedTigarKing.toLowerCase() === 'yes'){
  alert('Did Carol Baskin Kill her husband?');
} else if (watchedTigarKing.toLowerCase() === 'no'){
  alert('Sorry');
} else{
   prompt('Please answer with yes or no');
}

// if(watchedTigarKing === 'yes'){
//   // do something
// }

// if (watchedTigarKing === 'yes'){
//   // do something
// }else {
//   //do somthing else
// }

// var likesCoffee = true;

// if(likesCoffee){
//   // do somethihng
// }