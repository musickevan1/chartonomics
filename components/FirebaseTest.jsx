import { useEffect } from 'react'
    import { auth } from '../lib/firebase'
    import { signInWithEmailAndPassword } from 'firebase/auth'

    export default function FirebaseTest() {
      useEffect(() => {
        const testAuth = async () => {
          try {
            const userCredential = await signInWithEmailAndPassword(
              auth,
              'test@example.com',
              'password'
            )
            console.log('Test login successful:', userCredential.user)
          } catch (error) {
            console.error('Test login failed:', error)
          }
        }

        testAuth()
      }, [])

      return (
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-2">Firebase Connection Test</h2>
          <p>Check browser console for test results</p>
        </div>
      )
    }
