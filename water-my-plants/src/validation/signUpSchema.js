import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Username is required'),
  password: yup
    .string()
    .trim()
    .required('Password is required'),
  phone_number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid'),
  confirm: yup
    .string()
    .required('Confirm password is required')
})

export default signUpSchema;