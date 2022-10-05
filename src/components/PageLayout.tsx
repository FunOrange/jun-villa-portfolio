import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { Drawer } from '@mui/material'
import { ReactNode } from 'react'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function PageLayout({ children }: { children: ReactNode }) {
  const theme = useTheme()
  const uplg = useMediaQuery(theme.breakpoints.up('lg'))
  const drawerWidth = uplg ? 220 : 0
  const router = useRouter()
  const onPortfolioPage = router.pathname === '/'
  const onAboutMePage = router.pathname === '/about'
  const onResumePage = router.pathname === '/resume'
  const onContactPage = router.pathname === '/contact'
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
            boxShadow: 'rgb(149 157 165 / 70%) 0px 8px 24px',
          },
        }}
      >
        <Box height='100%' display='flex' justifyContent='center' flexDirection='column' pl='36px'>
          <Box mb='40px'>
            <Typography
              component='h1'
              fontFamily='"Dancing Script", cursive'
              fontSize='40px'
              fontWeight='700'
              mb='-8px'
            >
              Jun Villa
            </Typography>
            <Typography fontSize='17px' fontWeight='400' color='#999'>
              software engineer
            </Typography>
          </Box>
          <Box display='flex' flexDirection='column' gap='18px'>
            <Link href={onPortfolioPage ? '#' : '/'} passHref>
              <S.SidebarLink as='a' $active={onPortfolioPage}>
                portfolio
              </S.SidebarLink>
            </Link>
            <Link href={onAboutMePage ? '#' : '/about'} passHref>
              <S.SidebarLink as='a' $active={onAboutMePage}>
                about me
              </S.SidebarLink>
            </Link>
            <Link href={onResumePage ? '#' : '/resume'} passHref>
              <S.SidebarLink as='a' $active={onResumePage}>
                resume
              </S.SidebarLink>
            </Link>
            <Link href={onContactPage ? '#' : '/contact'} passHref>
              <S.SidebarLink as='a' $active={onContactPage}>
                contact
              </S.SidebarLink>
            </Link>
          </Box>
        </Box>
      </Drawer>
      <Main open={true} drawerWidth={drawerWidth} style={{ background: '#cbcbcb' }}>
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
  SidebarLink: styled(Typography)<{ $active?: boolean }>`
    font-size: 22px;
    font-weight: 500;
    text-decoration: none;

    transition: color 0.1s;
    transition: padding 0.2s;
    color: ${({ $active }) => ($active ? '#0056d8' : '#999')};
    &:hover {
      color: #0056d8;
      padding-left: 8px;
    }
  `,
}
