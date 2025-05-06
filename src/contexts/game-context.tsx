import { createContext, useContext, ReactNode, useState } from "react";
import { Player } from "../@types/globals.types";
import { checkWinner } from "../helpers/game-logic.helper";
import { saveGameHistory } from "../helpers/game-history.helper";
import { makeAIMove } from "../helpers/game-ai-logic.helper";

type GameContextType = {
  board: (Player | null)[];
  currentPlayer: Player;
  winner: Player | null;
  isAIActive: boolean;
  isAIThinking: boolean;
  resetGame: () => void;
  makeMove: (index: number) => void;
  toggleAI: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

const AI_DELAY = 800;

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | null>(null);
  const [isAIActive, setIsAIActive] = useState(false);
  const [isAIThinking, setIsAIThinking] = useState(false);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setIsAIThinking(false);
  };

  const makeMove = async (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      saveGameHistory(newWinner);
      return;
    }

    if (newBoard.every((square) => square !== null)) {
      saveGameHistory(null);
      return;
    }

    if (isAIActive) {
      setCurrentPlayer("O");
      setIsAIThinking(true);

      await new Promise((resolve) => setTimeout(resolve, AI_DELAY));

      const aiMove = makeAIMove(newBoard);
      if (aiMove !== null) {
        newBoard[aiMove] = "O";
        setBoard(newBoard);

        const aiWinner = checkWinner(newBoard);
        if (aiWinner) {
          setWinner(aiWinner);
          saveGameHistory(aiWinner);
        } else if (newBoard.every((square) => square !== null)) {
          saveGameHistory(null);
        }
      }

      setIsAIThinking(false);
      setCurrentPlayer("X");
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const toggleAI = () => {
    setIsAIActive(!isAIActive);
    resetGame();
  };

  return (
    <GameContext.Provider value={{
      board,
      currentPlayer,
      winner,
      isAIActive,
      isAIThinking,
      resetGame,
      makeMove,
      toggleAI
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}; 