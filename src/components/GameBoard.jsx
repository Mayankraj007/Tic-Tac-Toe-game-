import React, { useState } from "react";
import Square from "./Square";
import "../App.css";

const GameBoard = ({ onWin }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState("");

  const checkWinner = (squares) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || checkWinner(board)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = checkWinner(newBoard);
    if (winner) {
      setStatus(`Player ${winner} won!`);
      onWin(winner);
    } else if (!newBoard.includes(null)) {
      setStatus("Game Draw!");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setStatus("");
  };

  return (
    <div>
      {status && <h2>{status}</h2>}
      <div className="board">
        {board.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <button className="reset-btn" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default GameBoard;
