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
    if (value === "X") return <XIcon className="w-12 h-12" />
    if (value === "O") return <CircleIcon className="w-12 h-12" />
  }

  return <button
    onClick={onClick}
    className={`w-32 h-32 border-4 text-4xl mx-auto flex items-center justify-center font-bold border-emerald-200 rounded-xl ${getTextColor(value)} ${getBackgroundColor(value, isWinnerSquare)}`}
  >{changeValueToIcon(value)}</button>
}

export default Square