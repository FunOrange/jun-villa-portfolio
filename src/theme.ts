import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: { main: '#556cd6' },
    secondary: { main: '#19857b' },
    error: { main: red.A400 },
    background: { default: '#dbdbdb' },
  },
  typography: {
    fontFamily: ['Inter Tight', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
})

export default theme
