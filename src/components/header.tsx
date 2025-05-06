import { Gamepad2Icon } from "lucide-react"

type HeaderProps = {
  title?: string
}

const Header = ({ title = 'Jogo da Velha' }: HeaderProps) => {
  return (
    <header className="w-full">
      <div className="flex items-center justify-center gap-2">
        <Gamepad2Icon className="w-10 h-10" />
        <h1 className="text-4xl font-bold leading-none tracking-tight">{title}</h1>
      </div>
    </header>
  )
}

export default Header