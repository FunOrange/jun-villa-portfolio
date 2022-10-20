import TransitionModal, { TransitionModalProps } from 'components/modals/TransitionModal'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import OpenInNew from '@mui/icons-material/OpenInNew'
import Code from '@mui/icons-material/Code'
import Carousel from 'react-material-ui-carousel'
import { Card, Fade } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import { useState } from 'react'

export interface OsuPrinterModalProps extends Omit<TransitionModalProps, 'children'> {}
export default function OsuPrinterModal({ ...transitionModalProps }: OsuPrinterModalProps) {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const carouselItems = [
    {
      caption: 'Programming my 3D printer to play a video game',
      imgSrc: '/fool-moon-night.mp4',
      content: (
        <>
          In this YouTube video I wrote a Python script to generate instructions that would make my 3D printer play the
          rhythm game{' '}
          <a href='https://osu.ppy.sh/home' target='_blank'>
            osu!
          </a>
          . The video was pretty successful and has around 500k views at the time of writing this.
        </>
      ),
    },
    {
      caption: 'Written basically from scratch, no tutorials or guides',
      imgSrc: '/3d-printer-code.jpg',
      content: (
        <>
          Since to my knowledge no one had done this before, I figured it out myself. I learned how g-code (3D printer
          code) works, and I had to troubleshoot many things along the way to get it to a (somewhat) working state.
        </>
      ),
    },
    {
      caption: 'Gaomon sponsorship',
      imgSrc: '/gaomon.jpg',
      content: (
        <>
          The video was made with cooperation with the drawing tablet company Gaomon. They sent me the tablet for
          review, which is the one you see in the video.
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
              "I got my 3D printer to play osu! (w/ Gaomon S620 Review)"
            </Typography>
            <Typography fontSize='16px' color='#888'>
              2021 project
            </Typography>
          </Box>
          <Box display='flex' alignItems='center' gap='4px' mb='2px'>
            {
              // @ts-ignore:next-line
              <Button
                variant='contained'
                endIcon={<OpenInNew />}
                href='https://www.youtube.com/watch?v=o1i6BlTVaS8'
                target='_blank'
              >
                YouTube Video
              </Button>
            }
            <Button
              variant='contained'
              endIcon={<Code />}
              href='https://github.com/FunOrange/osr-to-gcode/blob/main/osr2gcode.py'
              target='_blank'
            >
              Code
            </Button>
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
            <CardContent sx={{ minHeight: '120px', position: 'relative', paddingTop: 0 }}>
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
          <Typography component='h3' fontWeight='500' fontSize='24px' mt='4px' mb='6px' color='#aaa'>
            Built with
          </Typography>

          <Box display='flex' flexDirection='column' gap='24px' mr='14px'>
            <Chip label='Python' />
          </Box>
        </Box>
      </Box>
    </TransitionModal>
  )
}
