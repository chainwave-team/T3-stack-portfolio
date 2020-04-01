/** @jsx jsx */
import { jsx } from 'theme-ui'
import { HTMLProps, FC } from 'react'

export interface ButtonProps extends Partial<HTMLProps<HTMLButtonElement>> {
  variant?: 'primary' | 'secondary'
  setSize?: 'small' | 'medium' | 'large'
}

const Button: FC<ButtonProps> = ({ variant, setSize, ...props }) => {
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
      px: 5,
      py: 3,
      fontSize: 3
    }
  }

  // TODO : Share link style with link ?
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
        fontWeight: 'body',
        fontFamily: 'mono',
        m: 0,
        border: '1px solid',
        borderRadius: 0,
        ...padding[setSize || 'medium']
      }}
    />
  )
}

export default Button
