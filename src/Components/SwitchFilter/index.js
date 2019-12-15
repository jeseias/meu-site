import React, { useState } from 'react';

// components
import Modal from '../Modal'

// Styles
import { GridColumn3 } from '../../Styles/layout' 
import { ContentBox } from '../../Styles/components' 
import { Container, Filter, FilterItem } from './styles'

export default () => {
  const [items, setItem] = useState([
    { name: 'All', active: true },
    { name: 'Sites', active: false },
    { name: 'Telefone', active: false },
    { name: 'Computador', active: false }
  ])

  // This function switches the menus tabs
  const handleItems = name => {
    const newItems = items.map( item => {
      if( item.name === name)
        return {...item, active: true} 
        return {...item, active: false}
    })

    setItem(newItems)
  }

  return ( 
    <Container>
      <div className="filterbox">
        <Filter>{items.map( ({name, active}) => 
          <FilterItem key={name}className={active ? 'active' : ''} onClick={() => handleItems(name)}>{name}</FilterItem>
        )}</Filter>
      </div>
      <GridColumn3>
        <ContentBox>
          <Modal></Modal>
        </ContentBox>
        <ContentBox>
          <Modal></Modal>
        </ContentBox>
        <ContentBox>
          <Modal></Modal>
        </ContentBox>
      </GridColumn3>
    </Container> 
  )
}