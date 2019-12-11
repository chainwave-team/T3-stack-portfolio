/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Children } from '../../utils/types'

type Props = {
  children: Children
  variant?: 'primary' /* | 'secondary' */
  size?: 'small' | 'medium' | 'large'
}

export default function Button(props: Props) {
  const { children, variant, size } = props
  const padding = {
    small: {
      px: 2,
      py: 1
    },
    medium: {
      px: 3,
      py: 2
    },
    large: {
      px: 4,
      py: 3
    }
  }

  return (
    <button
      {...props}
      type="button"
      sx={{
        variant: `buttons.${variant || 'primary'}`,
        appearance: 'none',
        cursor: 'pointer',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 'inherit',
        fontWeight: 'bold',
        m: 0,
        ...padding[size || 'medium'],
        border: '2px solid',
        borderRadius: 0
      }}
    >
      {children}
    </button>
  )
}
