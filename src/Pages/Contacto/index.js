import React, { useState } from 'react';

import api from '../../services/api'

// Styles
import { MainTitle } from '../../Styles/typografy'
import { MainCenteredContent, ContentBox, FormInput, FormArea, AwesomeBTN } from '../../Styles/components'
import { GridColumn2, GridColumn3 } from '../../Styles/layout'
import { Container } from './styles'

// Icons
import { FaPaperPlane, FaPhone } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel1, setTel1] = useState('')
  const [tel2, setTel2] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try { 
      const data = { name, email, tel1, tel2, msg }  
      await api.post('/msg', data) 
      alert(`A mensagen foi enviada com succeso`)
    } catch (error) {
      alert("Occorreu um ao enviar, tenta novamente")
    }
  }

  return ( 
    <Container>
      <MainCenteredContent marginTop='4rem' width='80%'> 
        <section className="message">
          <MainTitle> Contacto <div id="infinity"></div> </MainTitle>

          <ContentBox>
            <form onSubmit={handleSubmit}>
              <GridColumn2>
                <FormInput type="text" placeholder="Name *" value={name} onChange={e => setName(e.target.value)}/>
                <FormInput type="text" placeholder="Email *" value={email} onChange={e => setEmail(e.target.value)}/>
                <FormInput type="number" placeholder="Numero de telefone *" value={tel1} onChange={e => setTel1(e.target.value)}/>
                <FormInput type="number" placeholder="Numero alternativo" value={tel2} onChange={e => setTel2(e.target.value)}/>
              </GridColumn2>
              <FormArea name="" placeholder="Sua mensagen *" value={msg} onChange={e => setMsg(e.target.value)}/> 
              <AwesomeBTN type='submit'> Enviar Mensagem </AwesomeBTN>
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
  )
}