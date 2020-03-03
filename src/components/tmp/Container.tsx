/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Children } from '../../utils/types'

type Props = {
  children: Children
  id?: string
  section?: boolean
  size?: 'blog' | 'container' | 'full'
}

export default function Container({
  children,
  id,
  section,
  size,
  ...props
}: Props) {
  return (
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
    >
      {children}
    </div>
  )
}
