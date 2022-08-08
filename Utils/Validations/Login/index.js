import * as yup from 'yup'

export const loginValidation = yup.object({
  email: yup
    .string()
    .email('Email must be a valid email')
    .max(60)
    .required('This field is required.'),
  password: yup.string().required('This field is required.'),
})

export const recoverPasswordValidation = yup.object({
  email: yup
    .string()
    .email('Email must be a valid email')
    .max(60)
    .required('This field is required.'),
})
export const singUpValidation = yup.object({
  name: yup.string().required('This field is required.'),
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('This field is required.'),
  password: yup.string().required('This field is required.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})
