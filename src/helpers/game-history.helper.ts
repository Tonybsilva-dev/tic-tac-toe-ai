import { Player } from "../@types/globals.types";

export type GameHistory = {
  winner: Player | null;
  timestamp: string;
}

const GAME_HISTORY_KEY = "game_history";

export const saveGameHistory = (winner: Player | null) => {
  const history = getGameHistory();
  const newGame: GameHistory = {
    winner,
    timestamp: new Date().toISOString(),
  };
  history.push(newGame);
  localStorage.setItem(GAME_HISTORY_KEY, JSON.stringify(history));
};

export const getGameHistory = (): GameHistory[] => {
  const history = localStorage.getItem(GAME_HISTORY_KEY);
  return history ? JSON.parse(history) : [];
};

export const clearGameHistory = () => {
  localStorage.removeItem(GAME_HISTORY_KEY);
}; 