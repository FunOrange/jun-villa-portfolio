import TransitionModal, { TransitionModalProps } from 'components/modals/TransitionModal'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import OpenInNew from '@mui/icons-material/OpenInNew'
import Carousel from 'react-material-ui-carousel'
import { Card, Fade } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import { useState } from 'react'
import { styled } from '@mui/system'

export interface AerliftModalProps extends Omit<TransitionModalProps, 'children'> {}
export default function AerliftModal({ ...transitionModalProps }: AerliftModalProps) {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const carouselItems = [
    {
      caption: 'What is Aerlift?',
      imgSrc: '/aerlift-video.mp4',
      content: (
        <>
          Aerlift is a startup whose goal is to have autonomous drones deliver medicine in developing countries like
          Ghana. My capstone project at the University of Toronto was with Aerlift, and after I graduated from Computer
          Engineering they took me in as a part-time employee.
        </>
      ),
    },
    {
      caption: 'Many responsibilities',
      imgSrc: '/aerlift-video.mp4',
      content: (
        <>
          At the company I was essentially the only one working on all the software projects; others were involved in
          aerospace design, finances, etc. The following are a list of things they asked me to build (see next slide)
        </>
      ),
    },
    {
      caption: 'SMS chatbot',
      imgSrc: '/aerlift-sms.jpg',
      content: (
        <>
          This SMS chatbot could take medical delivery requests from users. It was built with{' '}
          <a href='https://www.twilio.com/' target='_blank'>
            Twilio
          </a>{' '}
          and Node.js.
        </>
      ),
    },
    {
      caption: 'Drone telemetry infrastructure',
      imgSrc: '/aerlift-hardware.png',
      content: (
        <>
          A combination of cloud software and drone hardware/firmware that could facilitate autonomous, remote operation
          of a fleet of drones connected via 3G using a{' '}
          <a href='https://docs.particle.io/boron/' target='_blank'>
            Particle Boron
          </a>
          .
        </>
      ),
    },
    {
      caption: 'Dashboard website',
      imgSrc: '/aerlift-dashboard.png',
      content: (
        <>
          A dashboard website to control and oversee operations. Admins can view logs, see the statuses of all drones,
          and override manual control of drones mid-flight by remoting into a Windows machine running Mission Planner
          software, all while remaining in the browser (yes, I actually got this working).
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
              Aerlift
            </Typography>
            <Typography fontSize='16px' color='#888'>
              2021 work experience
            </Typography>
          </Box>
          <Box>
            <Box display='flex' alignItems='center' gap='4px' mb='2px'>
              <Button variant='contained' endIcon={<OpenInNew />} href='https://aerlift.com' target='_blank'>
                Website*
              </Button>
            </Box>
            <Typography fontSize='14px' color='#888'>
              *Website link leads to company landing page, however the dashboard I worked on is not publically
              accessible.
            </Typography>
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
                  <video autoPlay loop muted width={imgWidth} height={imgHeight}>
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
            whiteSpace='nowrap'
          >
            Built with
          </Typography>

          <Box display='flex' flexDirection='column' gap='24px' mr='14px'>
            <Box display='flex' flexDirection='column' alignItems='flex-start' gap='6px'>
              <Chip label='Python (Flask)' />
              <Chip label='Bootstrap' />
              <Chip label='C++' />
              <Chip label='Twilio' />
              <Chip label='Node.js (App Engine)' />
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
