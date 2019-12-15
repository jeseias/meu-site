import styled from 'styled-components';

import { tertiaryColor, lightGray } from '../../Styles/variables'
import { smoothTransition } from '../../Styles/mixins'

export const Container = styled.div`
   .filterbox{
     padding: .5rem;
   }
`;

export const Filter = styled.div`
  display: block;
  margin: 0 auto;
  box-shadow: 0 0 .4rem ${lightGray};
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 1fr;  
  border-radius: 2rem;
  max-width: 700px;
  padding: 1rem;
  grid-gap: 1rem;
`

export const FilterItem = styled.div`
  color: #fff;
  text-align: center;
  border-radius: 2rem;
  padding: .2rem;
  ${smoothTransition};
  
  &.active {
    background: ${tertiaryColor}; 

    &:hover {
      background: ${tertiaryColor}
    }
  } 

  &:hover {
    cursor: pointer; 
  }
`
