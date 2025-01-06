import { db } from '../lib/firebase'
    import {
      collection,
      addDoc,
      getDocs,
      doc,
      updateDoc,
      deleteDoc,
      query,
      where
    } from 'firebase/firestore'

    export const saveChartData = async (userId, chartData) => {
      try {
        const docRef = await addDoc(collection(db, 'chartData'), {
          userId,
          ...chartData,
          createdAt: new Date().toISOString()
        })
        return docRef.id
      } catch (error) {
        console.error('Error saving chart data: ', error)
        throw error
      }
    }

    export const getUserChartData = async (userId) => {
      try {
        const q = query(
          collection(db, 'chartData'),
          where('userId', '==', userId)
        )
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      } catch (error) {
        console.error('Error fetching chart data: ', error)
        throw error
      }
    }

    export const updateChartData = async (docId, updatedData) => {
      try {
        const docRef = doc(db, 'chartData', docId)
        await updateDoc(docRef, updatedData)
      } catch (error) {
        console.error('Error updating chart data: ', error)
        throw error
      }
    }

    export const deleteChartData = async (docId) => {
      try {
        await deleteDoc(doc(db, 'chartData', docId))
      } catch (error) {
        console.error('Error deleting chart data: ', error)
        throw error
      }
    }
