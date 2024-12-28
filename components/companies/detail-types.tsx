"use client";

import { DetailType } from '@/types/company';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

interface DetailTypesProps {
  types: DetailType[];
  selectedType?: DetailType;
  onSelect: (type: DetailType) => void;
  onClose: () => void;
}

export function DetailTypes({ types, selectedType, onSelect, onClose }: DetailTypesProps) {
  return (
    <div className="w-64 border-r border-neutral-800 h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Details</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => onSelect(type)}
              className={cn(
                "w-full p-3 rounded-lg text-left transition-colors",
                selectedType === type
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
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