import TransitionModal, { TransitionModalProps } from 'components/modals/TransitionModal'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import OpenInNew from '@mui/icons-material/OpenInNew'
import Code from '@mui/icons-material/Code'
import Carousel from 'react-material-ui-carousel'
import { styled } from '@mui/system'
import { Card, Fade } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import { useState } from 'react'

export interface OsuTrainerModalProps extends Omit<TransitionModalProps, 'children'> {}
export default function OsuTrainerModal({ ...transitionModalProps }: OsuTrainerModalProps) {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const carouselItems = [
    {
      caption: 'An app for making osu! songs harder',
      imgSrc: '/osu-trainer-large.jpg',
      content: (
        <>
          This Windows app allows you to generate sped up or slowed down versions of{' '}
          <a href='https://osu.ppy.sh' target='_blank'>
            osu!
          </a>{' '}
          songs, along with other difficulty modifying adjustments.
        </>
      ),
    },
    {
      caption: 'In-game song detection',
      imgSrc: '/osu-trainer-demo.mp4',
      content: (
        <>
          The app reads into game memory to determine the currently playing song, leading to a very seamless user
          experience
        </>
      ),
    },
  ]

  const imgScale = 0.65
  const imgWidth = 1280 * imgScale
  const imgHeight = 720 * imgScale

  return (
    <TransitionModal {...transitionModalProps}>
      <Box display='flex' justifyContent='space-between'>
        <Box display='flex' flexDirection='column' gap='14px' justifyContent='space-between' p={5}>
          <Box>
            <Typography component='h2' fontSize='26px' mb='-4px'>
              osu! trainer
            </Typography>
            <Typography fontSize='16px' color='#888'>
              2021-2022 project
            </Typography>
          </Box>
          <Box>
            <Box display='flex' alignItems='center' gap='4px' mb='2px'>
              <Button
                variant='contained'
                endIcon={<Code />}
                href='https://github.com/FunOrange/osu-trainer'
                target='_blank'
              >
                Code
              </Button>
            </Box>
          </Box>

          <Card sx={{ maxWidth: imgWidth }}>
            <Carousel
              autoPlay={false}
              navButtonsAlwaysVisible
              sx={{ width: imgWidth }}
              index={carouselIndex}
              onChange={(index: number | undefined, previous: number | undefined) => setCarouselIndex(index as number)}
            >
              {carouselItems.map(({ imgSrc }, i) =>
                imgSrc.endsWith('.mp4') ? (
                  <video autoPlay loop width={imgWidth} height={imgHeight}>
                    <source src={imgSrc} type='video/webm' />
                  </video>
                ) : (
                  <CardMedia
                    component='img'
                    width={imgWidth}
                    height={imgHeight}
                    sx={{ width: imgWidth, height: imgHeight }}
                    image={imgSrc}
                  />
                )
              )}
            </Carousel>
            <CardContent sx={{ minHeight: '100px', position: 'relative', paddingTop: 0 }}>
              {carouselItems.map(({ caption, content }, i) => (
                <Box
                  sx={{
                    opacity: carouselIndex === i ? 1 : 0,
                    transition: 'opacity 0.2s',
                    position: 'absolute',
                    paddingRight: '16px ',
                    pointerEvents: carouselIndex !== i ? 'none' : undefined,
                  }}
                >
                  <Typography component='h2' fontSize='20px'>
                    {caption}
                  </Typography>
                  <Typography variant='body2' color='text.secondary' fontSize='16px'>
                    {content}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Box>

        <Box bgcolor='#fff' p={4} boxShadow='-10px 0px 10px 1px #aaaaaa33'>
          <Typography component='h3' fontWeight='500' fontSize='24px' mt='4px' mb='12px' color='#aaa'>
            Built with
          </Typography>

          <Box display='flex' flexDirection='column' gap='24px' mr='14px'>
            <Box display='flex' flexDirection='column' alignItems='flex-start' gap='6px'>
              <Chip label='C#' />
              <Chip label='.NET' />
              <Chip label='WinForms' />
            </Box>
          </Box>
        </Box>
      </Box>
    </TransitionModal>
  )
}

const S = {
  Button: styled(Button)`
    &:hover {
      color: #fff;
    }
  `,
}
