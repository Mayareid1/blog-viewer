// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        enter: 'enter 0.5s both',
        slideUp: 'slideUp 0.5s both',
        fadeIn: 'fadeIn 0.5s both'
      },
      keyframes: {
        enter: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  }
}