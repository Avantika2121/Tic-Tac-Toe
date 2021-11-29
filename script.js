let gameBoard = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

let p1Counter = 1;
let p2Counter = 1;

class Player {
constructor() {
this.isTurn = false;
this.win = false;
}
}

class Space {
constructor(id) {
this.played = false;
this.id = id;
}

addSymbolX(space) {
$(space).append("<div class='x'>X</div>");
}

addSymbolO(space) {
$(space).append("<div class='o'>O</div>");
}
}

//create players
const player1 = new Player();
const player2 = new Player();

//create spaces
const space1 = new Space('one');
const space2 = new Space('two');
const space3 = new Space('three');
const space4 = new Space('four');
const space5 = new Space('five');
const space6 = new Space('six');
const space7 = new Space('seven');
const space8 = new Space('eight');
const space9 = new Space('nine');

//switch turns
function switchTurns(one, two) {
one.isTurn = true;
two.isTurn = false;
}

//gameplay
player1.isTurn = true;



document.getElementsByClassName('grid')[0].addEventListener('click', (e) => {
  //Click sound 
  let audio = new Audio("click.ogg");
  audio.play();

if(player1.win !== true && player2.win !== true) {
if(e.target.id === space1.id && space1.played === false) {
   if(player1.isTurn) {
     space1.addSymbolX(e.target);
     let index = gameBoard[0].indexOf(1);
     if(index !== -1) {
       gameBoard[0][index] = 'x';
     }
     switchTurns(player2, player1);
     space1.played = true;
   } else {
       space1.addSymbolO(e.target);
       let index = gameBoard[0].indexOf(1);
       if(index !== -1) {
         gameBoard[0][index] = 'o';
       }
       switchTurns(player1, player2);
       space1.played = true;
   }
} 

else if (e.target.id === space2.id && space2.played === false) {
   if(player1.isTurn) {
     space2.addSymbolX(e.target); 
     let index = gameBoard[0].indexOf(2);
     if(index !== -1) {
       gameBoard[0][index] = 'x';
     }
     switchTurns(player2, player1);
     space2.played = true;
   } else {
       space2.addSymbolO(e.target);
       let index = gameBoard[0].indexOf(2);
       if(index !== -1) {
         gameBoard[0][index] = 'o';
       }
       switchTurns(player1, player2);
       space2.played = true;
   } 
}

else if (e.target.id === space3.id && space3.played === false) {
   if(player1.isTurn) {
     space3.addSymbolX(e.target);   
     let index = gameBoard[0].indexOf(3);
     if(index !== -1) {
       gameBoard[0][index] = 'x';
     }
     switchTurns(player2, player1);
     space3.played = true;
   } else {
       space3.addSymbolO(e.target); 
       let index = gameBoard[0].indexOf(3);
       if(index !== -1) {
         gameBoard[0][index] = 'o';
       }
       switchTurns(player1, player2);
       space3.played = true;
   }   
}

else if (e.target.id === space4.id && space4.played === false) {
   if(player1.isTurn) {
     space4.addSymbolX(e.target);  
     let index = gameBoard[1].indexOf(4);
     if(index !== -1) {
       gameBoard[1][index] = 'x';
     }
     switchTurns(player2, player1);
     space4.played = true;
   } else {
       space4.addSymbolO(e.target);
       let index = gameBoard[1].indexOf(4);
       if(index !== -1) {
         gameBoard[1][index] = 'o';
       }
       switchTurns(player1, player2);
       space4.played = true;
   } 
}

else if (e.target.id === space5.id && space5.played === false) {
   if(player1.isTurn) {
     space5.addSymbolX(e.target); 
     let index = gameBoard[1].indexOf(5);
     if(index !== -1) {
       gameBoard[1][index] = 'x';
     }
     switchTurns(player2, player1);
     space5.played = true;
   } else {
       space5.addSymbolO(e.target); 
       let index = gameBoard[1].indexOf(5);
       if(index !== -1) {
         gameBoard[1][index] = 'o';
       }
       switchTurns(player1, player2);
       space5.played = true;
   }   
}  

else if (e.target.id === space6.id && space6.played === false) {
   if(player1.isTurn) {
     space6.addSymbolX(e.target);
     let index = gameBoard[1].indexOf(6);
     if(index !== -1) {
       gameBoard[1][index] = 'x';
     }
     switchTurns(player2, player1);
     space6.played = true;
   } else {
       space6.addSymbolO(e.target);
       let index = gameBoard[1].indexOf(6);
       if(index !== -1) {
         gameBoard[1][index] = 'o';
       }
       switchTurns(player1, player2);
       space6.played = true;
   } 
}

else if (e.target.id === space7.id && space7.played === false) {
   if(player1.isTurn) {
     space7.addSymbolX(e.target);
     let index = gameBoard[2].indexOf(7);
     if(index !== -1) {
       gameBoard[2][index] = 'x';
     }
     switchTurns(player2, player1);
     space7.played = true;
   } else {
       space7.addSymbolO(e.target); 
       let index = gameBoard[2].indexOf(7);
       if(index !== -1) {
         gameBoard[2][index] = 'o';
       }
       switchTurns(player1, player2);
       space7.played = true;
   }   
}

else if (e.target.id === space8.id && space8.played === false) {
   if(player1.isTurn) {
     space8.addSymbolX(e.target);
     let index = gameBoard[2].indexOf(8);
     if(index !== -1) {
       gameBoard[2][index] = 'x';
     }
     switchTurns(player2, player1);
     space8.played = true;
   } else {
       space8.addSymbolO(e.target);
       let index = gameBoard[2].indexOf(8);
       if(index !== -1) {
         gameBoard[2][index] = 'o';
       }
       switchTurns(player1, player2);
       space8.played = true;
   } 
}

else if (e.target.id === space9.id && space9.played === false) {
   if(player1.isTurn) {
     space9.addSymbolX(e.target);
     let index = gameBoard[2].indexOf(9);
     if(index !== -1) {
       gameBoard[2][index] = 'x';
     }
     switchTurns(player2, player1);
     space9.played = true;
   } else {
       space9.addSymbolO(e.target); 
       let index = gameBoard[2].indexOf(9);
       if(index !== -1) {
         gameBoard[2][index] = 'o';
       }
       switchTurns(player1, player2);
       space9.played = true;
   }   
}

//check if playerX wins
// top row
if(gameBoard[0][0] === "x" && gameBoard[0][1] === "x" && gameBoard[0][2] === "x") {
  // $('.header').text('Player 1 Wins!');
  // $('.header').css('color', 'red');
  document.querySelector(".header").textContent = "Player 1 Wins!";
  $('.header').css('color', 'red');
  document.querySelector('.p1').textContent = ('Player 1: '+ p1Counter);
  p1Counter += 1;
  player1.win = true;
}  
// middle row s
else if (gameBoard[1][0] === "x" && gameBoard[1][1] === "x" && gameBoard[1][2] === "x") {
  document.querySelector(".header").textContent = "Player 1 Wins!";
  $('.header').css('color', 'red');
  document.querySelector('.p1').textContent = ('Player 1: '+ p1Counter);
  p1Counter += 1;
  player1.win = true;
}
// bottom row
else if (gameBoard[2][0] === "x" && gameBoard[2][1] === "x" && gameBoard[2][2] === "x") {
  document.querySelector(".header").textContent = "Player 1 Wins!";
  $('.header').css('color', 'red');
  document.querySelector('.p1').textContent = ('Player 1: '+ p1Counter);
  p1Counter += 1;
  player1.win = true;
}
// first column
else if (gameBoard[0][0] === 'x' && gameBoard[1][0] === 'x' && gameBoard[2][0] === 'x') {
  document.querySelector(".header").textContent = "Player 1 Wins!";
  $('.header').css('color', 'red');
  document.querySelector('.p1').textContent = ('Player 1: '+ p1Counter);
  p1Counter += 1;
  player1.win = true;
}
// second column
else if (gameBoard[0][1] === 'x' && gameBoard[1][1] === 'x' && gameBoard[2][1] === 'x') {
  document.querySelector(".header").textContent = "Player 1 Wins!";
  $('.header').css('color', 'red');
  document.querySelector('.p1').textContent = ('Player 1: '+ p1Counter);
  p1Counter += 1;
  player1.win = true;
}
// third column
else if (gameBoard[0][2] === 'x' && gameBoard[1][2] === 'x' && gameBoard[2][2] === 'x') {
  document.querySelector(".header").textContent = "Player 1 Wins!";
  $('.header').css('color', 'red');
  document.querySelector('.p1').textContent = ('Player 1: '+ p1Counter);
  p1Counter += 1;
  player1.win = true;
}
// diaganol right
else if (gameBoard[0][0] === 'x' && gameBoard[1][1] === 'x' && gameBoard[2][2] === 'x') {
  document.querySelector(".header").textContent = "Player 1 Wins!";
  $('.header').css('color', 'red');
  document.querySelector('.p1').textContent = ('Player 1: '+ p1Counter);
  p1Counter += 1;
  player1.win = true;
}
// diaganol left
else if (gameBoard[0][2] === 'x' && gameBoard[1][1] === 'x' && gameBoard[2][0] === 'x') {
  document.querySelector(".header").textContent = "Player 1 Wins!";
  $('.header').css('color', 'red');
  document.querySelector('.p1').textContent = ('Player 1: '+ p1Counter);
  p1Counter += 1;
  player1.win = true;
} 

// check if player 2 wins

//top row

if(gameBoard[0][0] === "o" && gameBoard[0][1] === "o" && gameBoard[0][2] === "o"){
  document.querySelector(".header").textContent = "Player 2 Wins!";
  $('.header').css('color', '#33DBFF');
  document.querySelector('.p2').textContent = ('Player 2: '+ p2Counter);
  p2Counter += 1;
  player2.win = true;
}  
// middle row 
else if (gameBoard[1][0] === "o" && gameBoard[1][1] === "o" && gameBoard[1][2] === "o") {
  document.querySelector(".header").textContent = "Player 2 Wins!";
  $('.header').css('color', '#33DBFF');
  document.querySelector('.p2').textContent = ('Player 2: '+ p2Counter);
  p2Counter += 1;
  player2.win = true;
}
// bottom row
else if (gameBoard[2][0] === "o" && gameBoard[2][1] === "o" && gameBoard[2][2] === "o") {
  document.querySelector(".header").textContent = "Player 2 Wins!";
  $('.header').css('color', '#33DBFF');
  document.querySelector('.p2').textContent = ('Player 2: '+ p2Counter);
  p2Counter += 1;
  player2.win = true;
}
// first column
else if (gameBoard[0][0] === 'o' && gameBoard[1][0] === 'o' && gameBoard[2][0] === 'o') {
  document.querySelector(".header").textContent = "Player 2 Wins!";
  $('.header').css('color', '#33DBFF');
  document.querySelector('.p2').textContent = ('Player 2: '+ p2Counter);
  p2Counter += 1;
  player2.win = true;
}
// second column
else if (gameBoard[0][1] === 'o' && gameBoard[1][1] === 'o' && gameBoard[2][1] === 'o') {
  document.querySelector(".header").textContent = "Player 2 Wins!";
  $('.header').css('color', '#33DBFF');
  document.querySelector('.p2').textContent = ('Player 2: '+ p2Counter);
  p2Counter += 1;
  player2.win = true;
}
// third column
else if (gameBoard[0][2] === 'o' && gameBoard[1][2] === 'o' && gameBoard[2][2] === 'o') {
  document.querySelector(".header").textContent = "Player 2 Wins!";
  $('.header').css('color', '#33DBFF');
  document.querySelector('.p2').textContent = ('Player 2: '+ p2Counter);
  p2Counter += 1;
  player2.win = true;
}
// diaganol right
else if (gameBoard[0][0] === 'o' && gameBoard[1][1] === 'o' && gameBoard[2][2] === 'o') {
  document.querySelector(".header").textContent = "Player 2 Wins!";
  $('.header').css('color', '#33DBFF');
  document.querySelector('.p2').textContent = ('Player 2: '+ p2Counter);
  p2Counter += 1;
  player2.win = true;
}
// diaganol left
else if (gameBoard[0][2] === 'o' && gameBoard[1][1] === 'o' && gameBoard[2][0] === 'o') {
  document.querySelector(".header").textContent = "Player 2 Wins!";
  $('.header').css('color', '#33DBFF');
  document.querySelector('.p2').textContent = ('Player 2: '+ p2Counter);
  p2Counter += 1;
  player2.win = true;
}


}
});


$('.reset').on('click', () => {
player1.isTurn = true;
player2.isTurn = false;
player1.win = false;
player2.win = false;
$('.x').remove();
$('.o').remove();
$('.header').text('Tic Tac Toe');
gameBoard = [[1,2,3],[4,5,6],[7,8,9]];
space1.played = false;
space2.played = false;
space3.played = false;
space4.played = false;
space5.played = false;
space6.played = false;
space7.played = false;
space8.played = false;
space9.played = false;  
});