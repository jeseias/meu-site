import styled from 'styled-components';

import { PageContainer, CenterElement, centerContent } from '../../Styles/mixins'
import { tertiaryColor, darkGray } from '../../Styles/variables'

export const Container = styled.div`
  ${PageContainer};

  form {
    button {
      ${CenterElement};
      font-size: 1.4rem;
    }
  }

  .contact {
    margin-top: 4rem;
    color: #fff;

    > div {
      ${centerContent};
      text-align: center;

      h3 {
        color: ${tertiaryColor};
      }

      span  {
        color: ${darkGray};
      }
    }
  }
`;
