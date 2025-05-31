import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// إعدادات Firebase لمشروعك
const firebaseConfig = {
  apiKey: "AIzaSyBsBB8eCNAKUmWzjEDXC1DRX1n9SMoFc3U",
  authDomain: "meals-c5c34.firebaseapp.com",
  projectId: "meals-c5c34",
  storageBucket: "meals-c5c34.firebasestorage.app",
  messagingSenderId: "362647737057",
  appId: "1:362647737057:web:ac49f8e60f26bf0ac7dda0"
  // measurementId غير مطلوب حاليًا لأنه خاص بالتحليلات فقط
};

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);

// تهيئة Firestore
export const db = getFirestore(app);
