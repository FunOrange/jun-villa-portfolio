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
      imgSrc: '/aucto-table.jpg',
      content: (
        <>
          To create this component, I used{' '}
          <a href='https://ant.design/components/table/' target='_blank'>
            Ant Design's Table component
          </a>{' '}
          as a base, which I then styled over using{' '}
          <a href='https://styled-components.com/' target='_blank'>
            styled components
          </a>
          . The table is feature rich and supports filtering on multiple fields, sorting, and pagination.
        </>
      ),
    },
    {
      caption: 'A custom Sidebar component I worked on',
      imgSrc: '/aucto-sidebar.mp4',
      content: (
        <>
          Notice the smooth transitions when opening and closing the sidebar. I always try to make components polished
          and presentable to the best of my ability.
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
  )
}

const S = {
  Button: styled(Button)`
    &:hover {
      color: #fff;
    }
  `,
}
