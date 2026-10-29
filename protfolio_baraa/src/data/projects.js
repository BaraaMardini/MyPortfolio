// Each project is one card. Leave `video` or `github` as '' to hide its button.
export const PROJECTS = [
  {
    slug: 'aluminum-erp',
    title: 'Aluminum Production ERP',
    kind: 'Technical assessment',
    description:
      'A multi-stage production ERP (Cutting → Coloring → Packaging) with a 63-endpoint REST API, 62 stored procedures and 43-permission bitmask authorization.',
    tags: ['ASP.NET Core', 'SQL Server', 'React', 'JWT'],
    video: 'https://www.youtube.com/watch?v=21pXDCFc9mA',
    github: 'https://github.com/BaraaMardini/AluminumSystem',
  },
  {
    slug: 'accounting-inventory',
    title: 'Accounting & Inventory System',
    kind: 'Freelance project',
    description:
      'Invoicing, inventory, expenses, sales, returns and reporting, with atomic multi-line invoices and an offline-capable Electron client protected by hardware-ID licensing.',
    tags: ['ASP.NET Core', 'SQL Server', 'Electron', 'React'],
    video: 'https://www.youtube.com/watch?v=L7M9yVbDWNM',
    github: 'https://github.com/BaraaMardini/Accounting-Inventory-Management-System',
  },
  {
    slug: 'hospital-system',
    title: 'Hospital Management System',
    kind: 'Full-stack system',
    description:
      'A complete hospital system covering clinical, scheduling, billing and administrative workflows, with a normalized 24-table database and a layered REST API of 127 endpoints.',
    tags: ['ASP.NET Core', 'SQL Server', 'React', 'JWT'],
    video: 'https://www.youtube.com/watch?v=ZNTBbVXg9lM',
    github: 'https://github.com/BaraaMardini/HospitalSystem',
  },
  {
    slug: 'codegen-engine',
    title: 'Code Generation Platform',
    kind: 'Developer tool',
    description:
      'A metadata-driven generator that turns SQL Server tables into complete ASP.NET Core CRUD backends, cutting repetitive scaffolding from days to hours across my other systems.',
    tags: ['C#', 'ASP.NET Core', 'SQL Server', 'PowerShell'],
    video:
      'https://www.linkedin.com/posts/baraa-mardini-a42698356_dotnetcore-backenddevelopment-apis-activity-7438229239457488896-Nf5F',
    github: 'https://github.com/BaraaMardini/CodeGen-Engine-Showcase',
  },
  {
    slug: 'dvld',
    title: 'DVLD Management System',
    kind: 'Desktop app',
    description:
      'A three-tier desktop application for driver licensing: registration, renewals, replacements, tests and detentions, built with 44 reusable WinForms components.',
    tags: ['C#', 'WinForms', 'SQL Server', 'ADO.NET'],
    video: '',
    github: 'https://github.com/BaraaMardini/DVLDSystem',
  },
];