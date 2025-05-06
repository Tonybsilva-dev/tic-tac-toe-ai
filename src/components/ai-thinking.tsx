import { Brain } from "lucide-react";

type AIThinkingProps = {
  isThinking: boolean;
}

const AIThinking = ({ isThinking }: AIThinkingProps) => {
  if (!isThinking) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-gray-600">
        <Brain className="w-8 h-8 animate-pulse" />
        <span className="font-medium">IA pensando...</span>
      </div>
    </div>
  );
};

export default AIThinking; 