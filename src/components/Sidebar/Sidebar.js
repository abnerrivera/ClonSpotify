import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
//import {SearchIcon, HomeIcon, LibraryMusicIcon} from '@material-ui/icons'
import SidebarChoise from './SidebarChoise';
import { PlayList, SidebarContainer} from './styles'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="Spotify"/>
      <SidebarChoise title="Buscar" Icon={SearchIcon}/>
      <SidebarChoise title="Inicio" Icon={HomeIcon}/>
      <SidebarChoise title="Lista" Icon={LibraryMusicIcon}/>
      <PlayList>PLAY LIST</PlayList>
      <hr/>
      <SidebarChoise title="LISTA #1"/>
      <SidebarChoise title="LISTA #2"/>
      <SidebarChoise title="LISTA #3"/>
    </SidebarContainer>
  )
}

export default Sidebar

