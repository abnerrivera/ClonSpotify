import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderRight } from './styles'
import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import {selectUser} from '../../features/UserSlice'

const Header = () => {
  const user = useSelector(selectUser)
  return (
    <HeaderContainer>
        <HeaderLeft>
          <SearchIcon />
          <input type="text" placeholder="Encuentra la mejor musica"/>
        </HeaderLeft>
        <HeaderRight>
          <Avatar/>
          <h4>{user?.display_name}</h4>
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header