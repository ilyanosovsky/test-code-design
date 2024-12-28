"use client";

import { Company } from "@/types/company";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";

interface CompanyListProps {
  companies: Company[];
  onSelect: (company: Company) => void;
  selectedId?: string;
}

export function CompanyList({
  companies,
  onSelect,
  selectedId,
}: CompanyListProps) {
  return (
    <div className="w-80 border-r border-orange-500/20 h-[calc(100vh-8rem)] overflow-y-auto bg-black/95">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="h-4 w-4 text-orange-500" />
          <h2 className="text-lg font-mono text-orange-500">./companies</h2>
        </div>
        <div className="space-y-1">
          {companies.map((company) => (
            <button
              key={company.id}
              onClick={() => onSelect(company)}
              className={cn(
                "w-full p-3 rounded-sm text-left transition-colors font-mono border border-transparent",
                selectedId === company.id
                  ? "bg-orange-500/10 text-orange-400 border-orange-500/50"
                  : "text-orange-400/70 hover:bg-orange-500/5 hover:text-orange-400"
              )}
            >
              <div className="flex items-center">
                <span className="text-orange-500 mr-2">$</span>
                <div>
                  <div className="font-medium">{company.name}</div>
                  {/* <div className="text-sm opacity-60">
                    {company.description}
                  </div> */}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
