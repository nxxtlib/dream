import color from 'windicss/colors'

export default {
  preflight: { enableAll: true },

  plugins: [require('windicss/plugin/typography')],

  theme: {
    colors: { transparent: 'transparent', current: 'currentcolor', pink: color.pink },

    screens: { 'sm': '720px' },

    container: { center: true, padding: '1rem' },

    fontFamily: { sans: ['kodchasan', 'sans-serif'] },

    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'md': '1rem',
      'lg': '1.125rem',
      'xl': '1.5rem'
    },

    fontWeight: { 'light': 200, 'normal': 400, 'bold': 600 },

    extend: {
      typography: {
        DEFAULT: {
          css: {
            'max-width': '100%',

            'color': color.pink[800],

            '[class~="lead"]': { 'color': color.pink[600] },

            'a': { 'color': color.pink[800] },

            'strong': { 'color': color.pink[800] },

            'ol > li::before': { 'color': color.pink[600] },

            'ul > li::before': { 'background-color': color.pink[400] },

            'hr': {
              'border-radius': '8px',
              'border-top-width': '2px',
              'border-color': color.pink[400],
              'opacity': '0.4'
            },

            'blockquote': {
              'border-radius': '4px',
              'color': color.pink[800],
              'border-color': color.pink[400]
            },

            'h1': { 'color': color.pink[800] },
            'h2': { 'color': color.pink[800] },
            'h3': { 'color': color.pink[800] },
            'h4': { 'color': color.pink[800] },

            'figure figcaption': { 'color': color.pink[400] },

            'code': { 'color': color.pink[800] },

            'a code': { 'color': color.pink[800] },

            'pre': { 'color': color.pink[200], 'background-color': color.pink[800] },

            'thead': { 'color': color.pink[800], 'border-bottom-color': color.pink[300] },

            'tbody tr': { 'border-bottom-color': color.pink[300] }
          }
        }
      }
    }
  }
}
