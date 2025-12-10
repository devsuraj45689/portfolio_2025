module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./sections/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'stripe-blue': '#635BFF',
        'stripe-purple': '#8E7BFF'
      },
      backgroundImage: {
        'stripe-gradient': 'linear-gradient(135deg,#635BFF 0%,#8E7BFF 100%)'
      }
    }
  },
  plugins: [],
}
