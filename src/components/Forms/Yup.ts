import * as Yup from 'yup'

/* eslint-disable no-template-curly-in-string */
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

export default Yup
