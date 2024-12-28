export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export interface CompanyDetail {
  id: string;
  title: string;
  content: string;
}

export type DetailType = 
  | 'Summary'
  | 'Product'
  | 'Blog'
  | 'Social'
  | 'CEO'
  | 'Team'
  | 'Tech Stack'
  | 'Pricing';