import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import ProjectCard from 'components/ProjectCard'
import { styled } from '@mui/system'
import { useTheme } from '@mui/material'
import { useMediaQuery } from '@mui/material'

const Page: NextPage = () => {
  const theme = useTheme()
  const upmd = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Box width='100%' minHeight='calc(100vh - 2 * 24px)' display='flex' justifyContent='center' alignItems='center'>
      <Typography component='h2' fontSize='26px'>
        about me
      </Typography>
    </Box>
  )
}

export default Page

const S = {}
