import api from "../../../config/api";
import { useStore } from "../../../store";
import { LocalStyle } from "./LocalStyle"
import { format } from "date-fns"

export function CardLocal({ onClose , onClick, caixa,  produto, codigo ,quantidade , valor  , data }) {
  
   return (
        <LocalStyle onClick={onClick}>
            <span>{produto}</span>
            <span>{quantidade}</span>

          
   
           
           <span>{format(data, " dd/MM/yyyy ")}</span> 
        </LocalStyle>
    )
}
