import { BTN } from './styles'

export const Button = ({children, agregarAlCarro, prod}) => {
    return (
        <BTN onClick={() => agregarAlCarro(prod)} >{children}</BTN>
    )
}