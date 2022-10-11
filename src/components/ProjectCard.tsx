import { Typography } from '@mui/material'
import { BoxProps } from '@mui/system'
import { styled } from '@mui/system'
import { Box } from '@mui/system'
import { ReactNode } from 'react'
import Image from 'next/image'

export interface ProjectCardProps {
  title: string
  subtitle: string
  imageSrc: string
  children?: ReactNode
  boxProps?: BoxProps
}
export default function ProjectCard({ title, subtitle, imageSrc, boxProps = {}, children }: ProjectCardProps) {
  // TODO: fade in (and maybe slide in) animation
  return (
    <S.Card {...boxProps}>
      <Typography component='h2' fontSize='26px'>
        {title}
      </Typography>
      <Typography fontSize='16px' color='#888'>
        {subtitle}
      </Typography>
      <Box mt='10px' mb='20px'>
        <S.Thumbnail>
          <Image src={imageSrc} layout='fill' />
        </S.Thumbnail>
      </Box>
      {children}
    </S.Card>
  )
}

const S = {
  Card: styled(Box)`
    cursor: pointer;
    padding: 16px 32px 32px 32px;

    transition: all 0.2s;
    background-color: #fff;
    box-shadow: rgb(149 157 165 / 17%) 0px 8px 24px;
    filter: brightness(0.95) grayscale(50%);
    &:hover {
      box-shadow: rgb(149 157 165 / 70%) 0px 8px 24px;
      filter: none;
    }
  `,
  Thumbnail: styled(Box)`
    position: relative;
    background-color: #eee;
    width: 100%;
    height: 260px;
  `,
}
