import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { env } from '@/config/env';

const app = getApps()[0] ?? initializeApp(env.firebase);

export const firebaseAuth = getAuth(app);
export const firestore = getFirestore(app);
