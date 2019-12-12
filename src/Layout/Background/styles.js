import styled from 'styled-components';

import { zoomInImg } from '../../Styles/animation'


const absoluteTotalBackground = `
  content: "";  
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Background = styled.div`
  min-width: 100vw;
  min-height: 100vh; 
  padding: 0;
  margin: 0;   

  &::before {
    ${absoluteTotalBackground} 
    background: ${ props => `url(${props.img})`};
    animation: ${zoomInImg} 12.5s ease-in-out infinite;
  } 

  &::after {
    ${absoluteTotalBackground}
    background: #12171b;
    opacity: .66;
  }
`;
