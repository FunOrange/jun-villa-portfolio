import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'

const Page: NextPage = () => {
  return (
    <div>
      <Typography variant='h4' component='h1' gutterBottom>
        page content
      </Typography>
      {/* <Container maxWidth='lg'>
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' component='h1' gutterBottom>
            page content
          </Typography>
          <Button variant='contained'>click me</Button>
        </Box>
      </Container> */}
    </div>
  )
}

export default Page
