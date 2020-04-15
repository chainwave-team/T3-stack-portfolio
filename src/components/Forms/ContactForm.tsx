/** @jsx jsx */
import { FC, useState } from 'react'
import { jsx, Input, Box, Grid, Textarea, Text, Flex } from 'theme-ui'
import { useFormik } from 'formik'

import axios from 'axios'

import FormControl from './FormControl'
import SubmitButton from './SubmitButton'
import Yup from './Yup'

export interface ContactFormValue {
  firstName: string
  lastName: string
  email: string
  message: string
}

const initialValues: ContactFormValue = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  message: Yup.string().required()
})

const ContactForm: FC<{}> = () => {
  const [isSent, setIsSent] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, action) => {
      // Send mail using netlify lambda
      axios
        .post(`/.netlify/functions/contact-form`, values, {
          headers: { accept: 'Accept: application/json' }
        })
        .then(response => {
          if (response.status >= 200 && response.status < 400) {
            action.resetForm()
            setIsSent(true)
          }
        })
        // eslint-disable-next-line no-console
        .catch(console.error)
    }
  })

  const handleChange = () => {
    setIsSent(false)
  }

  const isLoading = formik.isValidating || formik.isSubmitting
  const { handleSubmit, isValid, getFieldMeta, getFieldProps } = formik

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <Grid columns={[1, 2]} sx={{ rowGap: 0 }}>
        <FormControl label="Prénom" required {...getFieldMeta('firstName')}>
          <Input {...getFieldProps('firstName')} />
        </FormControl>

        <FormControl label="Nom" required {...getFieldMeta('lastName')}>
          <Input {...getFieldProps('lastName')} />
        </FormControl>
      </Grid>

      <FormControl label="Email" required {...getFieldMeta('email')}>
        <Input {...getFieldProps('email')} />
      </FormControl>

      <FormControl label="Message" required {...getFieldMeta('message')}>
        <Textarea rows={4} {...getFieldProps('message')} />
      </FormControl>

      <Box py={2} />

      <Flex sx={{ alignItems: 'center' }}>
        <SubmitButton isLoading={isLoading} isValid={isValid} />
        {isSent && <Text sx={{ pl: 3 }}>Message envoyé :)</Text>}
      </Flex>
    </form>
  )
}

export default ContactForm
