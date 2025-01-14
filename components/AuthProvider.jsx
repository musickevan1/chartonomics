import { createContext, useContext, useEffect, useState } from 'react'
    import { initializeApp } from 'firebase/app'
    import { getAuth, onAuthStateChanged } from 'firebase/auth'

    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    }

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    const AuthContext = createContext()

    export function AuthProvider({ children }) {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user)
          setLoading(false)
        })
        return () => unsubscribe()
      }, [])

      return (
        <AuthContext.Provider value={{ user, loading }}>
          {children}
        </AuthContext.Provider>
      )
    }

    export const useAuth = () => useContext(AuthContext)
