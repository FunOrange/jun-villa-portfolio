import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '0',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: '26px',
        },
      },
    },
  },
  palette: {
    primary: { main: '#0056d8' },
    // secondary: { main: '#19857b' },
    error: { main: red.A400 },
    background: { default: '#cbcbcb' },
  },
  typography: {
    fontFamily: ['Inter Tight', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
})

export default theme
