import styled from 'styled-components';

import { smoothTransition, positionAbsoluteCenter } from '../../Styles/mixins'
import { transparentTertiaryColor, lightGray } from '../../Styles/variables'

export const ModalBox = styled.div`
  position: relative;
  background: ${ props => `url(${props.item.item})` };  
  background-size: cover;
  background-position: center;
  min-height: 300px; 

  * {
    ${smoothTransition};
  }

  .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff; 
    
    h2 {
      ${positionAbsoluteCenter(56,60)};
      transition-delay: .3s;
      position: absolute;
      font-size: 2rem;
      text-align: center;
      text-shadow: 0 0 3px #000;
      opacity: 0;
    }

    .what, .icon {
      display: block;
      ${positionAbsoluteCenter(100,10)};
      opacity: 0;
      position: absolute; 
    }

    .icon {
      ${positionAbsoluteCenter(100,75)}; 
      position: absolute;  
      transition-delay: .4s;
    }
  } 

  &:hover { 
    cursor: pointer;

    .details {
      background: ${transparentTertiaryColor};

      h2 {
        ${positionAbsoluteCenter(50,50)};
        position: absolute;
        transition-delay: 0;
        opacity: 1;
      }

      .what, .icon {
        ${positionAbsoluteCenter(89,14)};
        position: absolute;
        opacity: 1;
      }

      .icon {
        ${positionAbsoluteCenter(90,90)}; 
        position: absolute;
      }
    }
  }
`;

export const ImageShowBox = styled.div`
  ${positionAbsoluteCenter(0,0)};
  width: 100%;
  height: 100%;
  background: #12171b;
  z-index: 100;

  .main {
    ${positionAbsoluteCenter(50,50)};
    width: 100%;
    max-width: 500px;
    min-height: 200px;
    background: ${lightGray};
  }
`
