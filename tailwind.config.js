/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#1a0b2e',
        secondary: '#2e1b4e', // Making up a secondary color just in case
      },
      fontFamily: {
        sans: ['FamiljenGrotesk_400Regular', 'sans-serif'],
        medium: ['FamiljenGrotesk_500Medium', 'sans-serif'],
        semibold: ['FamiljenGrotesk_600SemiBold', 'sans-serif'],
        bold: ['FamiljenGrotesk_700Bold', 'sans-serif'],
        familjen: ['FamiljenGrotesk_400Regular', 'sans-serif'],
        'familjen-medium': ['FamiljenGrotesk_500Medium', 'sans-serif'],
        'familjen-semibold': ['FamiljenGrotesk_600SemiBold', 'sans-serif'],
        'familjen-bold': ['FamiljenGrotesk_700Bold', 'sans-serif'],
        'familjen-grotesk': ['FamiljenGrotesk_400Regular', 'sans-serif'],
        'familjen-grotesk-medium': ['FamiljenGrotesk_500Medium', 'sans-serif'],
        'familjen-grotesk-semibold': ['FamiljenGrotesk_600SemiBold', 'sans-serif'],
        'familjen-grotesk-bold': ['FamiljenGrotesk_700Bold', 'sans-serif'],
        inter: ['Inter_400Regular', 'sans-serif'],
        'inter-medium': ['Inter_500Medium', 'sans-serif'],
        'inter-semibold': ['Inter_600SemiBold', 'sans-serif'],
        'inter-bold': ['Inter_700Bold', 'sans-serif'],
        poppins: ['Poppins_400Regular', 'sans-serif'],
        'poppins-medium': ['Poppins_500Medium', 'sans-serif'],
        'poppins-semibold': ['Poppins_600SemiBold', 'sans-serif'],
        'poppins-bold': ['Poppins_700Bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
