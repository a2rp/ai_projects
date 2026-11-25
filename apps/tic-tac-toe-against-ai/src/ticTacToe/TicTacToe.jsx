import { useEffect, useState } from "react";
import { FiCircle, FiInfo, FiRefreshCw, FiX } from "react-icons/fi";
import Swal from "sweetalert2";
import styles from "./styles.module.scss";

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const emptyBoard = () => Array(9).fill(null);

function getWinningLine(board, marker) {
  return winningLines.find(([first, second, third]) => (
    board[first] === marker && board[second] === marker && board[third] === marker
  ));
}

function getMoveForMarker(board, marker) {
  for (let index = 0; index < board.length; index += 1) {
    if (board[index]) continue;
    const possibleBoard = [...board];
    possibleBoard[index] = marker;
    if (getWinningLine(possibleBoard, marker)) return index;
  }
  return null;
}

function getComputerMove(board) {
  const winningMove = getMoveForMarker(board, "O");
  if (winningMove !== null) return winningMove;

  const blockingMove = getMoveForMarker(board, "X");
  if (blockingMove !== null) return blockingMove;
  if (!board[4]) return 4;

  const availableCorners = [0, 2, 6, 8].filter((index) => !board[index]);
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)];
  }

  const availableCells = board.reduce((cells, value, index) => {
    if (!value) cells.push(index);
    return cells;
  }, []);
  return availableCells.length > 0
    ? availableCells[Math.floor(Math.random() * availableCells.length)]
    : null;
}

function TicTacToe() {
  const [board, setBoard] = useState(emptyBoard);
  const [status, setStatus] = useState("Your turn");
  const [computerTurn, setComputerTurn] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);

  useEffect(() => {
    if (!computerTurn) return undefined;

    const timer = window.setTimeout(() => {
      const move = getComputerMove(board);

      if (move === null) {
        setWinner("draw");
        setStatus("It is a draw.");
        setComputerTurn(false);
        return;
      }

      const nextBoard = [...board];
      nextBoard[move] = "O";
      const computerLine = getWinningLine(nextBoard, "O");

      setBoard(nextBoard);
      setComputerTurn(false);

      if (computerLine) {
        setWinner("computer");
        setWinningLine(computerLine);
        setStatus("Computer wins this round.");
      } else if (nextBoard.every(Boolean)) {
        setWinner("draw");
        setStatus("It is a draw.");
      } else {
        setStatus("Your turn");
      }
    }, 450);

    return () => window.clearTimeout(timer);
  }, [board, computerTurn]);

  const handleCellClick = (index) => {
    if (computerTurn || winner || board[index]) return;

    const nextBoard = [...board];
    nextBoard[index] = "X";
    const playerLine = getWinningLine(nextBoard, "X");

    setBoard(nextBoard);

    if (playerLine) {
      setWinner("player");
      setWinningLine(playerLine);
      setStatus("You win this round.");
      return;
    }

    if (nextBoard.every(Boolean)) {
      setWinner("draw");
      setStatus("It is a draw.");
      return;
    }

    setComputerTurn(true);
    setStatus("Computer is thinking...");
  };

  const resetGame = () => {
    Swal.fire({
      title: "Reset this round?",
      text: "The current board will be cleared.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Reset game",
      cancelButtonText: "Keep playing",
      confirmButtonColor: "#2d8cff",
    }).then((result) => {
      if (result.isConfirmed) {
        setBoard(emptyBoard());
        setStatus("Your turn");
        setComputerTurn(false);
        setWinner(null);
        setWinningLine([]);
      }
    });
  };

  return (
    <div className={styles.pageWidth}>
      <section className={styles.gameSection} id="game" aria-labelledby="game-title">
        <div className={styles.intro}>
          <span className={styles.eyebrow}>A focused classic</span>
          <h1 id="game-title">Tic Tac Toe</h1>
          <p>
            Make a line of three before the computer does. Simple rules, quick rounds,
            and a little room to sharpen your next move.
          </p>
          <div className={styles.introStats}>
            <span><FiCircle aria-hidden="true" /> You play X</span>
            <span><FiX aria-hidden="true" /> Computer plays O</span>
          </div>
        </div>

        <div className={styles.gameCard}>
          <div className={styles.cardHeader}>
            <div>
              <span className={styles.cardLabel}>Current round</span>
              <strong>{status}</strong>
            </div>
            <button className={styles.resetButton} type="button" onClick={resetGame}>
              <FiRefreshCw aria-hidden="true" />
              Reset
            </button>
          </div>

          <div className={styles.board} role="grid" aria-label="Tic Tac Toe board">
            {board.map((value, index) => (
              <button
                key={index}
                className={`${styles.cell} ${value ? styles.marked : ""} ${winningLine.includes(index) ? styles.winningCell : ""}`}
                type="button"
                role="gridcell"
                aria-label={`Row ${Math.floor(index / 3) + 1}, column ${(index % 3) + 1}${value ? `, ${value}` : ", empty"}`}
                disabled={Boolean(value) || Boolean(winner) || computerTurn}
                onClick={() => handleCellClick(index)}
              >
                {value === "X" && <FiX aria-hidden="true" />}
                {value === "O" && <FiCircle aria-hidden="true" />}
              </button>
            ))}
          </div>

          <div className={styles.statusRow} aria-live="polite">
            <span className={styles.statusIcon}>
              {winner === "player" ? <FiX aria-hidden="true" /> : <FiInfo aria-hidden="true" />}
            </span>
            <span>{status}</span>
          </div>
        </div>
      </section>

      <section className={styles.guideSection} id="how-to-play" aria-labelledby="guide-title">
        <div className={styles.guideHeading}>
          <span className={styles.eyebrow}>How to play</span>
          <h2 id="guide-title">Small board. Clear choices.</h2>
        </div>
        <div className={styles.guideGrid}>
          <article className={styles.guideCard}>
            <span className={styles.guideNumber}>01</span>
            <h3>Choose a square</h3>
            <p>Place X in any open square when it is your turn.</p>
          </article>
          <article className={styles.guideCard}>
            <span className={styles.guideNumber}>02</span>
            <h3>Build a line</h3>
            <p>Connect three marks horizontally, vertically, or diagonally.</p>
          </article>
          <article className={styles.guideCard}>
            <span className={styles.guideNumber}>03</span>
            <h3>Start again</h3>
            <p>Use reset whenever you want to clear the board for another round.</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default TicTacToe;
