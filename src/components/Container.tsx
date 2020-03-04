/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'

export interface ContainerProps {
  id?: string
  section?: boolean
  size?: 'blog' | 'container' | 'full'
}

const Container: FC<ContainerProps> = ({ id, section, size, ...props }) => (
  <div
    id={id || ''}
    {...props}
    sx={{
      maxWidth: size || 'container',
      position: 'relative',
      width: size === 'full' ? '100%' : '90%',
      mx: 'auto',
      py: section ? 6 : 0
    }}
  />
)

export default Container
