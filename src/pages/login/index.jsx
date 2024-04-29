
import PartsBox from '../../assets/PartsBox.svg';
import { Input } from "../../components/Input";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from "../../schema/loginSchema";
import { Spacing } from "../../components/Spacing";
import { Logo } from '../../components/logo';
import { Actions, Form } from '../../components/Form';
import { Main } from '../../components/Main/main';
import { Button } from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/index';
import { login } from '../../service/authServices';
import facebook from "../../assets/facebook.svg"
import google from "../../assets/google.svg"



export default function Login() {
    const navigate = useNavigate();

    const {
        user,

    } = useStore();

    const {
        handleSubmit,
        control,
        formState: {
            isValid,
        }


    } = useForm({
        resolver: yupResolver(loginSchema),
        mode: 'onChange',
        defaultValues: {
            usuario: "pratsbox",
            password: "28102003",
        }
    });

    const onSubmit = async (data) => {
        const {
            usuario,
            password,
        } = data;

        const { success, message, result } = await login(usuario, password);

        alert(message);

        if (success) {
            user.setUserData({
                name: result.usuario,
                token: result.token,
            });

            navigate('/produto');
        }

    };

    return (
        <Main  >
            <Logo rc={PartsBox} />

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Spacing $bottom={20}>
                    <Input
                        control={control}
                        name='usuario'
                        label='Usuário'

                    />
                </Spacing>

                <Spacing $bottom={36}>
                    <Input
                        control={control}
                        name='password'
                        label='Senha'
                        type='password'

                    />
                </Spacing> 
                <Actions>
                    <Spacing $bottom={24}>
                        <Button disabled={!isValid} $color="secondary" type='subnit'>ENTRAR</Button>
                    </Spacing>

                    <Spacing>
                        <Button onClick={() => navigate('/register')} type='button' $color="primaryDark">ME CADASTRAR</Button>
                    </Spacing>
                </Actions>
                <Spacing>
                    <Logo className='facebook' src={facebook}/>
                    <Logo className='google' src={google}/>
                </Spacing>
   
            </Form>
            
        </Main>
    );
};