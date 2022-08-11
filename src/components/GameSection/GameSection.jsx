import React, { useState } from "react";
import { useEffect } from "react";

// Components
import Button from "../Button/Button";

// CSS
import "./GameSection.css";

// Game Winning Conditions
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function GameSection() {
  // Game Board Status
  const [board, setBoard] = useState(Array(9).fill(""));
  // Winner Status
  const [winner, setWinner] = useState(null);

  // Check Winner
  useEffect(() => {
    const checkWinner = (conditions) => {
      for (let i = 0; i < conditions.length; i++) {
        const [a, b, c] = conditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return { letter: board[a], indexes: conditions[i] };
        }
      }
      return null;
    };

    setWinner(checkWinner(winConditions));
  }, [board]);

  return (
    // Create game board and all buttons
    <div className="game-wrapper">
      {board.map((_, index) => {
        return (
          <Button
            winner={winner}
            num={index}
            board={board}
            setBoard={setBoard}
          />
        );
      })}
    </div>
  );
}

export default GameSection;
