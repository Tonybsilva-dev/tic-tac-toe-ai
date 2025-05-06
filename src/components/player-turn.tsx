type PlayerTurnProps = {
  player: string
}

const PlayerTurn = ({ player }: PlayerTurnProps) => {
  return (
    <section className="text-center w-full border-none">
      <p className="text-base sm:text-lg md:text-xl font-semibold text-zinc-400 my-1 sm:my-2">{player}</p>
    </section>
  )
}

export default PlayerTurn