import TransitionModal, { TransitionModalProps } from 'components/modals/TransitionModal'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import OpenInNew from '@mui/icons-material/OpenInNew'
import Code from '@mui/icons-material/Code'
import Carousel from 'react-bootstrap/Carousel'
import { styled } from '@mui/system'

export interface OsuTrainerModalProps extends Omit<TransitionModalProps, 'children'> {}
export default function OsuTrainerModal({ ...transitionModalProps }: OsuTrainerModalProps) {
  const imgScale = 0.85
  const imgWidth = 1280 * imgScale
  const imgHeight = 720 * imgScale
  return (
    <TransitionModal {...transitionModalProps}>
      <Box display='flex' gap='120px' mb='14px'>
        <Box display='flex' flexDirection='column' gap='14px' justifyContent='space-between'>
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
        </Box>
        <Box>
          <Typography component='h3' fontWeight='500' fontSize='24px' mt='4px' mb='6px' color='#aaa'>
            Built with
          </Typography>

          <Box display='flex' alignItems='center' gap='20px'>
            <Box display='flex' alignItems='center' gap='6px'>
              <Chip icon={<Code />} label='C#' />
              <Chip icon={<Code />} label='.NET' />
              <Chip icon={<Code />} label='WinForms' />
            </Box>
          </Box>
        </Box>
      </Box>

      <Carousel interval={null} wrap={false}>
        <Carousel.Item>
          <Box width={`${imgWidth}px`} height={`${imgHeight}px`} bgcolor='#333'></Box>
          <Carousel.Caption>
            <h3>Modify song difficulty</h3>
            <p>
              This Windows app allows you to speed up or slow down{' '}
              <a href='https://osu.ppy.sh' target='_blank'>
                osu!
              </a>{' '}
              songs, along with other difficulty modifying adjustments.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Box width={`${imgWidth}px`} height={`${imgHeight}px`} bgcolor='#333'></Box>

          <Carousel.Caption>
            <h3>Currently playing song detection</h3>
            <p>
              The app reads into game memory to determine the currently playing song, leading to a very seamless user
              experience
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
