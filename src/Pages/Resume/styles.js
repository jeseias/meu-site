import styled from 'styled-components';

import { PageContainer,centerContent,positionAbsoluteCenter } from '../../Styles/mixins'
import { tertiaryColor, darkGray, lightGray } from '../../Styles/variables'

export const Container = styled.div`
  ${PageContainer}; 
  color: #fff;

  /* My skills section */
  .skill {
    
  }

  /* Minha sespecializacao section */
  .profision {
    .left {
      text-align: right; 
    }

    .middle {
      ${centerContent};
      width: 100%; 
      
      h2 {
        letter-spacing: .3rem; 
      }
    }

    .right {
      text-align: left;
    }
  }

  /* Work Section */
  .work{
    > div h1 {
      color: ${tertiaryColor}
    }

    p {
      color: ${lightGray}
    }

    .left {
      text-align: left;
    }

    .right {
      text-align: right;
    }
  }
`;

export const SpecificBox = styled.div`
  margin: 3rem 0;
  h3:first-child {
    color: ${tertiaryColor}
  }
  h3:last-child {
    color: #fff;
  }

  p {
    color: ${lightGray}
  }
`
