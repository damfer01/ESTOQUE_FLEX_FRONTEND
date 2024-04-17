import { LocalStyle } from "./LocalStyle"
import { format } from "date-fns"

export function CardLocal({ onClick, produto, codigo,quantidade , valor , data }) {
   return (
        <LocalStyle onClick={onClick}>
            <span>{produto}</span>
            <span>{codigo}</span>
            <span>{quantidade}</span>
            <span>{valor}</span>
            {/* <span>{format(data, " dd/MM/yyyy ")}</span> */}
        </LocalStyle>
    )
}
