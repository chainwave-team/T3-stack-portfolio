/** @jsx jsx */
/* eslint-disable no-template-curly-in-string */
import { FC, useState } from 'react'
import { jsx, Input, Box, Grid, Textarea } from 'theme-ui'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import FormControl from './FormControl'
import SubmitButton from './SubmitButton'

export interface ContactFormValue {
  firstName: string
  lastName: string
  email: string
  message: string
}

const initialValues: ContactFormValue = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@mail.com',
  message: "Hi, it's John, what's up ?"
}

Yup.setLocale({
  mixed: {
    default: 'Champ invalide',
    required: 'Champ obligatoire'
  },
  string: {
    min: 'Minimum ${min} charactères',
    max: 'Maximum ${max} charactères',
    email: "L'adresse email n'est pas valide"
  }
})

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  message: Yup.string().required()
})

const ContactForm: FC<{}> = () => {
  const [isSending, setSending] = useState(false)

  const onSubmit = async (values: ContactFormValue) => {
    console.log(values)
    setSending(true)
    const id = await setTimeout(() => {
      setSending(false)
    }, 1000)
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  const isLoading = isSending || formik.isValidating || formik.isSubmitting

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid columns={[1, 2]} sx={{ rowGap: 0 }}>
        <FormControl
          label="Prénom"
          required
          {...formik.getFieldMeta('firstName')}
        >
          <Input {...formik.getFieldProps('firstName')} />
        </FormControl>

        <FormControl label="Nom" required {...formik.getFieldMeta('lastName')}>
          <Input {...formik.getFieldProps('lastName')} />
        </FormControl>
      </Grid>

      <FormControl label="Email" required {...formik.getFieldMeta('email')}>
        <Input {...formik.getFieldProps('email')} />
      </FormControl>

      <FormControl label="Message" required {...formik.getFieldMeta('message')}>
        <Textarea rows={4} {...formik.getFieldProps('message')} />
      </FormControl>

      <Box py={2} />

      <SubmitButton isLoading={isLoading} isValid={formik.isValid} />
    </form>
  )
}

export default ContactForm
