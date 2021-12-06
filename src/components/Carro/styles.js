import styled from "styled-components";

export const CarritoContenedor = styled.div`
    position: relative;
`
export const CarBtn = styled.button`
    margin-top: 8.5px;
    border: none;
    border-radius: 10px;
    color: #fff;
    padding: 10px 15px;
    cursor: pointer;
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
`

export const ListaArticulos = styled.div`
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
    background-color: #fff;
    color: #000;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 50px;
    width: 400px;
`

export const Disorder = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

export const DisorderContent = styled.li`
    align-items: center;
    border-bottom: 1px dashed #ccc;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 5;
    text-align: justify;
`

export const DeleteButton = styled.button`
    border: none;
    background-color: #fb0207;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    font-size: 0.6em;
    padding: 2px 5px;
`

