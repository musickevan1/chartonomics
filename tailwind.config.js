module.exports = {
      content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
      ],
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#2563eb',
              dark: '#1e40af'
            },
            secondary: {
              DEFAULT: '#1e40af',
              dark: '#1d4ed8'
            },
            background: {
              DEFAULT: '#ffffff',
              dark: '#111827'
            },
            text: {
              DEFAULT: '#111827',
              dark: '#f3f4f6'
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif']
          }
        },
      },
      plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
      ],
    }
