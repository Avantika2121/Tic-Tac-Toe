As a user, I should be able to start a new tic tac toe game.

As a user, I should be able to click on a square to add X first and then O, and so on.

As a user, I should be shown a message after each turn for if I win or lose.

As a user, I should not be able to click the same square twice.

As a user, I should not be able to continue playing once I win or lose.

As a user, I should be able to play the game again without refreshing the page

As a user, my score should increase by 1 point based on winning a game.

As a user, a click on game board should have a click sound.

As a user, there should be hover effect when hovering over the game board or play again button.

Wireframing link - https://assets.adobe.com/public/a3d4042b-a538-4cfc-42ea-33b0636ab46e

My favorite function would be for switchTurns() that i used for player to take turns. But in general logic of this game is more of value to me.

For coding i used JavaScript, JQuery here and there and HTML/CSS for webpage and designing.

I think i have been able to keep it DRY and logic as simple as possible for me.


  **THE LOGIC BEHIND THE GAME AND THE STEPS I COMPLETED** 
  
  1. Creating index.html with a grid consisting of 9 spaces with 9 ids.
  2. Creating an array of the game basically containg 3 array elements and each array having 3 elements(values of 1 to 9 numbers). The array would later be used to      store values of 'x' or 'o' and evaluating conditioning of player's win ie either rows, columns or diagonals.
  3. A function to append 'x' or 'o' as clicked by user.
  4. Creating class for space and player and then creating instances for spaces(1 to 9) and player instances, player 1 and player 2.
  5. At click on grid (event listener) it would check the target id of the click, check if the space has not been clicked. Append 'x' or 'o'. Store 'x' or 'o' based      on if its player 1 or player 2. So basically if target.id is 1, it would be Array[0].index(1).
  6. Then we call switchTurn() function to switch from player 1 to player 2 and vice versa. The particular space in that case space.played(attribute) is made true.
  8. Then conditional statements later to check the values stored within arrays in rows/columns/diagonals if its all x's or o's for winning combinations.
  9. Once its true score counter increases and its displays message the player that has won.
  
