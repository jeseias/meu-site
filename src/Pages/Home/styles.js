import styled from 'styled-components';

import { positionAbsoluteCenter } from '../../Styles/mixins'
import { device } from '../../Styles/device'

export const TitleCenter = styled.h1`
  ${positionAbsoluteCenter(48, 50)};
  font-size: 4rem;
  color: #fff; 
  z-index: 1;
  text-transform: uppercase;  
  overflow: hidden;

  .h2 {
    font-size: 1.5rem; 
    font-weight: lighter; 
    min-width: 500px;  
    padding-left: 2.8rem;  
    
    span {
      font-style: italic;
      color: #f4f4f4;
      letter-spacing: .3rem;
      text-shadow: 0 0 .4rem #000;
      margin-left: 1rem;
      font-weight: bold;
    }
  }


  @media ${device.laptop} {  
    min-width: 600px;
    text-align: center;
  }

  @media ${device.tablet} { 
    ${positionAbsoluteCenter(48, 50)}; 
    min-width: 450px;
    text-align: center; 
    font-size: 3rem;

    .h2 {
      font-size: 1.2rem;
      padding: 0;
      text-align: center;
    }
  }

  @media ${device.mobileL} {   
    font-size: 2rem;

    .h2 {
      font-size: 1rem;
      padding: 0;
      text-align: center;

      span { 
        letter-spacing: 0; 
        margin-left: 0rem;
        font-weight: bold;
     }
    }
  } 
`;
