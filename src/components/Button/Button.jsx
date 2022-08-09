import React from "react";

// CSS
import "./Button.css";

function Button({ num, board, setBoard }) {
  const handleChange = (num) => {
    let squares = [...board];

    squares[num] === ""
      ? (squares[num] = "X")
      : squares[num] === "X"
      ? (squares[num] = "O")
      : (squares[num] = "");

    return setBoard(squares);
  };

  return (
    <div
      className={`button ${
        board[num] === "X" ? "button-x" : board[num] === "O" ? "button-o" : ""
      }`}
      onClick={() => handleChange(num)}
    >
      {board[num]}
    </div>
  );
}

export default Button;
