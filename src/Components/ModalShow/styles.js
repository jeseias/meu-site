import styled from 'styled-components'; 

import { smoothTransition } from '../../Styles/mixins'
import { tertiaryColor } from '../../Styles/variables'
import { device } from '../../Styles/device'

export const Container = styled.div`
  display: ${props => props.item ? 'block' : 'none'};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #12171b99; 
  z-index: 100;  

  
  section {
    margin: 15rem auto;
    max-width: 700px;
    width: 100%; 
    height: 500px;
    background: ${props => `url(${props.img})` };  
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
    position: relative; 
    overflow: visible;

    .close {
      position: absolute; 
      color: #fff; 
      top: -3rem;
      right: 0rem; 
      ${smoothTransition};

      &:hover {
        color: ${tertiaryColor};
        cursor: pointer;
      }
    }

    a {
      position: absolute; 
      color: #fff; 
      bottom: -2rem;
      right: 0rem; 
      ${smoothTransition};
      text-decoration: underline;

      &:hover {
        color: ${tertiaryColor};
        cursor: pointer;
      }
    }

  }

  /* Tablets styles */
  @media ${device.tablet} { 
    section {
      max-width: 60%;
      width: 100%; 
      height: 300px;
    } 
  }

  @media ${device.mobileL} { 
    section {
      max-width: 95%;
      width: 100%; 
      height: 400px;
    } 
  }
`;
