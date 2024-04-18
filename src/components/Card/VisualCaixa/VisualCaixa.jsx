import api from "../../../config/api";
import { format } from "date-fns"

import { VisualSttyle } from "./VisualStyle"; 

import { X } from 'lucide-react';
import { useStore } from "../../../store";
import { jsx } from "react/jsx-runtime";


export function VisualCaixa({caixa, onClose}) { 
  const {
    user,
  } = useStore();
    
         async function updateProduto() {
             try {
               await api.update(`/produto/${caixa._id}`, {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                }
               });
               

               onClose();
             } catch (err) {
              if (err.response) {
                const { data } = err.response;
        
               return {
                  success: data.success,
                   message: data.message,
             };
            } else {
              return {
              success: false,
                message: "falha ao se comunicar com o servidor !!",
             }
            }
           }
          }

    return caixa !== null ? (
      
        <VisualSttyle open   >
                
                <button onClick={onClose}><X /></button>
                   <div> 
                <span>{caixa.produto}</span>
                 </div >
             <span className="pecas">{caixa.quantidade}</span>
                {
                  caixa.codigo.map((cod , index) => (
                    <div   >
                        <span className="foco">{cod.referencia}</span>
                        </div>
                    ))
                  }
                {
                  caixa.valor.map((cod , index ) => (
                    <div   >
                        <span className="foco">{cod.compra}</span>
                        <span className="foco">{cod.venda}</span>
                        </div>
                    ))
                  }
                  <span>{format(caixa.data,"dd/MM/yyyy")}</span>
                  <span className="pecas">{caixa.descricao}</span>

                <button className="editar" onClick={updateProduto}>editar</button>
                   
        </VisualSttyle>
    ) : <></>
}