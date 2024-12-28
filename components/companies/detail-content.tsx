"use client";

import { X } from 'lucide-react';
import { Button } from '../ui/button';
import ReactMarkdown from 'react-markdown';

interface DetailContentProps {
  content: string;
  onClose: () => void;
}

export function DetailContent({ content, onClose }: DetailContentProps) {
  return (
    <div className="flex-1 h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="p-4">
        <div className="flex justify-end mb-4">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}