import * as yup from 'yup'

const message = 'required'

const registerSchema = yup.object({
    usuario: yup.string().required(message),
    password: yup.string().required(message).min(8,'minimo  8 caracteres'),
    confirmPassword: yup.string().required(message).min(8,'minimo 8 caracteres').oneOf([yup.ref('password') , null], 'Password must match'),
});

export default registerSchema;

