import React from 'react';

// Import
import SwitchFilter from '../../Components/SwitchFilter'

// Styles
import {MainCenteredContent,ContentBox} from '../../Styles/components'
import { MainTitle } from '../../Styles/typografy'
import { Container } from './styles'

export default () =>  
  <Container>
    <MainCenteredContent marginTop='4rem' width='80%'>
      <section className="trabalhos">
        <MainTitle> Meus Trabalhos <div id="infinity"></div> </MainTitle>
        
        <ContentBox>
          <SwitchFilter />
        </ContentBox>
      </section>
    </MainCenteredContent>
  </Container>