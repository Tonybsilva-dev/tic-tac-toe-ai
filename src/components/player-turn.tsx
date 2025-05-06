type PlayerTurnProps = {
  player: string
}

const PlayerTurn = ({ player }: PlayerTurnProps) => {
  return (
    <section className="text-center w-full border-none">
      <p className="text-xl font-semibold text-zinc-400 my-2">{player}</p>
    </section>
  )
}

export default PlayerTurn