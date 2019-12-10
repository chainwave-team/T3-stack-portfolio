/** @jsx jsx */
import { jsx, Box, SxProps } from 'theme-ui'

const Button = (props: Partial<SxProps>) => (
  <Box
    {...props}
    sx={{
      variant: 'buttons.primary',
      appearance: 'none',
      cursor: 'pointer',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      // as: 'button',
      fontSize: 'inherit',
      fontWeight: 'bold',
      m: 0,
      px: 3,
      py: 2,
      border: '2px solid',
      // variant: 'primary',
      // bg: `transparent`,
      borderRadius: 0
    }}
  />
)

export default Button
