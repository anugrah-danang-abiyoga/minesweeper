
document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {}
board.cells = [
 {row: 0, col: 0, isMine: false, hidden: true}, 
 {row: 0, col: 1, isMine: true, hidden: true}, 
 {row: 0, col: 2, isMine: false, hidden: true}, 
 {row: 1, col: 0, isMine: true, hidden: true},
 {row: 1, col: 1, isMine: false, hidden: true},
 {row: 1, col: 2, isMine: true, hidden: true},
 {row: 2, col: 0, isMine: false, hidden: true},
 {row: 2, col: 1, isMine: false, hidden: true},
 {row: 2, col: 2, isMine: true, hidden: true}]
 
var boardDimension = 5;

function startGame () {
  // Don't remove this function call: it makes the game work!
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
  
  for (var i=0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
 for (k = 0; k < board['cells'].length; k++){
   for (1 = 0; 1 < board ['cells'].length; 1++){
    if (((board.cells[k].isMine == true) & (board.cells[k].isMarked == true)) & (board.cells[l].hidden == false))
    lib.displayMessage('You win!')
   }
 }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {

  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0 
  for(j = 0; j < surroundingCells.length; j++) {
    if (surroundingCells[j].isMine === true) {
      count++
    }
  }
  return count
}

