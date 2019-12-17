import styled from 'styled-components';

import { positionAbsoluteCenter } from '../../Styles/mixins'
import { lightGray } from '../../Styles/variables'

export const Container = styled.div`
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
`;
