import Board from "./components/board"
import Header from "./components/header"
import PlayerTurn from "./components/player-turn"
import Wrapper from "./components/wrapper"
import { checkDraw } from "./helpers/game-logic.helper"
import ToolButtons from "./components/tool-buttons"
import { GameProvider, useGame } from "./contexts/game-context"
import AIThinking from "./components/ai-thinking"
import { HelmetProvider } from "react-helmet-async"
import SEO from "./components/seo"

function Game() {
  const { board, currentPlayer, winner, makeMove, isAIThinking } = useGame()

  const getGameStatus = () => {
    if (winner) return `Jogador ${winner} venceu!`
    if (checkDraw(board)) return "Empate!"
    return `Vez do jogador: ${currentPlayer}`
  }

  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center">
      <Wrapper className="bg-transparent p-0 my-2">
        <ToolButtons />
      </Wrapper>
      <Wrapper>
        <Header />
      </Wrapper>
      <Wrapper className="bg-transparent p-0 my-2">
        <PlayerTurn player={getGameStatus()} />
      </Wrapper>

      <Board board={board} onClick={makeMove} winner={winner} isAIThinking={isAIThinking} />
      <AIThinking isThinking={isAIThinking} />
    </main>
  )
}

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <GameProvider>
        <div className="min-h-screen bg-gray-50 py-8">
          <Game />
        </div>
      </GameProvider>
    </HelmetProvider>
  )
}

export default App
