import styled from 'styled-components'

const ContainerLogin = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background: #000;
    & img {
        width: 40%;
    }
`

const ButtonLogin = styled.a`
    background-color: #1db954;
    color: white;
    text-decoration: none;
    padding:15px;
    border-radius: 90px;
    text-transform: uppercase;
    font-weight: bold;
`
export {ContainerLogin, ButtonLogin}