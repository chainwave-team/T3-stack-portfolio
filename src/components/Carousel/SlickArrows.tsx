/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import Next from '../../assets/svg/next.svg'
import Back from '../../assets/svg/back.svg'

const style = {
  width: '32px',
  height: '32px',
  display: 'block',
  my: 0,
  mx: -4,
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
      fill: 'pink'
    }
  }
}

type Props = {
  onClick?: () => void
}

// eslint-disable-next-line
export const NextArrow = ({ onClick, ...props }: Props) => (
  <Box {...props} sx={{ ...style, right: 0 }} onClick={onClick}>
    <Next />
  </Box>
)

// eslint-disable-next-line
export const BackArrow = ({ onClick, ...props }: Props) => (
  <Box {...props} sx={{ ...style, left: 0 }} onClick={onClick}>
    <Back />
  </Box>
)
