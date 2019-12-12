import styled from 'styled-components';

import { device } from '../../Styles/device'

import { backgrounColor, tertiaryColor } from '../../Styles/variables' 
import { smoothTransition, centerContent, PageContainer } from '../../Styles/mixins' 

export const Container = styled.div` 
  ${PageContainer}

  /* About me section */
  .me {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-gap: 2rem;
    grid-template-areas: 
      'img details details details'
      'img details details details'
      'group group group group'
      ;

    .img {
      grid-area: img;  
      overflow: hidden;
      border-radius: 100%;
      ${centerContent}

      img {
        width: 100%;
        ${smoothTransition};
      }

      &:hover img {
        transform: scale(1.02);
      }
    }  

    .details {
      grid-area: details;
      color: #fff;

      .location {
        color: ${tertiaryColor};
        padding: .8rem 0;

        span {
          margin-left: 1rem;
        }
      }

      .information {
        margin: 1rem 0;
      }
    } 

    .group {
      grid-area: group;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr; 
      display: flex;
      flex-direction: row;
    }

  }

  /* My Interest section */
  .intereses {  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2rem; 

    > * {
      background: ${backgrounColor};
      padding: .2rem 1rem;
    }

    .details {
      ${centerContent};
      flex-direction: row;
      justify-items: flex-start;
    }

    @media ${device.mobileL} { 
      grid-template-columns: 1fr;
    }
  } 

  /* Services */
  .services {

    .allService {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 2rem; 
      
      > * {
        border-bottom: .2rem solid ${tertiaryColor}
      }
    }

    @media ${device.mobileL} { 
      .allService {
        grid-template-columns: 1fr;
        padding: 0 2rem;
      }
    }
  }


  /* Tablets */
  @media ${device.tablet} {  
    width: 100%;
  }

  /* large mobiles */
  @media ${device.mobileL} {  
    .me { 
      grid-template-columns: 1fr; 
      grid-gap: 1rem;
      grid-template-areas: 
        'img img '
        'details details'
        'group group'
        ;

        .group {  
          grid-template-columns: 1fr;
          flex-direction: column; 
          text-align: left;
        } 
    }

  }

`;
