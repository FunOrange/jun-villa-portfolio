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

export interface OsuCollectorModalProps extends Omit<TransitionModalProps, 'children'> {}
export default function OsuCollectorModal({ ...transitionModalProps }: OsuCollectorModalProps) {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const carouselItems = [
    {
      caption: 'A website to share song playlists',
      imgSrc: '/osu-collector-website.jpg',
      content: (
        <>
          This website is for the rhythm game{' '}
          <a href='https://osu.ppy.sh' target='_blank'>
            osu!
          </a>
          . Users can log into the site using their existing osu! account (OAuth2), and upload song playlists (called
          collections) for others to view and download. Users can also like and comment on collections.
        </>
      ),
    },
    {
      caption: 'Desktop app subscription',
      imgSrc: '/osu-collector-desktop.mp4',
      content: (
        <>
          Although the website is free to use, users can purchase a monthly subscription and gain access to a desktop
          client with extra features, including better in-game integration and batch downloading songs.
        </>
      ),
    },
    {
      caption: 'Three supported payment methods',
      imgSrc: '/osu-collector-payment.jpg',
      content: (
        <>
          osu!Collector supports Twitch subscription, credit card (Stripe), and PayPal as methods of payment.
          <br />
          Users with an Amazon Prime subscription are entitled to a{' '}
          <a href='https://help.twitch.tv/s/article/how-to-subscribe?language=en_US#Prime' target='_blank'>
            free Twitch subscription every month
          </a>
          , allowing users to gain a paid subscription at no additional cost.
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
              osu!Collector
            </Typography>
            <Typography fontSize='16px' color='#888'>
              2021-2022 project
            </Typography>
          </Box>
          <Box>
            <Box display='flex' alignItems='center' gap='4px' mb='2px'>
              {
                // @ts-ignore:next-line
                <Button variant='contained' endIcon={<OpenInNew />} href='https://osucollector.com' target='_blank'>
                  Website
                </Button>
              }
              <Button variant='contained' endIcon={<Code />} disabled>
                Code*
              </Button>
            </Box>
            <Typography fontSize='14px' color='#888'>
              *Commercial product; not open source.
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
            <div>
              <Typography justifySelf='center' fontSize='18px' mb='4px'>
                Frontend
              </Typography>
              <Box display='flex' flexDirection='column' alignItems='flex-start' gap='6px'>
                <Chip label='React' />
                <Chip label='Electron' />
              </Box>
            </div>
            <div>
              <Typography justifySelf='center' fontSize='18px' mb='4px'>
                Backend
              </Typography>
              <Box display='flex' flexDirection='column' alignItems='flex-start' gap='6px'>
                <Chip label='Node.js' />
                <Chip label='Firestore' />
              </Box>
            </div>
            <div>
              <Typography justifySelf='center' fontSize='18px' mb='4px'>
                Hosting
              </Typography>
              <Box display='flex' flexDirection='column' alignItems='flex-start' gap='6px'>
                <Chip label='App Engine' />
                <Chip label='DigitalOcean Spaces' />
              </Box>
            </div>
          </Box>
        </Box>
      </Box>
    </TransitionModal>
  )
}
