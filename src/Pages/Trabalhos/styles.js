import styled from 'styled-components';

import { PageContainer } from '../../Styles/mixins'
import { device } from '../../Styles/device' 

export const Container = styled.div`
  ${PageContainer}


  @media ${device.tablet} { 
    .modalGrid {
      grid-template-columns: 1fr 1fr;
    } 
  }

  @media ${device.mobileL} { 
    .modalGrid {
      grid-template-columns: 1fr;
    } 
  }
`;
