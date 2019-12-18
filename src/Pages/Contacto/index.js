import React from 'react';

// Styles
import { MainTitle } from '../../Styles/typografy'
import { MainCenteredContent, ContentBox, FormInput, FormArea, AwesomeBTN } from '../../Styles/components'
import { GridColumn2, GridColumn3 } from '../../Styles/layout'
import { Container } from './styles'

// Icons
import { FaPaperPlane, FaPhone } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

export default () =>
  <Container>
    <MainCenteredContent marginTop='4rem' width='80%'> 
      <section className="message">
        <MainTitle> Contacto <div id="infinity"></div> </MainTitle>

        <ContentBox>
          <form action="">
            <GridColumn2>
              <FormInput type="text" placeholder="Name *"/>
              <FormInput type="text" placeholder="Email *"/>
              <FormInput type="number" placeholder="Numero de telefone *"/>
              <FormInput type="number" placeholder="Numero alternativo"/>
            </GridColumn2>
            <FormArea name="" placeholder="Sua mensagen *" /> 
            <AwesomeBTN> Enviar Mensagem </AwesomeBTN>
          </form>
        </ContentBox>
      </section>
    
      <section className="contact">
        <ContentBox> 
          <GridColumn3>
            <div>
              <FaPaperPlane size={30}/>
              <h4>jeseiasdomingos@outlook.com</h4>
              <span>email</span>
            </div>
            <div>
              <MdLocationOn size={30}/>
              <h4> Sequle Luanda, Angola </h4>
              <span> Localidade </span>
            </div>
            <div> 
              <FaPhone size={30}/>
              <h4> 936516269 </h4>
              <span> Telefone </span>
            </div>
          </GridColumn3>
        </ContentBox>
      </section>
    </MainCenteredContent>
  </Container>