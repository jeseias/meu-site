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
                <h2>Awesomedone</h2>
                <span> 
                  <FaCalendarAlt size={16}/> 2019 - 2020 | Startup AwesomeDone
                </span>
                <p>         
                  Co-fundador da empresa Awesomedone, líder de uma das equipas de programadores.
                </p>
              </InfoBox>
            </ContentBox>
            <ContentBox>
              <InfoBox>
                <h2>SPCENTER</h2>
                <span> 
                  <FaCalendarAlt size={16}/> 2012 | Centro SPCENTER
                </span>
                <p>
                  Trabalhei como programador web e desktop. Especilizado desenvolvimento em frontend.
                </p>
              </InfoBox>
            </ContentBox> 
          </div>
          <div className="education">
            <SecondTitle> Educação </SecondTitle>
            <ContentBox>
              <InfoBox>
                <h2>Amazing Kids Private School and Academy</h2>
                <span> 
                  <FaCalendarAlt size={16}/> 2008 - 2015 | AKPS
                </span>
                <p>
                  Colegio maravilhoso esta na lista dos melhores colegios de africa, onde aprendi e o meu inglês.
                </p>
              </InfoBox>
            </ContentBox>
            <ContentBox>
              <InfoBox>
                <h2>Colegio Pitruca</h2>
                <span> 
                  <FaCalendarAlt size={16}/> 2015 - 2019 | Pitruca
                </span>
                <p>
                  A minha jornada como programador verdadeiro começou neste colegio, juntamente com os colegas
                  da classe superior.
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
              <span> ReactNative 74% </span>
            </div>
            <div className="progress">
              <progress value="61" max="100" />
              <span> MongoDB 61% </span>
            </div>
            <div className="progress">
              <progress value="74" max="100" />
              <span> NodeJS 74% </span>
            </div>
            <div className="progress">
              <progress value="83" max="100" />
              <span> Inglês 83% </span>
            </div>
          </ContentBox>
        </GridColumn2>
      </section>
   
    <section className="profision">
      <SecondTitle> Especialidades </SecondTitle>

      <ContentBox>
        <GridColumn3>
          <div className="left">
            <SpecificBox>
              <h3>Base de Dado</h3>
              <h3>Backend</h3>
              <p>
                Fazer o setup de um servidor e a sua base de dado, criando uma e a sua API, para ser consumida.
              </p>
            </SpecificBox>
            <SpecificBox>
              <h3>Criação de Site</h3>
              <h3>Web</h3>
              <p>
                Sites completamento responsivos, detalhados, harmonia de cores.
              </p>
            </SpecificBox>
          </div>
          <div className="middle">
            <h2> FULLSTACK</h2>
            <p> Programador que mexe com tudo.</p>
          </div>
          <div className="right">
            <SpecificBox>
              <h3>Aplicativos para smartphone</h3>
              <h3>Mobile</h3>
              <p>
                Funcionamento em Android e IOS, com perfomance inacrtitavel.
              </p>
            </SpecificBox>
            <SpecificBox>
              <h3>Aplicativos Desktop</h3>
              <h3>Desktop</h3>
              <p>
                Para sistemas operativos Linux, Windows e Mac, aplicativos de gerenciamento de dados.
              </p>
            </SpecificBox>
          </div>
        </GridColumn3>
      </ContentBox>
    </section>
   
    <section className="work">
      <SecondTitle> Como Trabalho </SecondTitle>

      <Grid2Column4>
        <ContentBox>
          <h1> 001 </h1>
          <h2> Descução de ideias </h2>
          <p>
            Com caneta e papel, traçamos todas as ideias e colomos-as em alvos.
          </p>
        </ContentBox>
        <ContentBox className="right">
          <h1> 002 </h1>
          <h2> Conceito criativo </h2>
          <p>
            Desenvolvemento do plano e criação algoritimos e soluções.
          </p>
        </ContentBox>
        <ContentBox>
          <h1> 003 </h1>
          <h2> Mão na massa  </h2>
          <p>
            Momento de transformar o sonho em uma realidade
          </p>
        </ContentBox>
        <ContentBox className="right">
          <h1> 004 </h1>
          <h2> Entrega  </h2>
          <p>
            Depois de varias avaliações e testes, clientes feliz, publicamos.
          </p>
        </ContentBox> 
      </Grid2Column4>
    </section>
   </MainCenteredContent>
  </Container>