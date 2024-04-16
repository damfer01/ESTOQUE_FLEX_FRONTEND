import CaixaSchema from '../../../schema/Caixa/CaixaSchema';
import { registerCaixa } from '../../../service/authCaixa';
import { CardSttyle } from "./style";

import { X } from 'lucide-react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStore } from '../../../store';

export function CardAdicionar({ showCard, onClose }) {

    const {
        user,
    } = useStore();

    const [codigo, setcodigo] = useState([]);


    const handleAddPeca = () => {
        setcodigo((value) => [...value, value.length])
    };

    const {
        handleSubmit,
        reset,
        register,
        formState: {
            isValid,
        }

    } = useForm({
        resolver: yupResolver(CaixaSchema),
        mode: 'onChange',
    });

    const onSubmit = async (_data) => {
        const {
            produto,
            quantidade,
            codigo,
            valor,
            descricao,
            data,
        } = _data;

        const { success, result } = await registerCaixa(user.token,
            produto,
            quantidade,
            codigo,
            valor,
            descricao,
            data,);

        if (success) {

            onClose();
        }
        console.log(result);
    };

    useEffect(() => {
        if (!showCard) {

            setcodigo([])
            reset();
        }
    }, [showCard]);

    return showCard ? (
        <CardSttyle open  >

            <form onSubmit={handleSubmit(onSubmit)}>

                <button id='excluir' onClick={onClose}><X /></button>

                <input className='AdicionarProduto' type="text" placeholder=" Produto  Obrigatorio" {...register('produto')} />
                <input className='AdicionarCodigo' type="text" placeholder="Codigo:  Obrigatorio" {...register('codigo')} />
                <button className='Adicionar-referencia' onClick={handleAddPeca}>+</button>
                {
                    codigo.map((cod, index) => (
                        <div key={index}>
                            <input className='Referencia' type="text" placeholder="referencia : " {...register(`codigo[${cod}].referencia`)} />
                        </div>
                    ))
                }

                <input className='quantidade' type="text" placeholder=" quantidade:  Obrigatorio" {...register('quantidade')} />
                <input className='compra' type="text" placeholder=" compra:  Obrigatorio" {...register('compra')} />
                <input className='venda' type="text" placeholder=" venda:  Obrigatorio" {...register('venda')} />

                <input className='alerta' type="text" placeholder=" Alerta:  Obrigatorio" />

                <input className='descricao' placeholder='descrição' type='text'  {...register('descricao')} />

                <button disabled={!isValid} type='submit' className="comfirmar">confirma</button>
            </form>

        </CardSttyle>
    ) : <></>
}