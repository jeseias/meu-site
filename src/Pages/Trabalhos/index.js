import React, { useState, useEffect } from 'react';

import api from '../../services/api'

// Component
import SwitchFilter from '../../Components/SwitchFilter'
import Modal from '../../Components/Modal'

// Layout
import { GridColumn3 } from '../../Styles/layout' 
import { ContentBox } from '../../Styles/components' 

// Components
import ModalShow from '../../Components/ModalShow'

// Styles
import { MainCenteredContent } from '../../Styles/components'
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
 
  async function loadWorks() {
    const data = await api.get('/works')
    console.log(data.data)
    setWorks(data.data)
  }

  useEffect(() => loadWorks(), [])  

  // This function filter the works
  const filterWorks = name => {
    switch (name) {
      case 'Todos':
        return loadWorks()
      case 'Sites': 
        const SiteWorks = works.filter( item => {
          if (item.what === 'Sites')  return item 
        }) 
        return setWorks(SiteWorks)  
      case 'Telefone': 
        const TelefoneWorks = works.filter( item => {
          if (item.what === 'Telefone')  return item 
        }) 
        return setWorks(TelefoneWorks)  
      case 'Computador': 
        const ComputadorWorks = works.filter( item => {
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