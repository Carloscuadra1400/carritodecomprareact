import { BRB } from './styles'

export const Burbuja = ({ cantidad }) => {
    // let { numero } = props
    // let numero = props.numero
    return (
        <BRB>
            {cantidad > 9 ? '9+' : cantidad}
        </BRB>
    )   
}