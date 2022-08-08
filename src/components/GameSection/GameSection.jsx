import React, { useState } from "react";

// Components
import Button from "../Button/Button";

// CSS
import "./GameSection.css";

function GameSection() {
  const [board, setBoard] = useState(Array(9).fill(""));

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
