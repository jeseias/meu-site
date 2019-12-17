import React from 'react';

// Component
import SwitchFilter from '../../Components/SwitchFilter'
import Modal from '../../Components/Modal'

// Layout
import { GridColumn3 } from '../../Styles/layout' 
import { ContentBox } from '../../Styles/components' 

// Styles
import {MainCenteredContent} from '../../Styles/components'
import { MainTitle } from '../../Styles/typografy'
import { Container } from './styles'

export default () =>  {

  const work = [{
    id: 1,
    type: "Site",
    name: "Meu Site",
    what: "Site",
    item: "https://picsum.photos/id/1/500/400",
    link: "#"
  },{
    id: 2,
    type: "Phone",
    name: "Gerenciamento",
    what: "Telefone",
    item: "https://picsum.photos/id/20/500/400",
    link: "#"
  },{
    id: 3,
    type: "Desktop",
    name: "Jeseias Domingos",
    what: "Aplicativo",
    item: "https://picsum.photos/id/30/500/400",
    link: "#"
  },{
    id: 4,
    type: "Desktop",
    name: "James Bond",
    what: "Aplicativo",
    item: "https://picsum.photos/id/40/500/400",
    link: "#"
  },{
    id: 5,
    type: "Site",
    name: "Jason Bourne",
    what: "Site",
    item: "https://picsum.photos/id/50/500/400",
    link: "#"
  },{
    id: 6,
    type: "Phone",
    name: "JMCD",
    what: "Telfone",
    item: "https://picsum.photos/id/60/500/400",
    link: "#"
  },{
    id: 7,
    type: "Desktop",
    name: "Malaquias Constantino",
    what: "Aplicativo",
    item: "https://picsum.photos/id/55/500/400",
    link: "#"
  },{
    id: 8,
    type: "Phone",
    name: "Gestao do Site",
    what: "Phone",
    item: "https://picsum.photos/id/190/500/400",
    link: "#"
  }]

return ( 
  <Container>
    <MainCenteredContent marginTop='4rem' width='90%'>
      <section className="trabalhos">
        <MainTitle> Meus Trabalhos <div id="infinity"></div> </MainTitle>
        
        
        <SwitchFilter /> 

        <GridColumn3>
          { work.map( item => 
            <ContentBox key={item.id}>
              <Modal work={item}/>
            </ContentBox> 
          ) }
        </GridColumn3>
      </section>
    </MainCenteredContent>
  </Container>
)

}