import { BotIcon, ListRestartIcon, RotateCcwIcon } from "lucide-react"
import { ToolButton } from "./ui/tool-button"
import { useState } from "react"
import { useGame } from "../contexts/game-context"
import GameHistory from "./game-history"

const ToolButtons = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const { resetGame, toggleAI, isAIActive } = useGame()

  return (
    <>
      <div className="flex w-full items-center justify-between text-center mx-auto gap-1 sm:gap-2">
        <div className="flex-1">
          <ToolButton
            icon={BotIcon}
            tooltip="Jogar contra IA"
            onClick={toggleAI}
            isActive={isAIActive}
          />
        </div>
        <div className="flex-1">
          <ToolButton
            icon={RotateCcwIcon}
            tooltip="Novo jogo"
            onClick={resetGame}
          />
        </div>
        <div className="flex-1">
          <ToolButton
            icon={ListRestartIcon}
            tooltip="Histórico de partidas"
            onClick={() => setIsHistoryOpen(true)}
          />
        </div>
      </div>

      <GameHistory isOpen={isHistoryOpen} onClose={() => setIsHistoryOpen(false)} />
    </>
  )
}

export default ToolButtons