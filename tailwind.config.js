/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {

      fontSize: {
        'heading-h1': [
          'clamp(2.8rem, 4.5vw, 4.5rem)',
          {
            lineHeight: 'clamp(3.6rem, 4vw, 4.5rem)',
            letterSpacing: '-0.12rem',
            fontWeight: '600'
          }
        ],

        'heading-h2': [
          'clamp(2.8rem, 4.1vw, 4rem)',
          {
            lineHeight: 'clamp(3.6rem, 4.5vw, 4.5rem)',
            letterSpacing: '-0.12rem',
            fontWeight: '600'
          }
        ],

        'heading-h3': [
          'clamp(2.6rem, 3.7vw, 3.7rem)',
          {
            lineHeight: 'clamp(3.8rem, 4.5vw, 4.5rem)',
            letterSpacing: '-0.1rem',
            fontWeight: '600'
          }
        ],

        'heading-h4': [
          'clamp(2.3rem, 3.2vw, 3.2rem)',
          {
            lineHeight: 'clamp(2.8rem, 3.5vw, 3.5rem)',
            letterSpacing: '-0.09rem',
            fontWeight: '600'
          }
        ],

        'heading-h5': [
          'clamp(2.1rem, 2.88vw, 2.88rem)',
          {
            lineHeight: 'clamp(2.6rem, 3.2vw, 3.2rem)',
            letterSpacing: '-0.08rem',
            fontWeight: '600'
          }
        ],

        'heading-h6': [
          'clamp(1.5rem, 2vw, 2rem)',
          {
            lineHeight: 'clamp(2rem, 2vw, 2rem)',
            letterSpacing: '-0.04em',
            fontWeight: '600'
          }
        ],

        'paragraph-section': [
          'clamp(1.15rem, 1.33vw, 1.33rem)',
          {
            lineHeight: 'clamp(1.9rem, 1.9vw, 1.9rem)',
            letterSpacing: '0rem',
            fontWeight: '500'
          }
        ],

        paragraph: [
          'clamp(1.1rem, 1vw, 1rem)',
          {
            lineHeight: 'clamp(1.7rem, 1.7vw, 1.7rem)',
            letterSpacing: '0rem',
            fontWeight: '500'
          }
        ]

      }
    },
  },
  plugins: [],
}