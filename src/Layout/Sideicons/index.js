import React from 'react';
import { Link } from 'react-router-dom'

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

import { Container } from './styles'

export default () => 
  <Container>
     <Link to=''>
      <FaFacebookF size={18}/>
     </Link>
     <Link to=''>
      <FaTwitter size={18}/>
     </Link>
     <Link to=''>
      <FaInstagram size={18}/>
     </Link>
     <Link to=''>
      <FaYoutube size={18}/>
     </Link>
  </Container>