"use client";

import { DetailType } from "@/types/company";
import { X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface DetailTypesProps {
  types: DetailType[];
  selectedType?: DetailType;
  onSelect: (type: DetailType) => void;
  onClose: () => void;
}

export function DetailTypes({
  types,
  selectedType,
  onSelect,
  onClose,
}: DetailTypesProps) {
  return (
    <div className="w-64 border-r border-orange-500/20 h-[calc(100vh-8rem)] overflow-y-auto bg-black/95">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-orange-500" />
            <h2 className="text-lg font-mono text-orange-500">./details</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 h-7 w-7"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => onSelect(type)}
              className={cn(
                "w-full p-3 rounded-sm text-left transition-colors font-mono border border-transparent",
                selectedType === type
                  ? "bg-orange-500/10 text-orange-400 border-orange-500/50"
                  : "text-orange-400/70 hover:bg-orange-500/5 hover:text-orange-400"
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
