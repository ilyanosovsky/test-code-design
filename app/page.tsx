"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CompanyList } from "@/components/companies/company-list";
import { DetailTypes } from "@/components/companies/detail-types";
import { DetailContent } from "@/components/companies/detail-content";
import { companies, detailTypes, companyDetails } from "@/data/companies";
import { Company, DetailType } from "@/types/company";

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedType, setSelectedType] = useState<DetailType | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-white">Companies</h1>
          <p className="text-neutral-400 mt-1">Manage companies you are following</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Plus className="mr-2 h-4 w-4" />
          Add Company
        </Button>
      </div>
      
      <div className="flex gap-6 bg-neutral-900/50 rounded-lg p-6">
        <CompanyList
          companies={companies}
          selectedId={selectedCompany?.id}
          onSelect={(company) => {
            setSelectedCompany(company);
            setSelectedType(null);
          }}
        />
        
        {selectedCompany && (
          <DetailTypes
            types={detailTypes}
            selectedType={selectedType || undefined}
            onSelect={setSelectedType}
            onClose={() => {
              setSelectedCompany(null);
              setSelectedType(null);
            }}
          />
        )}
        
        {selectedCompany && selectedType && companyDetails[selectedCompany.id] && (
          <DetailContent
            content={companyDetails[selectedCompany.id][selectedType]}
            onClose={() => setSelectedType(null)}
          />
        )}
      </div>
    </div>
  );
}