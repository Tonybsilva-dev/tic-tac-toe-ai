import { Player } from "../@types/globals.types";
import { checkWinner, WINNING_COMBINATIONS } from "./game-logic.helper";

type BoardState = (Player | null)[];

// Função auxiliar para encontrar jogada vencedora
function findWinningMove(squares: BoardState, player: Player): number {

  for (const line of WINNING_COMBINATIONS) {
    const [a, b, c] = line
    // Verifica se há duas peças do jogador e um espaço vazio
    const countPlayer = [squares[a], squares[b], squares[c]].filter((s) => s === player).length
    const countEmpty = [squares[a], squares[b], squares[c]].filter((s) => s === null).length

    if (countPlayer === 2 && countEmpty === 1) {
      // Encontra a posição vazia
      if (squares[a] === null) return a
      if (squares[b] === null) return b
      if (squares[c] === null) return c
    }
  }

  return -1 // Nenhuma jogada vencedora encontrada
}

export function makeAIMove(board: BoardState): number {
  // Verificar se o jogo já acabou
  if (checkWinner(board)) {
    return -1;
  }

  // Estratégia da IA:
  // 1. Tentar vencer
  // 2. Bloquear o jogador de vencer
  // 3. Jogar no centro se disponível
  // 4. Jogar em um canto aleatório
  // 5. Jogar em qualquer posição disponível

  // Verificar se a IA pode vencer
  const aiWinMove = findWinningMove(board, "O")
  if (aiWinMove !== -1) {
    return aiWinMove;
  }

  // Bloquear jogada de vitória do jogador
  const blockMove = findWinningMove(board, "X")
  if (blockMove !== -1) {
    return blockMove;
  }

  // Jogar no centro se disponível
  if (!board[4]) {
    return 4;
  }

  // Jogar em um canto
  const corners = [0, 2, 6, 8]
  const availableCorners = corners.filter((i) => !board[i])
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)];
  }

  // Jogar em qualquer posição disponível
  const availableMoves = board
    .map((square, i) => (square === null ? i : null))
    .filter((i): i is number => i !== null);

  if (availableMoves.length > 0) {
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  }

  return -1;
}