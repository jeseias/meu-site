import React, { useState } from 'react';

// Styles
import { GridColumn3 } from '../../Styles/layout' 
import { ContentBox } from '../../Styles/components' 
import { Container, Filter, FilterItem } from './styles'

export default () => {
  const [items] = useState([
    { name: 'All', active: true },
    { name: 'Sites', active: false },
    { name: 'Telefone', active: false },
    { name: 'Computador', active: false },
  ])

  return ( 
    <Container>
      <div className="filterbox">
        <Filter>{items.map( ({name, active}) => 
          <FilterItem key={name}className={active ? 'active' : ''}>{name}</FilterItem>
        )}</Filter>
      </div>
      <GridColumn3>
        <ContentBox></ContentBox>
        <ContentBox></ContentBox>
        <ContentBox></ContentBox>
      </GridColumn3>
    </Container> 
  )
}