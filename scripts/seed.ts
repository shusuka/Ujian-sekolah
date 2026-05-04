/**
 * Firebase Firestore Seeder
 *
 * Usage:
 *   npx tsx scripts/seed.ts
 *
 * This script uploads all 5 sessions of questions for each subject to Firestore.
 * Run this once after setting up your Firebase project and .env.local file.
 *
 * Prerequisites:
 *   - Firebase project created
 *   - .env.local configured with NEXT_PUBLIC_FIREBASE_* variables
 *   - npm install (dependencies installed)
 */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import * as dotenv from "dotenv";
import * as path from "path";

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Validate config
const missingVars = Object.entries(firebaseConfig)
  .filter(([, v]) => !v)
  .map(([k]) => k);

if (missingVars.length > 0) {
  console.error("❌ Missing Firebase environment variables:");
  missingVars.forEach((v) => console.error(`   - ${v}`));
  console.error("\nPlease copy .env.local.example to .env.local and fill in your Firebase values.");
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Override the firebase.ts exports for seeding
process.env.FIRESTORE_INITIALIZED = "true";

async function main() {
  console.log("🔥 Starting Firebase Firestore seeder...\n");

  // Import uploadSubjectSessions after Firebase is initialized
  const { uploadSubjectSessions } = await import("../lib/firestore");

  const subjects = ["pai", "pancasila", "matematika", "binggris", "ipas", "plbj", "bindonesia"];

  let successCount = 0;
  let failCount = 0;

  for (const subjectId of subjects) {
    try {
      console.log(`📚 Uploading ${subjectId}...`);
      await uploadSubjectSessions(subjectId);
      console.log(`   ✅ ${subjectId} - 5 sessions uploaded successfully\n`);
      successCount++;
    } catch (error) {
      console.error(`   ❌ ${subjectId} - Failed:`, error);
      failCount++;
    }
  }

  console.log("─".repeat(50));
  console.log(`\n🎉 Seeding complete!`);
  console.log(`   ✅ Success: ${successCount} subjects`);
  if (failCount > 0) {
    console.log(`   ❌ Failed: ${failCount} subjects`);
  }
  console.log(`\nYour quiz app is ready! Start with: npm run dev`);
  process.exit(0);
}

main().catch((error) => {
  console.error("❌ Seeder failed:", error);
  process.exit(1);
});
