import React from "react";

// CSS
import "./Button.css";

function Button({ winner, num, board, setBoard }) {
  const winnerStyles = (() => {
    if (winner?.letter === "X" && winner.indexes.includes(num)) return "x-win";
    if (winner?.letter === "O" && winner.indexes.includes(num)) return "o-win";
  })();

  const handleChange = (num) => {
    if (winner) {
      setBoard(Array(9).fill(""));
      return;
    }
    let squares = [...board];

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
