# MIP Website

The official website for the **Medical Informatics Platform (MIP)**, part of the EBRAINS research infrastructure, co-funded by the European Union.

## Overview

The MIP is a powerful federated data processing and analysis system that enables researchers to analyze patient data distributed across centers without requiring the data to leave its site of origin—preserving patient privacy.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20.19 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173` (or similar port shown in the terminal).

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
mip-website/
├── index.html          # Main HTML file
├── style.css           # Global stylesheet
├── package.json        # Project configuration
├── public/
│   ├── img/            # Static images
│   │   ├── eu-fund-logo.png
│   │   ├── ebrains-logo.svg
│   │   └── ...
│   └── content/        # Content files
└── src/
    └── main.js         # JavaScript entry point
```

## Deployment

The site uses GitHub Actions for CI/CD:

| Branch/Tag | Deployment | Indexing |
|------------|------------|----------|
| `dev` | Automatic on push | Blocked (noindex) |
| `main` / `master` | Automatic on push | Allowed |

### Deploy to Production

Production deploys are triggered automatically when changes are pushed to `main` or `master`.

## License

© 2025 CHUV/ATHENA and contributors incl Manuel Spuhler who made the original website. All rights reserved.

## Acknowledgements

- Co-funded by the European Union
- Part of [EBRAINS](https://ebrains.eu/) research infrastructure
