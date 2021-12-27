import { initializeApp }from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBaN-rZsOGiDnl4aNcsFNBP1bpR2MmQBJE",
    authDomain: "app-ecommerce-71a2d.firebaseapp.com",
    projectId: "app-ecommerce-71a2d",
    storageBucket: "app-ecommerce-71a2d.appspot.com",
    messagingSenderId: "561636191586",
    appId: "1:561636191586:web:c9152a867f824054db103b"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)

  