import React from 'react'



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


export default () =>  
  <Container>
    <MainCenteredContent marginTop='4rem' width='80%'>
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
          <ContentBox>
            <TestimonialBox>
              <header>
                <div className="img"></div>
                <div className="info">
                  <h3 className="name"> Zacarias Chitunda </h3>
                  <p> Empresario </p>
                </div>
                <div className="progressbar">
                  <progress value="82" max="100" /> 
                </div>
              </header>
              <main>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis voluptate porro.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus quidem laboriosam? 
                </p>
              </main>
            </TestimonialBox>
          </ContentBox>
          <ContentBox>
            <TestimonialBox>
              <header>
                <div className="img"></div>
                <div className="info">
                  <h3 className="name"> Evaristo Bumba </h3>
                  <p> Gerente </p>
                </div>
                <div className="progressbar">
                  <progress value="76" max="100" /> 
                </div>
              </header>
              <main>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis voluptate porro.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus quidem laboriosam? 
                </p>
              </main>
            </TestimonialBox>
          </ContentBox>
          <ContentBox>
            <TestimonialBox>
              <header>
                <div className="img"></div>
                <div className="info">
                  <h3 className="name"> Zacarias Chitunda </h3>
                  <p> Empresario </p>
                </div>
                <div className="progressbar">
                  <progress value="82" max="100" /> 
                </div>
              </header>
              <main>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis voluptate porro.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus quidem laboriosam? 
                </p>
              </main>
            </TestimonialBox>
          </ContentBox>
          <ContentBox>
            <TestimonialBox>
              <header>
                <div className="img"></div>
                <div className="info">
                  <h3 className="name"> Evaristo Bumba </h3>
                  <p> Gerente </p>
                </div>
                <div className="progressbar">
                  <progress value="76" max="100" /> 
                </div>
              </header>
              <main>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perspiciatis voluptate porro.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus quidem laboriosam? 
                </p>
              </main>
            </TestimonialBox>
          </ContentBox>
        </Slider>
      </section>
    </MainCenteredContent>
  </Container> 