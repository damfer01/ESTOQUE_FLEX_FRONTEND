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
    const [valor, setValor] = useState([true]);


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
            setValor([valor])
            reset();
            
        }
    }, [showCard]);
    
  
 
   const Alerta  =( ) => {
       

   };
   const Quantidade = ( ) => {
    
   }

   if( Alerta > Quantidade){
    return alert("Alerta e maior que a quantidade ")
   }




    return showCard ? (
        <CardSttyle open  >

            <form onSubmit={handleSubmit(onSubmit)}>

                <button id='excluir' onClick={onClose}><X /></button>

                <input className='AdicionarProduto' type="text" placeholder=" Produto  Obrigatorio" {...register('produto')} />


                Codigo:  Obrigatorio <button className='Adicionar-referencia' onClick={handleAddPeca}>+</button>

                {
                    codigo.map((cod, index) => (
                        <div key={index}>
                            <input className='Referencia' type="text" placeholder="codigo : " {...register(`codigo[${cod}].referencia`)} />
                        </div>
                    ))
                }

                <input className='quantidade' type="number" id={Quantidade}  placeholder=" quantidade:  Obrigatorio" {...register('quantidade')} />

                {
                    valor.map((cod, index) => (
                        <div >
                            <input className='compra' type="number" placeholder=" compra:  Obrigatorio " {...register(`valor[${cod}].compra`)} />
                            <input className='venda' type="number" placeholder="venda:  Obrigatorio" {...register(`valor[${cod}].venda`)} />
                        </div>
                    ))
                }

                <input className='alerta'id={Alerta}  type="number" placeholder=" Alerta:  Obrigatorio" />

                DESCRIÇÃO DE PRODUTO :

                <input className='descricao' type='text'  {...register('descricao')} />

                <button disabled={!isValid} type='submit' className="comfirmar">confirma</button>
            </form>

        </CardSttyle>
    ) : <></>
}