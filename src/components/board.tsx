import { Player } from "../@types/globals.types"
import Square from "./square"
import BoardSkeleton from "./board-skeleton"
import AIThinking from "./ai-thinking"

type BoardProps = {
  board: (Player | null)[];
  onClick: (index: number) => void;
  winner: Player | null;
  isAIThinking: boolean;
}

const Board = ({ board, onClick, isAIThinking }: BoardProps) => {
  const getWinnerSquares = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (const line of lines) {
      const [a, b, c] = line
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return line
      }
    }
    return []
  }

  const winnerSquares = getWinnerSquares()

  return (
    <div className="relative">
      {isAIThinking ? (
        <>
          <BoardSkeleton />
          <AIThinking isThinking={isAIThinking} />
        </>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {board.map((value, index) => (
            <Square
              key={index}
              value={value}
              onClick={() => onClick(index)}
              isWinnerSquare={winnerSquares.includes(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Board