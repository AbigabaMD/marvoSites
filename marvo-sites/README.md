# Nova - Fintech Solutions (React Version)

This is a React conversion of the Nova Bootstrap 5 Business Template.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
nova-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Pricing.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Stats.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useAOS.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Features

- React components for all sections
- Bootstrap 5 styling
- Responsive design
- AOS animations
- Back to top button
- Contact form with validation

## Note

The static assets (images, CSS, JS) are referenced from the `/` directory. Make sure to keep that directory intact for the assets to work properly.