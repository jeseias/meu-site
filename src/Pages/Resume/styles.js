import styled from 'styled-components';

import { PageContainer,centerContent,positionAbsoluteCenter } from '../../Styles/mixins'
import { tertiaryColor, darkGray } from '../../Styles/variables'

export const Container = styled.div`
  ${PageContainer};

  color: #fff;

  .skill {
    .progress {
      width: 100%;
      ${centerContent}
      position: relative;
      margin-bottom: 2rem;

      span { 
        position: absolute;
        ${positionAbsoluteCenter(50,50)};
        display: block;
        font-size: 1rem; 
        color: ${darkGray}; 
      }
      progress {
        border-radius: 2px; 
        width: 100%;
        height: 22px; 
      }
      progress::-webkit-progress-bar {
        background-color: #f4f4f4;
        border-radius: 2px; 
      }
      progress::-webkit-progress-value {
        border-radius: 2px; 
        background: ${tertiaryColor};
      } 
    }
  }
`;
