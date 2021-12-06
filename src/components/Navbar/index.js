import { Carro } from '../Carro'
import { Barra } from './style'

export const Navbar = ({ cantidad, productos }) => {
    return (
        <Barra>
            <p>Ur Fav Store</p>
            <Carro cantidad={cantidad} productos={productos} />
        </Barra>
    )
}