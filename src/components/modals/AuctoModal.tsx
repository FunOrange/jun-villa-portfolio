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

export interface AuctoModalProps extends Omit<TransitionModalProps, 'children'> {}
export default function AuctoModal({ ...transitionModalProps }: AuctoModalProps) {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const carouselItems = [
    {
      caption: 'Asset management dashboard',
      imgSrc: '/aucto-redeploy.jpg',
      content: (
        <>
          Here, companies can manage inventory of industrial assets. Managers can then funnel out unused assets into one
          of several supported disposal methods: sell on marketplace, donate, etc.
        </>
      ),
    },
    {
      caption: 'A custom Table component I worked on',
      imgSrc: '/osu-collector-desktop.mp4',
      content: <>description</>,
    },
    {
      caption: 'A custom Sidebar component I worked on',
      imgSrc: '/osu-collector-payment.jpg',
      content: <>description</>,
    },
  ]
  const imgScale = 0.85
  const imgWidth = 1280 * imgScale
  const imgHeight = 720 * imgScale
  return (
    <TransitionModal {...transitionModalProps}>
      <Box display='flex' justifyContent='space-between'>
        <Box display='flex' flexDirection='column' gap='14px' justifyContent='space-between' p={5}>
          <Box>
            <Typography component='h2' fontSize='26px' mb='-4px'>
              Aucto
            </Typography>
            <Typography fontSize='16px' color='#888'>
              2022 work experience
            </Typography>
          </Box>
          <Box>
            <Box display='flex' alignItems='center' gap='4px' mb='2px'>
              <Button variant='contained' endIcon={<OpenInNew />} href='https://aucto.com' target='_blank'>
                Website*
              </Button>
            </Box>
            <Typography fontSize='14px' color='#888'>
              *Website link leads to company landing page, however the part of the website I worked on was an{' '}
              <b>internal dashboard</b> used by businesses registered with Aucto.
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
            <Box>
              <Typography justifySelf='center' fontSize='18px' mb='8px'>
                Frontend
              </Typography>
              <Chip label='Next.js' />
            </Box>
          </Box>
        </Box>
      </Box>
    </TransitionModal>
    // <TransitionModal {...transitionModalProps}>
    //   <Box display='flex' gap='120px' mb='14px'>
    //     <Box display='flex' flexDirection='column' gap='14px' justifyContent='space-between'>
    //       <Box>
    //         <Typography component='h2' fontSize='26px' mb='-4px'>
    //           Aucto
    //         </Typography>
    //         <Typography fontSize='16px' color='#888'>
    //           2022 work experience
    //         </Typography>
    //       </Box>
    //       <Box>
    //         <Box display='flex' alignItems='center' gap='4px' mb='2px'>
    //           <Button variant='contained' endIcon={<OpenInNew />} href='https://aucto.com' target='_blank'>
    //             Website*
    //           </Button>
    //         </Box>
    //       </Box>
    //     </Box>
    //     <Box>
    //       <Typography component='h3' fontWeight='500' fontSize='24px' mt='4px' mb='6px' color='#aaa'>
    //         Built with
    //       </Typography>

    //       <Box display='flex' alignItems='center' gap='20px'>
    //         <Box display='flex' alignItems='center' gap='6px'>
    //           <Chip label='Next.js' />
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Box>

    //   <Typography>
    //     <p>
    //       *Link leads to company landing page, however the part of the website I worked on was an{' '}
    //       <b>internal dashboard</b> used by businesses registered with Aucto.
    //     </p>
    //   </Typography>
    // </TransitionModal>
  )
}

const S = {
  Button: styled(Button)`
    &:hover {
      color: #fff;
    }
  `,
}
