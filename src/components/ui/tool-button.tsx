import { LucideIcon } from "lucide-react";
import { Tooltip } from "./tooltip";

type ToolButtonProps = {
  icon: LucideIcon;
  tooltip: string;
  onClick: () => void;
  isActive?: boolean;
}

export const ToolButton = ({ icon: Icon, tooltip, onClick, isActive = false }: ToolButtonProps) => {
  return (
    <Tooltip content={tooltip} side="top">
      <button
        onClick={onClick}
        className={`group w-full p-2 sm:p-3 rounded-lg transition-all duration-200 flex items-center justify-center
          ${isActive
            ? 'bg-emerald-200 hover:bg-emerald-200'
            : 'hover:bg-emerald-100'
          }`}
      >
        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200
          ${isActive
            ? 'text-emerald-800 group-hover:scale-110'
            : 'text-emerald-600 group-hover:scale-110'
          }`}
        />
      </button>
    </Tooltip>
  );
}; 