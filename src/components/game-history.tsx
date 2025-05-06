import { getGameHistory } from "../helpers/game-history.helper";
import type { GameHistory as GameHistoryType } from "../helpers/game-history.helper";
import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

type GameHistoryProps = {
  isOpen: boolean;
  onClose: () => void;
}

const GameHistory = ({ isOpen, onClose }: GameHistoryProps) => {
  const [history, setHistory] = useState<GameHistoryType[]>([]);

  useEffect(() => {
    if (isOpen) {
      setHistory(getGameHistory());
    }
  }, [isOpen]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-6 rounded-lg w-[28rem] max-h-[80vh] overflow-y-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-xl font-bold text-emerald-600">
              Histórico de Partidas
            </Dialog.Title>
            <Dialog.Close className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 transition-colors">
              <X className="w-5 h-5" />
            </Dialog.Close>
          </div>

          {history.length === 0 ? (
            <p className="text-gray-500 text-center">Nenhuma partida registrada</p>
          ) : (
            <div className="space-y-2">
              {history.map((game) => (
                <div
                  key={game.timestamp}
                  className="p-3 rounded-lg bg-emerald-50 border border-emerald-100"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      {game.winner === null ? "Empate" : `Jogador ${game.winner} venceu`}
                    </span>
                    <span className="text-sm text-gray-500">{game.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default GameHistory; 