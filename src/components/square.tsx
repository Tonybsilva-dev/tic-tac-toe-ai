import { CircleIcon, XIcon } from "lucide-react";
import { Player } from "../@types/globals.types"

type SquareProps = {
  value: Player | null,
  onClick: () => void;
  isWinnerSquare: boolean;
}

const getTextColor = (value: Player | null) => value === "X" ? "text-black" : "text-pink-500"
const getBackgroundColor = (player: Player | null, isWinnerSquare: boolean) => {
  if (!isWinnerSquare) return 'bg-transparent'
  return player ? "bg-emerald-100" : "bg-transparent ring-transparent"
}

const Square = ({ value, onClick, isWinnerSquare }: SquareProps) => {

  const changeValueToIcon = (value: Player | null,) => {
    if (value === "X") return <XIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
    if (value === "O") return <CircleIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
  }

  return <button
    onClick={onClick}
    className={`w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 border-2 sm:border-3 md:border-4 text-xl sm:text-2xl md:text-4xl mx-auto flex items-center justify-center font-bold border-emerald-200 rounded-lg md:rounded-xl ${getTextColor(value)} ${getBackgroundColor(value, isWinnerSquare)}`}
  >{changeValueToIcon(value)}</button>
}

export default Square