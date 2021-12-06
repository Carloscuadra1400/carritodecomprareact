import { useState, useEffect } from 'react'
import { Burbuja } from '../Burbuja'
import {CarritoContenedor, CarBtn, ListaArticulos, Disorder, DisorderContent, DeleteButton } from './styles'

export const Carro = ({ cantidad, productos, borrardelCarrito}) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)
    console.log(productos)
    const [renderizar, setRenderizar] = useState(false)
    const [datos, setDatos] = useState(productos)
    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto
    useEffect(()=>{}, [renderizar]) 
 
    const borrarDelCarrito = (x) => {
        let confirmar = window.confirm("Quire borrar este articulo de su carrito?")
        if(confirmar){
            productos.map((prod, index, obj) => {
            if(prod.id === x.id){
                obj.splice(index, 1)
                
            }
            return prod
            })
        }
        
        setRenderizar(!renderizar)
    }
    


    return (
        <CarritoContenedor>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <CarBtn onClick={handleMostrarCarro}>
                Carro
            </CarBtn>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ListaArticulos>
                        <Disorder>
                            {
                                productos.map(x => {
                                    return (
                                        <DisorderContent key={x.id}>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><DeleteButton onClick={()=>borrarDelCarrito(x)}>X</DeleteButton> {x.nombre}</span>
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </DisorderContent>
                                    )
                                })
                            }
                            <DisorderContent>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </DisorderContent>
                            <DisorderContent >
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </DisorderContent>
                            <DisorderContent >
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </DisorderContent>
                        </Disorder>
                    </ListaArticulos>
            }
        </CarritoContenedor>

    )
}