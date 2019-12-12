import React from 'react';

// icons 
import { FaCalendarAlt } from 'react-icons/fa'

// Styles
import { MainTitle, SecondTitle } from '../../Styles/typografy'
import {MainCenteredContent,ContentBox,InfoBox} from '../../Styles/components'
import {GridColumn2,GridColumn3,Grid2Column4 } from '../../Styles/layout'

import { Container, SpecificBox } from './styles'


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
          <ContentBox>
            <div className="progress">
              <progress value="97" max="100" />
              <span> HTML5 97% </span>
            </div>
            <div className="progress">
              <progress value="71" max="100" />
              <span> JavaScript 71% </span>
            </div>  
            <div className="progress">
              <progress value="83" max="100" />
              <span> CSS3 83% </span>
            </div>
            <div className="progress">
              <progress value="63" max="100" />
              <span> ReactJS 63% </span>
            </div>
          </ContentBox>
          <ContentBox>
            <div className="progress">
              <progress value="74" max="100" />
              <span> NodeJS 74% </span>
            </div>
            <div className="progress">
              <progress value="61" max="100" />
              <span> MongoDB 61% </span>
            </div>
            <div className="progress">
              <progress value="74" max="100" />
              <span> NodeJS 74% </span>
            </div>
          </ContentBox>
        </GridColumn2>
      </section>
   
    <section className="profision">
      <SecondTitle> Minha Especialidades </SecondTitle>

      <ContentBox>
        <GridColumn3>
          <div className="left">
            <SpecificBox>
              <h3>Base de Dado</h3>
              <h3>Backend</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam sunt temporibus eum.
              </p>
            </SpecificBox>
            <SpecificBox>
              <h3>Criação de Site</h3>
              <h3>Backend</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam sunt temporibus eum.
              </p>
            </SpecificBox>
          </div>
          <div className="middle">
            <h2> FULLSTACK</h2>
          </div>
          <div className="right">
            <SpecificBox>
              <h3>Aplicativos para (<b>Andriod</b> e <b>IOS</b>)</h3>
              <h3>Frontend</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam sunt temporibus eum.
              </p>
            </SpecificBox>
            <SpecificBox>
              <h3>Aplicativos Desktop (Todos sistemas operativos)</h3>
              <h3>Backend</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam sunt temporibus eum.
              </p>
            </SpecificBox>
          </div>
        </GridColumn3>
      </ContentBox>
    </section>
   
    <section className="work">
      <SecondTitle> Meu Processo de Trabalho </SecondTitle>

      <Grid2Column4>
        <ContentBox>
          <h1> 001 </h1>
          <h2> Descução de ideias </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium saepe obcaecati quasi.
          </p>
        </ContentBox>
        <ContentBox className="right">
          <h1> 002 </h1>
          <h2> Descução de ideias </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium saepe obcaecati quasi.
          </p>
        </ContentBox>
        <ContentBox>
          <h1> 003 </h1>
          <h2> Descução de ideias </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium saepe obcaecati quasi.
          </p>
        </ContentBox>
        <ContentBox className="right">
          <h1> 004 </h1>
          <h2> Descução de ideias </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium saepe obcaecati quasi.
          </p>
        </ContentBox> 
      </Grid2Column4>
    </section>
   </MainCenteredContent>
  </Container>