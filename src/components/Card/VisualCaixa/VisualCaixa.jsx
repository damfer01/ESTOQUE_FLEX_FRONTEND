import api from "../../../config/api";
import { format } from "date-fns"

import { VisualSttyle } from "./VisualStyle"; 

import { X } from 'lucide-react';
import { useStore } from "../../../store";


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
        <VisualSttyle open >
                
                <button onClick={onClose}><X /></button>
                   <div> 
                <span>{caixa.produto}</span>
                <span>{caixa.codigo}</span>
                <span>{caixa.referencia}</span>
                 </div>
                    <span className="pecas">quantidade</span>
                {
                  caixa.codigo.map((cod) => (
                    <div>
                        <span className="foco">{cod.referencia}</span>
                        </div>
                    ))
                  }
                  <span>{format(caixa.data,"dd/MM/yyyy")}</span>

                <button className="editar" onClick={updateProduto}>editar</button>
                   
        </VisualSttyle>
    ) : <></>
}