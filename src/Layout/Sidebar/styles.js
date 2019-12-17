import styled from 'styled-components';

// Global Styles
import { centerContent, smoothTransition, positionAbsoluteCenter } from '../../Styles/mixins'
import { tertiaryColor, primaryColor, secondaryColor } from '../../Styles/variables'
import { device } from '../../Styles/device' 

export const Sidebar = styled.aside`
  width: 10%;
  min-height: 100%;
  background: rgba(0,0,0, .4);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 140px auto 140px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;  

  *:not(main) {
    ${centerContent}
  }

  main {
    border-top: 3px solid rgba(0,0,0, .5);
    border-bottom: 3px solid rgba(0,0,0, .5);

    ul {
      ${centerContent} 
      padding-top: 1em;

      a {
        ${centerContent}  
        margin: 1.2rem auto;
        position: relative;
        
        span {
          ${smoothTransition};
          background: ${primaryColor};
          padding: .3rem .7rem;
          height: 40px;
          border-radius: 1rem; 
          position: absolute;
          opacity: 0;
          top: -4rem;  
          z-index: -1; 
        }
        
        .icon {
          ${smoothTransition}; 
        }

        .icon:hover {
          cursor: pointer;
          color: ${tertiaryColor};
        } 

        .icon:hover + span {
          top: -5rem;
          z-index: 1;
          opacity: 1;
        }
      }
    }
  }


  /* Media Queries */
  @media ${device.laptop} {   
    width: 100px;
  }

  @media ${device.tablet} {   
    transform: translateX(-110%); 
    background: ${secondaryColor};
    width: 55px;
    ${smoothTransition};
    z-index: 100; 
    overflow-y: scroll;

    &.show {
      transform: translateX(0);
    }
  }

  @media ${device.mobileL} {   
    overflow: visible;
    main {

      ul {

        a {

          span {
            left: 2px;
          }
        }
      }
    }
  }

`;

export const Menu = styled.div`
  display: none;  

  @media ${device.tablet} {   
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: ${secondaryColor};
    color: #fff;
    text-align: center;
    z-index: 100;

    .bars { 
      position: fixed;
      top: 8px;
      right: 22px;
      ${centerContent}
    }
  }

  @media ${device.mobileL} {   

    .bars {
      ${positionAbsoluteCenter(2.9, 94)}; 
      ${centerContent}
    }
  }
`
