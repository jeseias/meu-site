import styled from 'styled-components';

import { centerContent, smoothTransition } from '../../Styles/mixins'
import { device } from '../../Styles/device'

export const Container = styled.div`
  ${centerContent}
  position: fixed;
  top: 0;
  right: 0;
  width: 50px;
  height: 190px; 
  z-index: 1; 

  a {
    margin: .5rem 0;
    ${smoothTransition}
    * {
      ${smoothTransition}
    } 

    &:hover {
      transform: scale(1.5);
      * { 
        color: #25ca7f;
      }
    }
  }

  @media ${device.tablet} {   
    top: 60px;
    right: 3.4%;
    width: auto;  
  }

  @media ${device.mobileL} { 
    top: 0;
    bottom: 0;  
    height: 100%;  
    justify-content: flex-end;  
  }
`;
