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

export interface KeypadModalProps extends Omit<TransitionModalProps, 'children'> {}
export default function KeypadModal({ ...transitionModalProps }: KeypadModalProps) {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const carouselItems = [
    {
      caption: 'Keypads used to play osu!',
      imgSrc: '/keypads.png',
      content: (
        <>
          This has been a very long running project for me, and has seen many iterations over the years. Everything is
          made from scratch: the printed circuit board is designed by me, the firmware running on the microcontroller is
          written by me, and the case was 3D modelled and 3D printed by me.
        </>
      ),
    },
    {
      caption: 'Windows app to configure keypad',
      imgSrc: '/keypad-software.jpg',
      content: (
        <>
          I even wrote an accompanying Windows app for users to configure their keypad. The PC communicates to the
          keypad via a serial connection, and on top of that I invented my own serial communication protocol so that the
          PC and keypad can communicate with each other in a structured way.
        </>
      ),
    },
    {
      caption: '2019: For sale on Etsy',
      imgSrc: '/sales.jpg',
      content: (
        <>
          In 2019 I listed one of the early iterations for sale on Etsy. I went to sleep, woke up, and found that all 40
          units had immediately sold out. I plan to sell my keypads once again in the future.
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
              Two Button Keypad
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
                href='https://www.etsy.com/ca/listing/670181338/osu-keypad?show_sold_out_detail=1&ref=nla_listing_details'
                target='_blank'
              >
                Store Page
              </Button>
            }
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
          <Typography
            component='h3'
            fontWeight='500'
            fontSize='24px'
            mt='4px'
            mb='6px'
            color='#aaa'
            style={{ whiteSpace: 'nowrap' }}
          >
            Built with
          </Typography>

          <Box display='flex' flexDirection='column' gap='24px' mr='14px'>
            <div>
              <Typography justifySelf='center' fontSize='18px' mb='4px'>
                Firmware
              </Typography>
              <Box display='flex' flexDirection='column' alignItems='flex-start' gap='6px'>
                <Chip label='C' />
              </Box>
            </div>
            <div>
              <Typography justifySelf='center' fontSize='18px' mb='4px'>
                Windows GUI
              </Typography>
              <Box display='flex' flexDirection='column' alignItems='flex-start' gap='6px'>
                <Chip label='C#' />
                <Chip label='.NET' />
                <Chip label='WPF' />
              </Box>
            </div>
            <div>
              <Typography justifySelf='center' fontSize='18px' mb='4px' style={{ whiteSpace: 'nowrap' }}>
                Engineering Software
              </Typography>
              <Box display='flex' flexDirection='column' alignItems='flex-start' gap='6px'>
                <Chip label='KiCad' />
                <Chip label='Fusion 360' />
              </Box>
            </div>
          </Box>
        </Box>
      </Box>
    </TransitionModal>
  )
}
