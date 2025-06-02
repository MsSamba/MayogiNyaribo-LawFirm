// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transformOrigin: {
        'center': 'center',
      },
    },
  },
  plugins: [],
  safelist: [
    'backface-hidden',
    'transform-style-preserve-3d',
    'rotate-y-180',
  ],
}
