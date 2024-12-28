"use client";

import { useState } from 'react';
import { Company } from '@/types/company';
import { cn } from '@/lib/utils';

interface CompanyListProps {
  companies: Company[];
  onSelect: (company: Company) => void;
  selectedId?: string;
}

export function CompanyList({ companies, onSelect, selectedId }: CompanyListProps) {
  return (
    <div className="w-80 border-r border-neutral-800 h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-4">Companies</h2>
        <div className="space-y-2">
          {companies.map((company) => (
            <button
              key={company.id}
              onClick={() => onSelect(company)}
              className={cn(
                "w-full p-4 rounded-lg text-left transition-colors",
                selectedId === company.id
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
              )}
            >
              <div className="font-medium">{company.name}</div>
              <div className="text-sm text-neutral-500">{company.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}