import { useState } from 'react'
    import Papa from 'papaparse'

    export default function DataImport({ onDataUpload }) {
      const [file, setFile] = useState(null)
      const [error, setError] = useState('')

      const handleFileUpload = (e) => {
        const file = e.target.files[0]
        if (!file) return

        if (file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
          setError('Please upload a valid CSV file')
          return
        }

        Papa.parse(file, {
          header: true,
          complete: (results) => {
            if (results.errors.length > 0) {
              setError('Error parsing CSV file')
            } else {
              setError('')
              onDataUpload(results.data)
            }
          },
          error: () => setError('Error reading file')
        })
      }

      return (
        <div className="p-6 bg-white rounded-lg shadow-md">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-primary file:text-white
              hover:file:bg-secondary"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )
    }
