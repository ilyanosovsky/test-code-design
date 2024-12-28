import { DetailType, Company } from "../types/company";

export const companies: Company[] = [
  {
    id: "1",
    name: "Vercel",
    logo: "/company-logos/vercel.png",
    description: "Frontend cloud platform",
  },
  {
    id: "2",
    name: "Stripe",
    logo: "/company-logos/stripe.png",
    description: "Payment infrastructure",
  },
  {
    id: "3",
    name: "Linear",
    logo: "/company-logos/linear.png",
    description: "Project management tool",
  },
  {
    id: "4",
    name: "Supabase",
    logo: "/company-logos/supabase.png",
    description: "Open source Firebase alternative",
  },
  {
    id: "5",
    name: "Notion",
    logo: "/company-logos/notion.png",
    description: "All-in-one workspace",
  },
  {
    id: "6",
    name: "Railway",
    logo: "/company-logos/railway.png",
    description: "Development platform",
  },
  {
    id: "7",
    name: "Planet Scale",
    logo: "/company-logos/planetscale.png",
    description: "Serverless MySQL platform",
  },
  {
    id: "8",
    name: "Figma",
    logo: "/company-logos/figma.png",
    description: "Design platform",
  },
  {
    id: "9",
    name: "Discord",
    logo: "/company-logos/discord.png",
    description: "Chat for communities",
  },
  {
    id: "10",
    name: "Raycast",
    logo: "/company-logos/raycast.png",
    description: "Productivity tool",
  },
];

export const detailTypes: DetailType[] = [
  "Summary",
  "Product",
  "Blog",
  "Social",
  "CEO",
  "Team",
  "Tech Stack",
  "Pricing",
];

export const companyDetails: Record<string, Record<DetailType, string>> = {
  "1": {
    Summary: `
### $ cat vercel_summary.md

Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.

* Founded: 2015
* Headquarters: San Francisco, CA
* Industry: Cloud Computing, Web Development
* Valuation: $2.5B (2021)
* Total Funding: $313M

Key Achievements:
* Pioneered the Frontend Cloud concept
* Created and maintains Next.js framework
* Powers over 1M+ web projects
* Serves 25B+ requests per week
`,
    Product: `
### $ ls -la /products/

\`\`\`
drwxr-xr-x  1 vercel  staff   Next.js
drwxr-xr-x  1 vercel  staff   Edge Network
drwxr-xr-x  1 vercel  staff   Analytics
drwxr-xr-x  1 vercel  staff   Infrastructure
\`\`\`

### $ cat /products/details.md

* Next.js Framework
  - Server-side rendering
  - Static site generation
  - Incremental Static Regeneration
  - Edge Functions
  - Image/Font Optimization

* Edge Network
  - Global CDN
  - Auto-scaling
  - Zero-config deployments
  - Edge Functions
  - Edge Middleware

* Analytics & Monitoring
  - Core Web Vitals
  - Real-time insights
  - Error tracking
  - Performance monitoring
  - A/B testing capabilities
`,
    Blog: `
### $ curl https://vercel.com/blog/latest

Latest Posts:

[2024-03-15] Introducing Next.js 14

[2024-03-01] The Evolution of Edge Computing

[2024-02-15] Serverless Architecture Best Practices

[2024-02-01] Building for the Edge: A Complete Guide

[2024-01-15] Performance Optimization Techniques

[2024-01-01] Year in Review: 2023 Achievements

Tags: #nextjs #edge #serverless #performance
`,
    Social: `
### $ grep -r "social_links" /vercel/

* GitHub:     github.com/vercel       (Stars: 250k+)
* Twitter:    @vercel                 (Followers: 400k+)
* LinkedIn:   Vercel Inc             (Employees: 350+)
* Discord:    vercel.com/discord     (Members: 50k+)
* YouTube:    Vercel                 (Subscribers: 100k+)

### Recent Activity:
* 🔥 Trending on GitHub with Next.js 14
* 📈 500k+ developers in community
* 🎯 Daily tech insights and updates
`,
    CEO: `
### $ whoami --ceo

\`\`\`
Guillermo Rauch
├── Role: CEO & Founder
├── Since: 2015
├── Previous: 
│   ├── Created Socket.IO
│   └── Created Mongoose
├── Notable:
│   ├── Pioneer in JavaScript
│   ├── Author: "Smashing Node.js"
│   └── Early MongoDB contributor
└── Social:
    ├── Twitter: @rauchg
    └── GitHub: rauchg
\`\`\`

### Leadership Style:
* Developer-first mindset
* Open-source advocate
* Innovation-driven
* Community-focused
`,
    Team: `
### $ ls -la /team/departments/

total 350
drwxr-xr-x  Engineering     250 members
drwxr-xr-x  Product         40  members
drwxr-xr-x  Design         30  members
drwxr-xr-x  Sales          20  members
drwxr-xr-x  Marketing      10  members

### Culture:
* Remote-first
* Open source mindset
* Innovation-driven
* Global presence
* Strong learning culture

### Benefits:
* Competitive salary
* Equity packages
* Remote work
* Learning budget
* Health insurance
`,
    "Tech Stack": `
### $ docker ps -a /vercel/stack

\`\`\`
CONTAINER ID    IMAGE           PORTS
------------   -------------   -----
Next.js        Frontend        3000
React          UI Library     
Node.js        Backend        
Rust           Edge Runtime   
Go             Systems        
PostgreSQL     Database        5432
Redis          Cache           6379
\`\`\`

### Infrastructure:
* Edge Network: 
  - Global CDN
  - Edge Functions
  - Edge Middleware

* Cloud Providers:
  - AWS
  - GCP
  - Azure
`,
    Pricing: `
### $ cat /pricing/plans.json

\`\`\`
{
  "hobby": {
    "price": "Free",
    "features": [
      "Unlimited static sites",
      "Continuous deployment",
      "HTTPS enabled",
      "Basic analytics"
    ]
  },
  "pro": {
    "price": "$20/month",
    "features": [
      "Advanced analytics",
      "Password protection",
      "Custom domains",
      "Team collaboration"
    ]
  },
  "enterprise": {
    "price": "Custom",
    "features": [
      "SSO authentication",
      "Advanced security",
      "Dedicated support",
      "Custom contracts"
    ]
  }
}
\`\`\`

### $ ls -l /pricing/tiers/

\`\`\`
total 3 plans

-rw-r--r--  1  vercel  staff   Hobby
  └── FREE
      ├── Deploy: Unlimited
      ├── Bandwidth: 100GB
      └── SSL: Included

-rw-r--r--  1  vercel  staff   Pro
  └── $20/MONTH
      ├── Deploy: Unlimited
      ├── Bandwidth: 1TB
      └── Teams: Up to 10

-rw-r--r--  1  vercel  staff   Enterprise
  └── CUSTOM
      ├── Deploy: Unlimited
      ├── Bandwidth: Custom
      └── Teams: Unlimited
\`\`\`

### $ grep "popular_choice" /pricing/stats.txt

> Pro Plan is the most popular choice for growing teams
> Used by 80% of our business customers
> Recommended for professional projects
`,
  },
  // Add similar detailed content for other companies...
};
