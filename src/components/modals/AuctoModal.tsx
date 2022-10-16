import TransitionModal, { TransitionModalProps } from 'components/modals/TransitionModal'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import OpenInNew from '@mui/icons-material/OpenInNew'
import Code from '@mui/icons-material/Code'
// import Carousel from 'react-bootstrap/Carousel'
import { styled } from '@mui/system'

export interface AuctoModalProps extends Omit<TransitionModalProps, 'children'> {}
export default function AuctoModal({ ...transitionModalProps }: AuctoModalProps) {
  const imgScale = 0.85
  const imgWidth = 1280 * imgScale
  const imgHeight = 720 * imgScale
  return (
    <TransitionModal {...transitionModalProps}>
      <Box display='flex' gap='120px' mb='14px'>
        <Box display='flex' flexDirection='column' gap='14px' justifyContent='space-between'>
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
          </Box>
        </Box>
        <Box>
          <Typography component='h3' fontWeight='500' fontSize='24px' mt='4px' mb='6px' color='#aaa'>
            Built with
          </Typography>

          <Box display='flex' alignItems='center' gap='20px'>
            <Box display='flex' alignItems='center' gap='6px'>
              <Chip label='Next.js' />
            </Box>
          </Box>
        </Box>
      </Box>

      <Typography>
        <p>
          *Link leads to company landing page, however the part of the website I worked on was an{' '}
          <b>internal dashboard</b> used by businesses registered with Aucto.
        </p>
      </Typography>

      {/* <Carousel interval={null} wrap={false}>
        <Carousel.Item>
          <Box width={`${imgWidth}px`} height={`${imgHeight}px`} bgcolor='#333'></Box>
          <Carousel.Caption>
            <h3>Asset management dashboard</h3>
            <p>
              Here, companies can manage inventory of industrial assets. Managers can then funnel out unused assets into
              one of several supported disposal methods: sell on marketplace, donate, etc.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Box width={`${imgWidth}px`} height={`${imgHeight}px`} bgcolor='#333'></Box>
          <Carousel.Caption>
            <h3>Custom front-end components</h3>
            <p>
              My approach was often either to style over existing{' '}
              <a href='https://mui.com/' target='_blank'>
                MUI components
              </a>
              , or build entirely custom components from scratch. I also collaborated with backend developers to connect
              these components to data in the backend.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
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
