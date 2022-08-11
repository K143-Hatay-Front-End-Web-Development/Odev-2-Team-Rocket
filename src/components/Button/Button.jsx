import React from "react";

// CSS
import "./Button.css";

function Button({ winner, num, board, setBoard }) {
  // Winner butttons styles
  const winnerStyles = (() => {
    if (winner?.letter === "X" && winner.indexes.includes(num)) return "x-win"; // If winner is X, return x-win class name
    if (winner?.letter === "O" && winner.indexes.includes(num)) return "o-win"; // If winner is O, return o-win class name
  })();

  const handleChange = (num) => {
    if (winner) {
      // Reset the board when the game is over
      setBoard(Array(9).fill(""));
      return;
    }
    let squares = [...board];

    // Buttons behavior
    switch (squares[num]) {
      case "":
        squares[num] = "X";
        break;
      case "X":
        squares[num] = "O";
        break;
      case "O":
        squares[num] = "";
        break;
      default:
        squares[num] = "";
    }

    return setBoard(squares);
  };

  // Create button UI
  return (
    <div
      className={`${winnerStyles || ""} button ${
        board[num] === "X" ? "button-x" : board[num] === "O" ? "button-o" : ""
      }`}
      onClick={() => handleChange(num)}
    >
      {board[num]}
    </div>
  );
}

export default Button;
