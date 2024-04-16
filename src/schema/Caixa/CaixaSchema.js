import * as yup from 'yup'

const message = 'campo obrigatorio'

const CaixaSchema = yup.object({
    // produto: yup.string().required(message),
    // quantidade: yup.string().required(message),
    // codigo: yup.string().required(message),
    // valor: yup.string().required(message),
    // descricao: yup.string().required(message),
   
});

export default CaixaSchema;