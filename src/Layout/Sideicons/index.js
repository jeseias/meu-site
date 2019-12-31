import React from 'react';
import { Link } from 'react-router-dom'

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

import { Container } from './styles'

export default () => 
  <Container>
     <a target="_blank" href='https://www.facebook.com/jeseias.constatino.33'>
      <FaFacebookF size={18}/>
     </a>
     <a target="_blank" href='https://twitter.com/JeseiasD'>
      <FaTwitter size={18}/>
     </a>
     <a target="_blank" href='https://www.instagram.com/jeseiasconstantino/'>
      <FaInstagram size={18}/>
     </a>
     <a target="_blank" href='https://www.youtube.com/channel/UCt78TT6ClXl87xKSQ5QUliQ'>
      <FaYoutube size={18}/>
     </a>
  </Container>