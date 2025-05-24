# PDF to JSON Converter

Questo progetto consiste in due parti:
1. Un backend Python (Flask) per la conversione di PDF in JSON
2. Un frontend Next.js per l'interfaccia utente

## Backend (Python/Flask)

### Requisiti
- Python 3.8+
- pip

### Installazione
```bash
cd pdf-backend
python -m venv venv
source venv/bin/activate  # Su Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Avvio
```bash
python app.py
```
Il server sarà disponibile su `http://localhost:5000`

## Frontend (Next.js)

### Requisiti
- Node.js 16+
- npm o yarn

### Installazione
```bash
cd pdf-frontend
npm install
# oppure
yarn install
```

### Avvio
```bash
npm run dev
# oppure
yarn dev
```
L'applicazione sarà disponibile su `http://localhost:3000`

## Struttura del Progetto
```
pdf-to-json-converter/
├── pdf-backend/          # Backend Python/Flask
│   ├── app.py
│   ├── requirements.txt
│   └── ...
└── pdf-frontend/         # Frontend Next.js
    ├── src/
    ├── package.json
    └── ...
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
