/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { FC } from 'react'

import Next from '../../assets/svg/next.svg'
import Back from '../../assets/svg/back.svg'

const style = {
  width: '32px',
  height: '32px',
  display: 'block',
  my: 0,
  mx: [0, 0, '-32px', '-42px'],
  fill: 'primary',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  svg: {
    display: ['none', 'none', 'block'],
    fill: 'primary',
    transition: 'fill 200ms ease',
    '&:hover': {
      fill: 'secondary'
    }
  }
}

interface ArrowProps {
  onClick?: () => void
}

export const NextArrow: FC<ArrowProps> = ({ onClick, ...props }) => (
  <Box {...props} sx={{ ...style, right: 0 }} onClick={onClick}>
    <Next />
  </Box>
)

export const BackArrow: FC<ArrowProps> = ({ onClick, ...props }) => (
  <Box {...props} sx={{ ...style, left: 0 }} onClick={onClick}>
    <Back />
  </Box>
)
