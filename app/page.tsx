"use client";

import { useState } from "react";
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
    <div className="max-w-7xl mx-auto bg-black">
      <div className="flex justify-between items-center mb-8 p-4 border-b border-orange-500/20">
        <div>
          <h1 className="text-2xl font-mono text-orange-500">~/companies</h1>
          <p className="text-orange-400/60 mt-1 font-mono text-sm">
            $ manage-companies --list-all
          </p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 font-mono text-black">
          <Plus className="mr-2 h-4 w-4" />
          new_company.sh
        </Button>
      </div>

      <div className="flex gap-1">
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

        {selectedCompany &&
          selectedType &&
          companyDetails[selectedCompany.id] && (
            <DetailContent
              content={companyDetails[selectedCompany.id][selectedType]}
              onClose={() => setSelectedType(null)}
            />
          )}
      </div>
    </div>
  );
}
