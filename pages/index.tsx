import { useState } from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import ProjectCard from 'components/ProjectCard'
import { styled } from '@mui/system'
import { useTheme } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import OsuCollectorModal from 'components/modals/OsuCollectorModal'
import OsuTrainerModal from 'components/modals/OsuTrainerModal'
import AuctoModal from 'components/modals/AuctoModal'
import AerliftModal from 'components/modals/AerliftModal'
import OsuPrinterModal from 'components/modals/OsuPrinterModal'
import KeypadModal from 'components/modals/KeypadModal'

enum Work {
  OsuCollector,
  OsuTrainer,
  Aucto,
  Aerlift,
  OsuPrinter,
  OsuKeypads,
}

const Page: NextPage = () => {
  const theme = useTheme()
  const upmd = useMediaQuery(theme.breakpoints.up('md'))

  const [selectedWork, setSelectedWork] = useState<Work | undefined>(undefined)

  return (
    <>
      <Box width='100%' minHeight='calc(100vh - 2 * 24px)' display='flex' justifyContent='center' alignItems='center'>
        <S.Grid
          width={{ xs: '300px', sm: '560px', md: '800px', xl: '1200px' }}
          gridTemplateColumns={{
            xs: '1fr',
            md: '1fr 1fr',
            xl: '1fr 1fr 1fr',
          }}
        >
          <ProjectCard
            boxProps={{ gridColumn: upmd ? '1 / span 2' : '1', onClick: () => setSelectedWork(Work.OsuCollector) }}
            title='osu!Collector'
            subtitle='2021-2022 project'
            imageSrc='/osu-collector.jpg'
          >
            <Typography fontSize='16px' color='#444' mb='5px'>
              Website + desktop app for finding and downloading osu! songs. <br />
              Includes paid subscription business model.
            </Typography>
            <Box display='flex'>
              <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
                ・30,000 monthly visitors
              </Typography>
            </Box>
          </ProjectCard>
          <ProjectCard
            boxProps={{ onClick: () => setSelectedWork(Work.OsuTrainer) }}
            title='osu! trainer'
            subtitle='2020 project'
            imageSrc='/osu-trainer.jpg'
          >
            <Typography fontSize='16px' color='#444' mb='5px'>
              Windows app for changing the difficulty of osu! songs.
            </Typography>
            <Box display='flex'>
              <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
                ・280,000 total downloads
              </Typography>
            </Box>
          </ProjectCard>
          <ProjectCard
            boxProps={{ onClick: () => setSelectedWork(Work.Aucto) }}
            title='Aucto'
            subtitle='2022 work experience'
            imageSrc='/aucto.jpg'
          >
            <Typography fontSize='16px' color='#444' mb='5px'>
              Front-end web developer position
            </Typography>
            <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
              ・Next.js/React
            </Typography>
          </ProjectCard>
          <ProjectCard
            boxProps={{ onClick: () => setSelectedWork(Work.Aerlift) }}
            title='Aerlift'
            subtitle='2021 work experience'
            imageSrc='/aerlift.jpg'
          >
            <Typography fontSize='16px' color='#444' mb='5px'>
              Communications engineer position
            </Typography>
            <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
              ・Full stack web development <br />
              ・Dev ops (Google cloud) <br />
              ・C++ embedded systems
            </Typography>
          </ProjectCard>
          <ProjectCard
            boxProps={{ onClick: () => setSelectedWork(Work.OsuPrinter) }}
            title='3D printer plays osu!'
            subtitle='2021 project'
            imageSrc='/3d-printer.jpg'
          >
            <Typography fontSize='16px' color='#444' mb='5px'>
              YouTube video sponsored by Gaomon
            </Typography>
            <Box display='flex'>
              <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
                ・530k views
              </Typography>
            </Box>
          </ProjectCard>
          <ProjectCard
            boxProps={{ onClick: () => setSelectedWork(Work.OsuKeypads) }}
            title='Two Button Keypads'
            subtitle='2019-2022 project'
            imageSrc='/keypads.jpg'
          >
            <Typography fontSize='16px' color='#444' mb='5px'>
              Two button mechanical keyboards. <br />
              Windows app configures settings.
            </Typography>
            <Typography fontSize='16px' color='#5383ca' flexGrow='1'>
              ・40 units sold
            </Typography>
          </ProjectCard>
        </S.Grid>
      </Box>

      <OsuCollectorModal open={selectedWork === Work.OsuCollector} handleClose={() => setSelectedWork(undefined)} />
      <OsuTrainerModal open={selectedWork === Work.OsuTrainer} handleClose={() => setSelectedWork(undefined)} />
      <AuctoModal open={selectedWork === Work.Aucto} handleClose={() => setSelectedWork(undefined)} />
      <AerliftModal open={selectedWork === Work.Aerlift} handleClose={() => setSelectedWork(undefined)} />
      <OsuPrinterModal open={selectedWork === Work.OsuPrinter} handleClose={() => setSelectedWork(undefined)} />
      <KeypadModal open={selectedWork === Work.OsuKeypads} handleClose={() => setSelectedWork(undefined)} />
    </>
  )
}

export default Page

const S = {
  Grid: styled(Box)`
    display: grid;
    gap: 40px;
  `,
}
