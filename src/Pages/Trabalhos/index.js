import React from 'react';

// Styles
import {MainCenteredContent,ContentBox} from '../../Styles/components'
import { MainTitle, SecondTitle } from '../../Styles/typografy'
import { Container } from './styles'

export default () =>  
  <Container>
    <MainCenteredContent marginTop='4rem' width='80%'>
      <section className="trabalhos">
        <MainTitle> Meus Trabalhos <div id="infinity"></div> </MainTitle>
      </section>
    </MainCenteredContent>
  </Container>