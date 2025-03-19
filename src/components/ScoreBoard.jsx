import React from "react";

const ScoreBoard = ({ scores }) => {
  return (
    <div className="scoreboard">
      <div className="score">Player X: {scores.X}</div>
      <div className="score">Player O: {scores.O}</div>
    </div>
  );
};

export default ScoreBoard;
