import styled from 'styled-components'

import { GridMobileLargeMediaQuery } from './mixins'

export const GridColumn2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  ${GridMobileLargeMediaQuery};
`

export const GridColumn3 =  styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  ${GridMobileLargeMediaQuery};
`

export const Grid2Column4 =  styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2em;
  ${GridMobileLargeMediaQuery};
`