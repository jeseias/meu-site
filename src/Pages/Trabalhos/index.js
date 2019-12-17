import React, { useState, useEffect } from 'react';

// Component
import SwitchFilter from '../../Components/SwitchFilter'
import Modal from '../../Components/Modal'

// Layout
import { GridColumn3 } from '../../Styles/layout' 
import { ContentBox } from '../../Styles/components' 

// Components
import ModalShow from '../../Components/ModalShow'

// Styles
import {MainCenteredContent} from '../../Styles/components'
import { MainTitle } from '../../Styles/typografy'
import { Container } from './styles' 

export default () =>  {
  const [display, setDisplay] = useState(false)
  const [content, setContent] = useState({})
  const [works, setWorks] = useState([])
  const [items, setItem] = useState([
    { name: 'Todos', active: true },
    { name: 'Sites', active: false },
    { name: 'Telefone', active: false },
    { name: 'Computador', active: false }
  ]) 

  // All my data
  const work = [{
    id: 1,
    type: "Site",
    name: "Meu Site",
    what: "Sites",
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
    what: "Computador",
    item: "https://picsum.photos/id/30/500/400",
    link: "#"
  },{
    id: 4,
    type: "Desktop",
    name: "James Bond",
    what: "Computador",
    item: "https://picsum.photos/id/40/500/400",
    link: "#"
  },{
    id: 5,
    type: "Site",
    name: "Jason Bourne",
    what: "Sites",
    item: "https://picsum.photos/id/50/500/400",
    link: "#"
  },{
    id: 6,
    type: "Phone",
    name: "JMCD",
    what: "Telefone",
    item: "https://picsum.photos/id/60/500/400",
    link: "#"
  },{
    id: 7,
    type: "Desktop",
    name: "Malaquias Constantino",
    what: "Computador",
    item: "https://picsum.photos/id/55/500/400",
    link: "#"
  },{
    id: 8,
    type: "Phone",
    name: "Gestao do Site",
    what: "Telefone",
    item: "https://picsum.photos/id/190/500/400",
    link: "#"
  }] 

  useEffect(() => {
    setWorks(work)
  }, [])

  // This function filter the works
  const filterWorks = name => {
    switch (name) {
      case 'Todos':
        return setWorks(work) 
      case 'Sites': 
        const SiteWorks = work.filter( item => {
          if (item.what === 'Sites')  return item 
        }) 
        return setWorks(SiteWorks)  
      case 'Telefone': 
        const TelefoneWorks = work.filter( item => {
          if (item.what === 'Telefone')  return item 
        }) 
        return setWorks(TelefoneWorks)  
      case 'Computador': 
        const ComputadorWorks = work.filter( item => {
          if (item.what === 'Computador')  return item 
        }) 
        return setWorks(ComputadorWorks)    
      default:
        return setWorks(items)
    }
  }

  // This function switches the menus tabs
  const handleItems = name => {  
    const newItems = items.map( item => {
      if( item.name === name) {
        filterWorks(item.name)
        return {...item, active: true};
      } else { 
        return {...item, active: false}
      }
    })
    setItem(newItems)  
  }


  const showModal = el => {
    setDisplay(!display) 
    setContent(el)
  } 

return ( 
  <Container>
    <MainCenteredContent marginTop='4rem' width='90%'>
      <section className="trabalhos">
        <MainTitle> Meus Trabalhos <div id="infinity"></div> </MainTitle> 
        
        <SwitchFilter handleItems={(els) => handleItems(els)} items={items}/> 
        <ModalShow content={content} display={display} showElement={(el) => showModal(el)}/>

        <GridColumn3 className="modalGrid">
          { works.map( item => 
            <ContentBox key={item.id}>
              <Modal work={item} showElement={el => showModal(el)}/>
            </ContentBox> 
          ) }
        </GridColumn3>
      </section>
    </MainCenteredContent>
  </Container>
)

}