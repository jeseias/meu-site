import React from 'react';

// icons 
import { FaCalendarAlt } from 'react-icons/fa'

// Styles
import { MainTitle, SecondTitle } from '../../Styles/typografy'
import {MainCenteredContent,ContentBox,InfoBox} from '../../Styles/components'
import { GridColumn2 } from '../../Styles/layout'

import { Container } from './styles'


export default () =>
  <Container>
   <MainCenteredContent marginTop='4rem' width='80%'>
     <section className="knowledge">
       <MainTitle> Resumo <div id="infinity"></div> </MainTitle>

        <GridColumn2>
          <div className="experience">
            <SecondTitle> Experiença </SecondTitle>
            <ContentBox>
              <InfoBox>
                <h2>Desenvolvimento Web</h2>
                <span> 
                  <FaCalendarAlt size={16}/> 2012 - 2014 | Centro Jeseias
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam eius ea.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eum ea quis.
                </p>
              </InfoBox>
            </ContentBox>
            <ContentBox>
              <InfoBox>
                <h2>Frontend-end Developer</h2>
                <span> 
                  <FaCalendarAlt size={16}/> 2012 - 2014 | Centro Jeseias
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam eius ea.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eum ea quis.
                </p>
              </InfoBox>
            </ContentBox>
            <ContentBox>
              <InfoBox>
                <h2>backend-developer</h2>
                <span> 
                  <FaCalendarAlt size={16}/> 2012 - 2014 | Centro Jeseias
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam eius ea.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eum ea quis.
                </p>
              </InfoBox>
            </ContentBox>
          </div>
          <div className="education">
            <SecondTitle> Educação </SecondTitle>
            <ContentBox>
              <InfoBox>
                <h2>Desenvolvimento Web</h2>
                <span> 
                  <FaCalendarAlt size={16}/> 2012 - 2014 | Centro Jeseias
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam eius ea.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eum ea quis.
                </p>
              </InfoBox>
            </ContentBox>
            <ContentBox>
              <InfoBox>
                <h2>Frontend-end Developer</h2>
                <span> 
                  <FaCalendarAlt size={16}/> 2012 - 2014 | Centro Jeseias
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam eius ea.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eum ea quis.
                </p>
              </InfoBox>
            </ContentBox>
            <ContentBox>
              <InfoBox>
                <h2>backend-developer</h2>
                <span> 
                  <FaCalendarAlt size={16}/> 2012 - 2014 | Centro Jeseias
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam eius ea.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eum ea quis.
                </p>
              </InfoBox>
            </ContentBox>
          </div>
        </GridColumn2>
     </section>

      <section className="skill">
        <SecondTitle> Habilidades </SecondTitle>

        <GridColumn2>
          <ContentBox></ContentBox>
          <ContentBox></ContentBox>
        </GridColumn2>
      </section>
   </MainCenteredContent>
  </Container>