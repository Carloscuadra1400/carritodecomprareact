import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 100px;
`

export const Container2 = styled.div`
    width: 100%
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0px;
`
export const Busqueda = styled.input`
    width: 450px;
    height: 30px;
    border: 0.5px insert rgba(131,58,180,1);
    border-radius: 10px;
`

export const BTNBusqueda = styled.button`
    width: 90px;
    height: 30px;
    border: none;
    border-radius: 7.5px;
    color: white;
    cursor: pointer;
    padding: 5px 16px;
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    margin-left: 10px

`