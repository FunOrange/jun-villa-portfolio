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
    <Box
      width='100%'
      minHeight='calc(100vh - 2 * 24px)'
      display='flex'
      justifyContent='center'
      alignItems='center'
      bgcolor='#dbdbdb'
    >
      <S.Grid
        width={{ xs: '300px', sm: '560px', md: '800px', xl: '1200px' }}
        gridTemplateColumns={{
          xs: '1fr',
          md: '1fr 1fr',
          xl: '1fr 1fr 1fr',
        }}
      >
        <ProjectCard
          boxProps={{ gridColumn: upmd ? '1 / span 2' : '1' }}
          title='osu!Collector'
          subtitle='2021-2022 project'
          imageSrc=''
        >
          <Typography fontSize='16px' color='#444' mb='5px'>
            Website + desktop app for finding osu! songs.
          </Typography>
          <Box display='flex'>
            <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
              ・30,000 monthly visitors
            </Typography>
            <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
              ・$3000 monthly revenue
            </Typography>
          </Box>
        </ProjectCard>

        <ProjectCard title='osu! trainer' subtitle='2020 project' imageSrc=''>
          <Typography fontSize='16px' color='#444' mb='5px'>
            Windows app for changing the difficulty of osu! songs.
          </Typography>
          <Box display='flex'>
            <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
              ・280,000 total downloads
            </Typography>
          </Box>
        </ProjectCard>

        <ProjectCard title='YouTube channel' subtitle='2012-2022 project' imageSrc=''>
          <Typography fontSize='16px' color='#444' mb='5px'>
            Videos about the rhythm game osu!
          </Typography>
          <Box display='flex'>
            <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
              ・97k subscribers
            </Typography>
          </Box>
        </ProjectCard>

        <ProjectCard title='Aucto' subtitle='2022 work experience' imageSrc=''>
          <Typography fontSize='16px' color='#444' mb='5px'>
            Front-end web developer position
          </Typography>
          <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
            ・Next.js/React
          </Typography>
        </ProjectCard>

        <ProjectCard title='Aerlift' subtitle='2021 work experience' imageSrc=''>
          <Typography fontSize='16px' color='#444' mb='5px'>
            Communications engineer position
          </Typography>
          <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
            ・Full stack web development
          </Typography>
          <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
            ・Dev ops (Google cloud)
          </Typography>
          <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
            ・C++ embedded systems
          </Typography>
        </ProjectCard>

        <ProjectCard title='osu! keypads' subtitle='2019-2022 project' imageSrc=''>
          <Typography fontSize='16px' color='#444' mb='5px'></Typography>
          <Box display='flex'>
            <Typography fontSize='16px' color='#444' flexGrow='1'>
              Two button mechanical keyboards.
            </Typography>
          </Box>
        </ProjectCard>

        <ProjectCard title='Marvell' subtitle='2019-2020 work experience' imageSrc=''>
          <Typography fontSize='16px' color='#444' mb='5px'>
            Digital verification engineer position
          </Typography>
          <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
            ・Python + perl scripting
          </Typography>
          <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
            ・SystemVerilog
          </Typography>
        </ProjectCard>
      </S.Grid>
    </Box>
  )
}

export default Page

const S = {
  Grid: styled(Box)`
    display: grid;
    gap: 40px;
  `,
  Thumbnail: styled(Box)`
    background-color: #eee;
    width: 100%;
  `,
}
