import { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const ErrorTitle = styled.h2`
    color: green;
    font-weight: bold;
    font-size: 288px;
    margin: auto;
    text-align: center;
    @media all and (max-width: 480px){
        font-size: 96px;
        margin-top: 1em;
    }
`

const ErrorDescription = styled.p`
    color: green;
    font-weight: 500;
    font-size: 36px;
    margin: auto;
    text-align: center;
    @media all and (max-width: 480px){
        font-size: 18px;
    }
`

const ErrorBack = styled(Link)`
    display: inline-block;
    width: 100%;
    color: green;
    font-weight: 500;
    font-size: 18px;
    text-decoration-line: underline;
    margin: 5em auto auto auto;
    text-align: center;
    @media all and (max-width: 480px){
        font-size: 14px;
    }
`

export class Error extends Component {
    render() {
        return (
            <div>
                <ErrorTitle>404</ErrorTitle>
                <ErrorDescription>Oups! La page que vous demandez n'existe pas.</ErrorDescription>
                <ErrorBack exact to="/">Retourner sur la page d’accueil</ErrorBack>
            </div>
        )
    }
}

export default Error
