import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
        FaCameraRetro,FaGuitar,FaSpaceShuttle,FaBook,FaLaptop,FaTree,FaDesktop } from 'react-icons/fa'
import {MdSmartphone,MdWebAsset, MdWeb} from 'react-icons/md'        

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
                Olá, sou um programador. Especializado em programção web. Estou aqui cheio de vontande para ajudar,
                empresas como a sua a crescer para o proximo nivel. Estamos <b>no secúlo 21</b> , e é uma <b>obrigação</b>,
                toda empresa ter um site, não importa a natureza da mesmo. Seja ela um restaurante, produtora, colegio, oficina,
                studio, salão de beleza, uma botique ou até mesmo podes ser um trabalhador autonomo como eu, um site também 
                ficaria bem para se.
              </p>
              <p className="information">
                1. Gastarias pouco dinheiro em questão de marketing, porque um site faz isto perfeitamente. Não importa onde
                estejá os teus clientes. Porque ele é um elemento <b>Digital Global</b>. <br />
                2. Muito mais clientes para o seu negócio, mais <b>1 milhões</b> de angolanos têm acceso a <b>internet</b>, e eles 
                <b> consomen</b> o seu produto, vendo na internet, <b>certamente</b> eles <b>virão</b>. <br />
                3. Mais <b></b>peso para sua empresa. Tendo em conta que não é qualquer empresa que possue um site, neste mercado
                competivo, só <b></b> probabilidade de você <b>perder</b>.
              </p>
            </div>
            <div className="group">
              <GridColumn4> 
                <Tags>
                  <div className="icon">
                    <FaAward size={50}/>
                  </div>
                  <div className="details">
                    <p>{ `${new Date().getFullYear() - 2017}` } Anos de trabalho</p>
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
                  <Link to='/contacto'>Entre em Contacto</Link>
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
                  <MdWebAsset size={40}/>
                </div>
                <h3>Criação de sites</h3>
                <p>
                  Sites Informativos, Lojas Virtuais, Dinamicos, etc.
                </p>
              </Servicebox>
            </ContentBox>
            <ContentBox>
              <Servicebox>
                <div className="icon">
                  <FaDesktop size={40}/>
                </div>
                <h3>Aplicativos de Computadores</h3>
                <p>
                  Sistemas de gestão, aplicativos personalizados. Para todos sistemas operacionais
                </p>
              </Servicebox>
            </ContentBox> 
            <ContentBox>
              <Servicebox>
                <div className="icon">
                  <MdSmartphone size={40}/>
                </div>
                <h3>Aplicativos de Telefone</h3>
                <p>
                  Aplicativo de emcomenda, chates para grupo e empresas 
                </p>
              </Servicebox>
            </ContentBox>
            <ContentBox>
              <Servicebox>
                <div className="icon">
                  <MdWeb size={40}/>
                </div>
                <h3>Design</h3>
                <p>
                  Criação de panfletos, cartaz e media digital
                </p>
              </Servicebox>
            </ContentBox>
          </div>
        </section>
  
        <section className="testimonials">
          <SecondTitle> Testemunhos </SecondTitle>
          <Slider items="4" className='slider'>
            { clients ?
                clients.map( client => 
                  <ContentBox key={client._id}>
                    <TestimonialBox bg={client.thumbnail_url}>
                      <header> 
                        <div className="img" /> 
                        <div className="info">
                          <h3 className="name">{client.name}</h3>
                          <p>{client.work}</p>
                        </div>
                        <div className="progress">
                          <progress value={client.amount} max="100" />
                          <span> {`${client.amount}%`} </span>
                        </div>
                      </header>
                      <main>
                        <p>{client.saying}</p>
                      </main>
                    </TestimonialBox>
                  </ContentBox>
                ) : 
                <div className="nothing">
                  <h1>Ainda não temos cliente nenhum seje o primeiro </h1>
                  <AwesomeBTN><Link to="/contacto">Contact-me</Link></AwesomeBTN>
                </div>
            }  
          </Slider>
        </section>
      </MainCenteredContent>
    </Container> 
  )
}