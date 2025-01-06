import { initializeApp } from 'firebase/app'
    import { getFirestore } from 'firebase/firestore'
    import { getAuth } from 'firebase/auth'
    import { getAnalytics } from 'firebase/analytics'

    const firebaseConfig = {
      apiKey: "AIzaSyBC1Nrt2C0MJgoatWHbZCfPv27cl8Y8Zhk",
      authDomain: "chartonomics-db1f4.firebaseapp.com",
      projectId: "chartonomics-db1f4",
      storageBucket: "chartonomics-db1f4.firebasestorage.app",
      messagingSenderId: "469073587431",
      appId: "1:469073587431:web:e7abf4bd1abfdc7dbd0642",
      measurementId: "G-DX743NV7N7"
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    export const db = getFirestore(app)
    export const auth = getAuth(app)

    // Initialize Analytics only in client-side
    let analytics
    if (typeof window !== 'undefined') {
      analytics = getAnalytics(app)
    }
    export { analytics }
