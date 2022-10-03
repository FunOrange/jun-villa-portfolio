import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { Drawer } from '@mui/material'
import { ReactNode } from 'react'

const drawerWidth = 260

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // marginLeft: 0,
  }),
}))

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Drawer
        variant='persistent'
        anchor='left'
        open={true}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: 'none',
            boxShadow: 'rgb(149 157 165 / 20%) 0px 8px 24px',
          },
        }}
      >
        <Box height='100%' display='flex' justifyContent='center' flexDirection='column' pl='16px'>
          <Typography fontSize='20px' fontWeight='500'>
            Jun Villa
          </Typography>
        </Box>
      </Drawer>
      <Main open={true}>{children}</Main>
    </>
  )
}
