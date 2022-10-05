import TransitionModal, { TransitionModalProps } from 'components/modals/TransitionModal'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import OpenInNew from '@mui/icons-material/OpenInNew'
import Code from '@mui/icons-material/Code'
import Carousel from 'react-bootstrap/Carousel'
import { styled } from '@mui/system'

export interface OsuCollectorModalProps extends Omit<TransitionModalProps, 'children'> {}
export default function OsuCollectorModal({ ...transitionModalProps }: OsuCollectorModalProps) {
  const imgScale = 0.85
  const imgWidth = 1280 * imgScale
  const imgHeight = 720 * imgScale

  return (
    <TransitionModal {...transitionModalProps}>
      <Box display='flex' justifyContent='space-between' mb='14px'>
        <Box display='flex' flexDirection='column' gap='14px' justifyContent='space-between'>
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
        </Box>
        <Box>
          <Typography component='h3' fontWeight='500' fontSize='24px' mt='4px' mb='6px' color='#aaa'>
            Built with
          </Typography>

          <Box display='flex' gap='24px' mr='14px'>
            <div>
              <Typography justifySelf='center' fontSize='18px' mb='4px'>
                Frontend
              </Typography>
              <Box display='flex' alignItems='center' gap='20px'>
                <Box display='flex' alignItems='center' gap='6px'>
                  <Chip icon={<Code />} label='React' />
                  <Chip icon={<Code />} label='Electron' />
                </Box>
              </Box>
            </div>
            <div>
              <Typography justifySelf='center' fontSize='18px' mb='4px'>
                Backend
              </Typography>
              <Box display='flex' alignItems='center' gap='20px'>
                <Box display='flex' alignItems='center' gap='6px'>
                  <Chip icon={<Code />} label='Node.js' />
                  <Chip icon={<Code />} label='Firestore' />
                </Box>
              </Box>
            </div>
            <div>
              <Typography justifySelf='center' fontSize='18px' mb='4px'>
                Hosting
              </Typography>
              <Box display='flex' alignItems='center' gap='20px'>
                <Box display='flex' alignItems='center' gap='6px'>
                  <Chip icon={<Code />} label='App Engine' />
                  <Chip icon={<Code />} label='DigitalOcean Spaces' />
                </Box>
              </Box>
            </div>
          </Box>
        </Box>
      </Box>

      <Carousel interval={null} wrap={false}>
        <Carousel.Item>
          <Box width={`${imgWidth}px`} height={`${imgHeight}px`} bgcolor='#333'></Box>
          <Carousel.Caption>
            <h3>Share song playlists</h3>
            <p>
              This website is for the rhythm game{' '}
              <a href='https://osu.ppy.sh' target='_blank'>
                osu!
              </a>
              . Users can log into the site using their existing osu! account (OAuth2), and upload song playlists
              (called collections) for others to view and download. Users can also like and comment on collections.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Box width={`${imgWidth}px`} height={`${imgHeight}px`} bgcolor='#333'></Box>

          <Carousel.Caption>
            <h3>Desktop app subscription</h3>
            <p>
              Although the website is free to use, users can purchase a monthly subscription and gain access to a
              desktop client with extra features, including better in-game integration and batch downloading songs.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Box width={`${imgWidth}px`} height={`${imgHeight}px`} bgcolor='#333'></Box>

          <Carousel.Caption>
            <h3>Three supported payment methods</h3>
            <p>
              osu!Collector supports Twitch subscription, credit card (Stripe), and PayPal as methods of payment.
              <br />
              Users with an Amazon Prime subscription are entitled to a{' '}
              <a href='https://help.twitch.tv/s/article/how-to-subscribe?language=en_US#Prime' target='_blank'>
                free Twitch subscription every month
              </a>
              , allowing users to gain a paid subscription at no additional cost.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </TransitionModal>
  )
}
