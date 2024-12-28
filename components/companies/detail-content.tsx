"use client";

import { X, Terminal } from "lucide-react";
import { Button } from "../ui/button";
import ReactMarkdown from "react-markdown";

interface DetailContentProps {
  content: string;
  onClose: () => void;
}

export function DetailContent({ content, onClose }: DetailContentProps) {
  return (
    <div className="flex-1 h-[calc(100vh-8rem)] overflow-y-auto bg-black/95">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-orange-500" />
            <h2 className="text-lg font-mono text-orange-500">./content</h2>
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
        <div className="font-mono text-sm leading-relaxed">
          <ReactMarkdown
            components={{
              h3: ({ children }) => (
                <h3 className="text-orange-500 font-bold mt-6 mb-4">
                  {children}
                </h3>
              ),
              ul: ({ children }) => (
                <ul className="space-y-2 my-4 ml-4">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="text-gray-300 flex gap-2">
                  <span className="text-orange-500">*</span>
                  {children}
                </li>
              ),
              p: ({ children }) => (
                <p className="text-gray-300 my-4 whitespace-pre-line">
                  {children}
                </p>
              ),
              code: ({ children }) => (
                <code className="text-orange-300">{children}</code>
              ),
              pre: ({ children }) => (
                <pre className="bg-black/50 border border-orange-500/20 p-4 rounded-sm my-4 overflow-x-auto whitespace-pre text-gray-300">
                  {children}
                </pre>
              ),
            }}
          >
            {content.replace(/\n\s*\n/g, "\n\n")}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
