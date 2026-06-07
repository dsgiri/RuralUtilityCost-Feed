import * as LucideIcons from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function ToolCard({ tool, isFavorite, onToggleFavorite }: ToolCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] h-full">
      <div className="flex justify-between items-start">
        <span className="text-[10px] uppercase px-1.5 py-0.5 bg-earth-200 rounded text-slate-sub font-semibold tracking-wider">
          {tool.category}
        </span>
        <button
          onClick={() => onToggleFavorite(tool.id)}
          className={`cursor-pointer focus:outline-none transition-colors ${
            isFavorite ? 'text-red-500' : 'text-slate-300 hover:text-red-400'
          }`}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <LucideIcons.Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500' : ''}`} />
        </button>
      </div>

      <div className="flex-1 mt-3">
        <h4 className="font-bold text-[14px] text-slate-text">{tool.title}</h4>
        <p className="text-[12px] text-slate-500 mt-1 line-clamp-2">
          {tool.description}
        </p>

        <div className="bg-slate-50 border-l-[3px] border-brand-green p-2 my-3 text-[12px] text-slate-text">
          Primary Outcome:<br />
          <span className="font-bold text-brand-green text-[14px]">{tool.primaryOutcome}</span>
        </div>
      </div>

      <button className="bg-brand-blue text-white text-center py-2 px-3 rounded-md text-[13px] font-semibold w-full block hover:bg-blue-700 transition-colors cursor-pointer mt-auto tracking-wide">
        Launch Tool
      </button>
    </div>
  );
}
