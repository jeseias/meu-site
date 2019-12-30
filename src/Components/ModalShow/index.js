import React from 'react';

// Icons
import { FaWindowClose } from 'react-icons/fa'

//Styled
import { Container } from './styles' 

export default ({ content, display, showElement }) => {

return (
  <Container item={display} img={content.thumbnail_url}>
    <section>
      <FaWindowClose size={28} className="close" onClick={() => showElement(content)}/>  
      { content.link ? <a href={content.link}>{content.link}</a>: '' }
    </section> 
  </Container>
)
}