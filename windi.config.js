import color from 'windicss/colors'

const primary = color.rose

const base = {
  preflight: { enableAll: true },

  plugins: [require('windicss/plugin/typography')]
}

const theme = {
  screens: { sm: '640px' },
  container: { center: true, padding: '1rem' },

  colors: { transparent: 'transparent', current: 'currentcolor', primary },

  fontFamily: { sans: ['kodchasan', 'sans-serif'] },
  fontWeight: { light: 200, normal: 400, bold: 600 },
  fontSize: { xs: '.75rem', sm: '.875rem', md: '1rem', lg: '1.125rem', xl: '1.5rem' }
}

const typography = {
  'max-width': '100%',
  'color': primary[800],

  'h2': { 'color': primary[800] },
  'h3': { 'color': primary[800] },

  'pre': { 'color': primary[800], 'background-color': primary[300] },
  'blockquote': { 'color': primary[800], 'border-radius': '4px', 'border-color': primary[300] },

  'ol > li::before': { 'color': primary[400] },
  'ul > li::before': { 'background-color': primary[300] },

  'tbody tr': { 'border-bottom-color': primary[300] },
  'thead': { 'color': primary[800], 'border-bottom-color': primary[300] }
}

export default {
  ...base,

  theme: {
    ...theme,

    extend: {
      typography: { sm: { css: typography } }
    }
  }
}
