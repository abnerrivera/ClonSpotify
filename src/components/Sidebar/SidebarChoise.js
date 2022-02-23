import React from 'react'
import {Choices} from './styles'

const SidebarChoise = ({title, Icon}) => {
  return (
    <Choices>
       {
          Icon && <Icon/>
       }
       {
          Icon ? <h3>{title}</h3> : <p>{title}</p>
       }
    </Choices>
  )
}

export default SidebarChoise