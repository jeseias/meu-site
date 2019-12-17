import React from 'react';

// Styles  
import { Container, Filter, FilterItem } from './styles'

export default ({ handleItems, items }) => {
  return ( 
    <Container>
      <div className="filterbox">
        <Filter>{items.map( ({name, active}) => 
          <FilterItem 
            className={active ? 'active' : ''} 
            key={name}
            onClick={() => handleItems(name)}
          > 
            { name }
          </FilterItem>
        )}</Filter>
      </div> 
    </Container> 
  )
}