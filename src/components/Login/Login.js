import React from 'react'
import {getTokenURL, LoginUrl} from '../../logic'
import { ButtonLogin, ContainerLogin } from './styles'

const Login = () => {
  const token = getTokenURL()
  console.log(token)

  return (
    <ContainerLogin>
        <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo"/>
        <ButtonLogin href={LoginUrl}>inicia sesion con tu cuenta</ButtonLogin>
    </ContainerLogin>
  )
}

export default Login