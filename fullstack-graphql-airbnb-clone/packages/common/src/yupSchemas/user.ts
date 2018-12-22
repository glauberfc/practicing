import * as yup from 'yup'

export const emailNotLongEnough = 'email must be at least 3 characters'
export const passwordNotLongEnough = 'password must be at least 3 characters'
export const invalidEmail = 'email must be a valid email'
export const passwordIsRequired = 'password is a required field'

export const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255)
  .required(passwordIsRequired)

export const validUserSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required(),
  password: registerPasswordValidation,
})

export const newPasswordValidation = yup.object().shape({
  newPassword: registerPasswordValidation,
})
