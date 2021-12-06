import { useRef, useState, useEffect } from "react";
import { Articulo } from "../Articulo";
import { Container, Container2, Busqueda, BTNBusqueda} from "../Articulos/styles";

export const Articulos = (props) => {

    const [productos, setProductos] = useState(props.data.articulos)
    const agregarAlCarro = props.agregarAlCarro

    const buscarProducto = useRef(null)

    useEffect(()=>{}, [productos])

    const handleSearch = () =>{
        let busquedaProducto = buscarProducto.current.value
        let productoEncontrado =  [...productos].find((prod) => prod.nombre === busquedaProducto)
        if(!productoEncontrado){
            alert("No se encontro producto")
            setProductos([...props.data.articulos])
            return
        }
        setProductos([productoEncontrado])
    }
    return (
        
        <Container>
            <Container2>
                <Busqueda ref={buscarProducto} type={"search"}></Busqueda>
                <BTNBusqueda onClick={handleSearch}>Search</BTNBusqueda>
            </Container2>
            <Container>
            {
                productos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} />
                )
            }
            </Container>
        </Container>
    )
}