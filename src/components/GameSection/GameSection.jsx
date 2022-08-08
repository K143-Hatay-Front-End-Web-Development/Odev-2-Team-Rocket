import React, { useState } from "react";
import { useEffect } from "react";

// Components
import Button from "../Button/Button";

// CSS
import "./GameSection.css";

// Game Winning Conditions
const winConditions = {
  row: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ],
  column: [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ],
  diagonal: [
    [0, 4, 8],
    [2, 4, 6],
  ],
};

function GameSection() {
  // Game Board Status
  const [board, setBoard] = useState(Array(9).fill(""));

  // Check Winner
  useEffect(() => {
    const checkWinner = () => {
      return console.log(winConditions);
    };

    checkWinner();
  }, [board]);

  return (
    <div className="game-wrapper">
      <div className="btn-row">
        <Button num={0} board={board} setBoard={setBoard} />
        <Button num={1} board={board} setBoard={setBoard} />
        <Button num={2} board={board} setBoard={setBoard} />
      </div>
      <div className="btn-row">
        <Button num={3} board={board} setBoard={setBoard} />
        <Button num={4} board={board} setBoard={setBoard} />
        <Button num={5} board={board} setBoard={setBoard} />
      </div>
      <div className="btn-row">
        <Button num={6} board={board} setBoard={setBoard} />
        <Button num={7} board={board} setBoard={setBoard} />
        <Button num={8} board={board} setBoard={setBoard} />
      </div>
    </div>
  );
}

export default GameSection;
