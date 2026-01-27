# Piconeuron Landing Page

A clean, security-focused landing page for Piconeuron - a MicroSaaS studio.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Outfit (display), DM Sans (body), JetBrains Mono (code)
- **Deployment**: Vercel

## Pages

- `/` - Homepage (studio + products + security overview + contact)
- `/about` - About the team and mission
- `/security` - Security & Privacy practices
- `/support` - Support, billing, and beta info
- `/terms` - Terms of Service
- `/privacy` - Privacy Policy
- `/status` - System status

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy via GitHub

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Vercel will auto-detect Next.js and deploy

### Custom Domain

After deployment:
1. Go to your Vercel project settings
2. Navigate to Domains
3. Add `piconeuron.com`
4. Update your DNS records as instructed

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```ts
colors: {
  'pico': {
    'dark': '#0a0f1a',      // Main background
    'darker': '#060a12',    // Darker background
    'navy': '#0d1526',      // Card backgrounds
    'slate': '#1a2436',     // Borders
    'accent': '#3b82f6',    // Primary accent (blue)
    'accent-dim': '#2563eb', // Hover accent
    'green': '#10b981',     // Success states
    'amber': '#f59e0b',     // Warning states
  }
}
```

### Content

- Edit page content directly in the `/app/` directory
- Each page is a `page.tsx` file in its respective folder

### Adding New Products

To add a new product to the homepage, edit `/app/page.tsx` and add a new product card in the Products section.

## Project Structure

```
piconeuron/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── about/page.tsx    # About page
│   ├── security/page.tsx # Security page
│   ├── support/page.tsx  # Support page
│   ├── terms/page.tsx    # Terms page
│   ├── privacy/page.tsx  # Privacy page
│   └── status/page.tsx   # Status page
├── components/
│   ├── Navigation.tsx    # Header navigation
│   └── Footer.tsx        # Footer
└── public/               # Static assets
```

## License

© 2025 Piconeuron. All rights reserved.
