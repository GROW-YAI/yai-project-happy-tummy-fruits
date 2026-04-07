# Happy Tummy Foods Website

A beautiful, responsive website for Happy Tummy Foods - a premium cereal brand offering natural, nutritious cereals for babies and adults.

##  Developer

**Freda Araba Obiri**
- Innovator & Nutrition Enthusiast
- Sekondi-Takoradi, Western Region, Ghana

##  Contact

- **Phone:** +233 (0) 20 123 4567
- **Email:** contact@fredascereals.com
- **Facebook:** [Happy Tummy Foods](https://www.facebook.com/profile.php?id=100081530135792)
- **Instagram:** [happy.tummyfoodsgh](https://www.instagram.com/happy.tummyfoodsgh/?utm_source=ig_web_button_share_sheet)
- **Twitter:** [happytummyfood1](https://x.com/happytummyfood1)

##  Project Overview

This is a Next.js application for Happy Tummy Foods, featuring:
- Modern, responsive design with Tailwind CSS
- Product showcase for premium cereals
- Contact and about pages
- Accessibility features powered by Boafo Widget

## ️ Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Accessibility:** Boafo Accessibility Widget

##  Setup Instructions

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GROW-YAI/yai-project-happy-tummy-fruits.git
cd yai-project-happy-tummy-fruits
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env` (if available)
   - Or create a `.env` file in the root directory
   - Add your Boafo API keys (see section below)

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

##  Boafo Widget API Keys

This project uses the Boafo Accessibility Widget to enhance accessibility. To set up the widget:

### Obtaining Your API Keys

1. Visit the [Boafo Dashboard](https://boafo.com/dashboard)
2. Sign up or log in to your account
3. Create a new project or select an existing one
4. Copy your API key from the dashboard
5. Add it to your `.env` file:
   ```
   NEXT_PUBLIC_BOAFO_API_KEY=your_api_key_here
   ```

### Environment Variables

The following environment variables are required:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_BOAFO_API_KEY` | Primary Boafo widget API key | `XXXXXXX` |


**Important:** Never commit your `.env` file to version control. It's already added to `.gitignore`.

## ️ Security Notes

- API keys are stored in environment variables for security
- The `.env` file is excluded from version control
- Use different API keys for development and production environments
- Keep your API keys confidential and never expose them in client-side code


##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is proprietary and confidential.

---

© 2024 Happy Tummy Foods. All rights reserved.