import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import "./App.css";

const App = () => {
  const [scores, setScores] = useState({ X: 0, O: 0 });

  const handleWin = (winner) => {
    if (winner) {
      setScores((prevScores) => ({
        ...prevScores,
        [winner]: prevScores[winner] + 1,
      }));
    }
  };

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <ScoreBoard scores={scores} />
      <GameBoard onWin={handleWin} />
    </div>
  );
};

export default App;
