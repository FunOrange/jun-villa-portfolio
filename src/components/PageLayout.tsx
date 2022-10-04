import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { Drawer } from '@mui/material'
import { ReactNode } from 'react'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material'

export default function PageLayout({ children }: { children: ReactNode }) {
  const theme = useTheme()
  const uplg = useMediaQuery(theme.breakpoints.up('lg'))
  const drawerWidth = uplg ? 240 : 0
  // TODO: add navbar on viewport sizes: xs, sm, md
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
        <Box height='100%' display='flex' justifyContent='center' flexDirection='column' pl='36px'>
          <Typography component='h1' fontSize='32px' fontWeight='500' mb='40px'>
            {/* TODO: replace with signature */}
            Jun Villa
          </Typography>
          <Box display='flex' flexDirection='column' gap='18px'>
            <S.SidebarLink component='a' href='#'>
              portfolio
            </S.SidebarLink>
            <S.SidebarLink component='a' href='#'>
              about me
            </S.SidebarLink>
            <S.SidebarLink component='a' href='#'>
              contact
            </S.SidebarLink>
          </Box>
        </Box>
      </Drawer>
      <Main open={true} drawerWidth={drawerWidth}>
        {children}
      </Main>
    </>
  )
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
  drawerWidth?: number
}>(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  padding: theme.spacing(6),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `${drawerWidth}px`,
  minHeight: '100vh',
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const S = {
  SidebarLink: styled(Typography)`
    font-size: 22px;
    font-weight: 500;
    text-decoration: none;

    transition: color 0.1s;
    color: #999;
    &:hover {
      color: #000;
    }
  `,
}
