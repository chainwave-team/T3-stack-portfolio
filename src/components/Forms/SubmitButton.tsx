/** @jsx jsx */
/* eslint-disable no-template-curly-in-string */
import { FC } from 'react'
import { jsx, Button, Spinner, SxStyleProp } from 'theme-ui'

const style: SxStyleProp = {
  button: {
    position: 'relative'
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  disabled: {
    color: 'muted',
    cursor: 'not-allowed',
    textDecoration: 'line-through',
    '&:hover': { color: 'muted', cursor: 'not-allowed' }
  }
}

export interface SubmitButtonProps {
  isValid?: boolean
  isLoading?: boolean
  label?: string
}

const SubmitButton: FC<SubmitButtonProps> = ({
  isLoading,
  isValid,
  label = 'Envoyer'
}) => (
  <Button
    type="submit"
    sx={
      !isLoading && isValid
        ? { ...style.button }
        : { ...style.button, ...style.disabled }
    }
    disabled={isLoading || !isValid}
  >
    <span sx={{ opacity: Number(!isLoading) }}>{label}</span>
    {isLoading && <Spinner sx={style.spinner} size={24} />}
  </Button>
)

export default SubmitButton
