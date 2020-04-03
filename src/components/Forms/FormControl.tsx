/** @jsx jsx */
import { FC } from 'react'
import { jsx, Styled, Label, Box, SxStyleProp } from 'theme-ui'

const style: SxStyleProp = {
  root: {
    mb: 4,
    position: 'relative'
  },
  star: {
    fontSize: 0,
    color: 'secondary',
    pl: 1
  },
  error: {
    position: 'absolute',
    top: '100%',
    left: 0,
    transform: 'translateY(-50%)',
    fontSize: 0,
    color: 'secondary'
  }
}

export interface FormControlProps {
  label?: string
  error?: string
  touched?: boolean
  required?: boolean
}

const FormControl: FC<FormControlProps> = props => {
  const { label, error, touched, children, required } = props
  return (
    <Box sx={style.root}>
      {label && (
        <Label>
          {label}
          {required && <span sx={style.star}>*</span>}
        </Label>
      )}
      {children}
      {error && touched && <Styled.p sx={style.error}>{error}</Styled.p>}
    </Box>
  )
}

export default FormControl
