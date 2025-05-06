import { Gamepad2Icon } from "lucide-react"

type HeaderProps = {
  title?: string
}

const Header = ({ title = 'Jogo da Velha' }: HeaderProps) => {
  return (
    <header className="w-full">
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        <Gamepad2Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-none tracking-tight">{title}</h1>
      </div>
    </header>
  )
}

export default Header