# KashStudio

Digital Application Marketplace (Web / Android / iOS) with licensed and full copyright ownership models.

## Core architecture

| Layer | Technology |
| --- | --- |
| Frontend | Next.js + Tailwind CSS |
| Animations | Framer Motion |
| Auth | Firebase Auth |
| Database | Firestore |
| Backend Logic | Firebase Cloud Functions |
| Payments | Razorpay |
| Storage | Firebase Storage |
| Hosting | Netlify |
| Analytics | Google Analytics + Search Console |

## Ownership models (system enforced)

- **Licensed**: Multiple buyers allowed, reviews enabled.
- **Full copyright**: One-time exclusive sale, auto-hidden after purchase.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Firebase configuration

Set the following in `.env.local`:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
NEXT_PUBLIC_PLATFORM_FEE_PERCENT=8
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_SEARCH_CONSOLE=
```

## Cloud Functions

The `/functions` directory contains placeholders for payment verification, download URLs, order processing, and notifications.
