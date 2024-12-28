import { DetailType, Company } from '../types/company';

export const companies: Company[] = [
  {
    id: '1',
    name: 'Vercel',
    logo: '/company-logos/vercel.png',
    description: 'Frontend cloud platform'
  },
  {
    id: '2',
    name: 'Stripe',
    logo: '/company-logos/stripe.png',
    description: 'Payment infrastructure'
  },
  {
    id: '3',
    name: 'Linear',
    logo: '/company-logos/linear.png',
    description: 'Project management tool'
  },
  {
    id: '4',
    name: 'Supabase',
    logo: '/company-logos/supabase.png',
    description: 'Open source Firebase alternative'
  },
  {
    id: '5',
    name: 'Notion',
    logo: '/company-logos/notion.png',
    description: 'All-in-one workspace'
  },
  {
    id: '6',
    name: 'Railway',
    logo: '/company-logos/railway.png',
    description: 'Development platform'
  },
  {
    id: '7',
    name: 'Planet Scale',
    logo: '/company-logos/planetscale.png',
    description: 'Serverless MySQL platform'
  },
  {
    id: '8',
    name: 'Figma',
    logo: '/company-logos/figma.png',
    description: 'Design platform'
  },
  {
    id: '9',
    name: 'Discord',
    logo: '/company-logos/discord.png',
    description: 'Chat for communities'
  },
  {
    id: '10',
    name: 'Raycast',
    logo: '/company-logos/raycast.png',
    description: 'Productivity tool'
  }
];

export const detailTypes: DetailType[] = [
  'Summary',
  'Product',
  'Blog',
  'Social',
  'CEO',
  'Team',
  'Tech Stack',
  'Pricing'
];

export const companyDetails: Record<string, Record<DetailType, string>> = {
  '1': {
    Summary: '# Vercel\n\nVercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.',
    Product: '# Products\n\n- Next.js\n- Vercel Edge Functions\n- Vercel Analytics\n- Image Optimization',
    Blog: '# Latest Blog Posts\n\n- Introducing Next.js 14\n- Edge Functions Evolution\n- The Future of Frontend Development',
    Social: '# Social Media\n\n- Twitter: @vercel\n- GitHub: vercel/next.js\n- LinkedIn: Vercel',
    CEO: '# Leadership\n\nGuilhermo Rauch - CEO and Founder',
    Team: '# Team\n\n200+ employees globally distributed',
    'Tech Stack': '# Technology Stack\n\n- Node.js\n- React\n- Next.js\n- Edge Computing\n- Serverless Functions',
    Pricing: '# Pricing Plans\n\n- Hobby: Free\n- Pro: $20/month\n- Enterprise: Custom'
  },
  // Add similar detailed content for other companies...
};