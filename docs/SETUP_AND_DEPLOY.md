# Setup and Deploy Guide

## Local setup
1. Copy `.env.example` to `.env.local`.
2. Fill Firebase and payment credentials.
3. Run `npm install` then `npm run dev`.

## Firebase
- Enable Auth providers: Email/Password, Google, Phone.
- Create Firestore, Realtime DB, Storage.
- Deploy Firebase Functions for privileged operations.
- Configure Firestore rules for owner/admin policy.

## Data Connect (PostgreSQL)
- Configure Firebase Data Connect endpoint in `FIREBASE_DATA_CONNECT_URL`.
- Keep all SQL credentials server-side only.

## Deployment
- Deploy web app (Vercel/Firebase Hosting).
- Deploy `functions` for domain verification, publish approvals, and payment webhooks.
- Configure custom-domain edge routing to resolve `Host` header to page record.
- Set up background jobs for SSL renewal and DNS re-check.
