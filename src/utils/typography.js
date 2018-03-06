import Typography from 'typography'
import OceanBeach from 'typography-theme-ocean-beach'

OceanBeach.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    backgroundImage: 'none'
  }
})

const typography = new Typography(OceanBeach)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
