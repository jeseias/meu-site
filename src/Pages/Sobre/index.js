import React, { useState, useEffect } from 'react'

import api from '../../services/api'

// Styled
import { MainTitle, SecondTitle } from '../../Styles/typografy'
import { GridColumn4 } from '../../Styles/layout'
import {ContentBox,Tags,AwesomeBTN,Servicebox,Slider,TestimonialBox,MainCenteredContent} from '../../Styles/components'
import { Container } from './styles'

// Assets
import me from '../../assets/sobre/me2.jpg'

// Icons
import {FaMapMarkedAlt,FaAward,FaCertificate,FaUserAstronaut,FaMusic,FaLocationArrow,
        FaCameraRetro,FaGuitar,FaSpaceShuttle,FaBook,FaLaptop,FaTree,FaDesktop,FaCogs,FaNotesMedical } from 'react-icons/fa'
import {MdSmartphone} from 'react-icons/md'        

export default () =>  {
  const [clients, setClients] = useState([])

  useEffect(() => {
    async function loadClients() {
      const data = await api.get('/clients')
      setClients(data.data)
    }
    loadClients()
  }, [])

  return ( 
    <Container>
      <MainCenteredContent marginTop='4rem' width='90%'>
        <section className="aboutMe">
          <MainTitle>
            Sobre Me 
            <div id="infinity"></div> 
          </MainTitle>
          <ContentBox className="contentBox me"> 
            <div className="img">
              <img src={me} alt=""/>
            </div> 
            <div className="details">
              <h3>Jeseías Domingos</h3>
              <p className="location">
                <FaMapMarkedAlt size={16}/>
                <span>Luanda, Angola</span>
              </p>
              <p className="information">
                Ola! Eu sou o Jeseías Domingos, so um autodidata & melhor aluno de programação do meu colegio &
                desenvolvedor com mais de 1 ano de experiença. Eu começei no meu quarto e ganhei mas experiença
                na empresa SPCENTER. Agora eu trabalho para me mesmo, e aproveitando a vida como uma aguia a voar. 
              </p>
              <p className="information">
                Eu tenho alguns hobbies mais eu gosto de viajar. Ir ver a natureza, o mar e as avores. Programar 
                é algum que tenho que fazer mesmo todos os dias. Tocar o violão deve fazer lo de forma religiosa
              </p>
            </div>
            <div className="group">
              <GridColumn4> 
                <Tags>
                  <div className="icon">
                    <FaAward size={50}/>
                  </div>
                  <div className="details">
                    <p>4 Anos de trabalhos</p>
                    <span>Experiença</span>
                  </div>
                </Tags>
                <Tags>
                  <div className="icon">
                    <FaCertificate size={50}/> 
                  </div>
                  <div className="details">
                    <p>11 + Projectos</p>
                    <span>Completados</span>
                  </div>
                </Tags>
                <Tags>
                  <div className="icon">
                    <FaUserAstronaut size={50}/>
                  </div>
                  <div className="details">
                    <p>trabalhador autonomo</p>
                    <span>Disponivel</span>
                  </div>
                </Tags>
                <AwesomeBTN>
                  Entre em Contacto
                </AwesomeBTN>
              </GridColumn4>
            </div>
          </ContentBox>
        </section>
        
        <section className="myIntrest">
          <SecondTitle> Meus Interses </SecondTitle>
          <ContentBox className="intereses">
            <Tags>
              <div className="icon">
                <FaMusic size={50}/>
              </div>
              <div className="details">
                <p>Musica</p>
              </div>
            </Tags>
            <Tags>
              <div className="icon">
                <FaLocationArrow size={50}/>
              </div>
              <div className="details">
                <p>Viagem</p>
              </div>
            </Tags>
            <Tags>
              <div className="icon">
                <FaCameraRetro size={50}/>
              </div>
              <div className="details">
                <p>Fotografias</p>
              </div>
            </Tags>
            <Tags>
              <div className="icon">
                <FaGuitar size={50}/>
              </div>
              <div className="details">
                <p>Violão</p>
              </div>
            </Tags>
            <Tags>
              <div className="icon">
                <FaSpaceShuttle size={50}/>
              </div>
              <div className="details">
                <p>Espaço</p>
              </div>
            </Tags>
            <Tags>
              <div className="icon">
                <FaBook size={50}/>
              </div>
              <div className="details">
                <p>Livros</p>
              </div>
            </Tags>
            <Tags>
              <div className="icon">
                <FaLaptop size={50}/>
              </div>
              <div className="details">
                <p>Computador</p>
              </div>
            </Tags>
            <Tags>
              <div className="icon">
                <FaTree size={50}/>
              </div>
              <div className="details">
                <p>Natureza</p>
              </div>
            </Tags>
          </ContentBox> 
        </section>
        
        <section className="services">
          <SecondTitle> Serviços </SecondTitle>
          <div className="allService">
            <ContentBox>
              <Servicebox>
                <div className="icon">
                  <FaDesktop size={40}/>
                </div>
                <h3>Design</h3>
                <p>
                  Fazemos design de panfletos, cartaz, design web tambem.
                </p>
              </Servicebox>
            </ContentBox>
            <ContentBox>
              <Servicebox>
                <div className="icon">
                  <FaCogs size={40}/>
                </div>
                <h3>Desenvolvimento</h3>
                <p>
                  Fazemos design de panfletos, cartaz, design web tambem.
                </p>
              </Servicebox>
            </ContentBox> 
            <ContentBox>
              <Servicebox>
                <div className="icon">
                  <MdSmartphone size={40}/>
                </div>
                <h3>Design Reponsivos</h3>
                <p>
                  Fazemos design de panfletos, cartaz, design web tambem.
                </p>
              </Servicebox>
            </ContentBox>
            <ContentBox>
              <Servicebox>
                <div className="icon">
                  <FaNotesMedical size={40}/>
                </div>
                <h3>Supporte Rapido</h3>
                <p>
                  Fazemos design de panfletos, cartaz, design web tambem.
                </p>
              </Servicebox>
            </ContentBox>
          </div>
        </section>
  
        <section className="testimonials">
          <SecondTitle> Testemunhos </SecondTitle>
          <Slider items="4" className='slider'>
            {clients.map( client => 
              <ContentBox>
                <TestimonialBox>
                  <header> 
                    <div className="img" bg={client.thumbnail_url}></div>
                    <div className="info">
                      <h3 className="name">{client.name}</h3>
                      <p>{client.work}</p>
                    </div>
                  </header>
                  <div className="progress">
                    <progress value={client.amount} max="100" />
                    <span> {`${client.amount}%`} </span>
                  </div>
                </TestimonialBox>
              </ContentBox>
            )}  
          </Slider>
        </section>
      </MainCenteredContent>
    </Container> 
  )
}