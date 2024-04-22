import { LocalStyle } from "./LocalStyle"
import { format } from "date-fns"

export function CardLocal({ onClick, produto, quantidade, data }) {

    return (
        <LocalStyle onClick={onClick}>
            <span>{produto}</span>
            <span>{quantidade}</span>
            <span>{format(data, " dd/MM/yyyy ")}</span>
        </LocalStyle>
    )
}
