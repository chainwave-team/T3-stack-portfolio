/** @jsx jsx */
import { jsx, Box, SxProps } from 'theme-ui'
import { Children } from '../../utils/types'

type Props = Partial<SxProps> & {
  children: Children
  section?: boolean
  id?: string
}

export default function Container({
  section = false,
  id = '',
  children,
  ...props
}: Props) {
  return (
    <Box
      {...props}
      id={id}
      as={section ? 'section' : 'div'}
      sx={{
        maxWidth: 'container',
        position: 'relative',
        width: '90%',
        mx: 'auto',
        py: section ? 6 : 0
      }}
    >
      {children}
    </Box>
  )
}
