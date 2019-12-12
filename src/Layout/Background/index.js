import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'

// Components
import Sidebar from '../Sidebar'
import Sideicons from '../Sideicons'
 
// Pages
import Homepage from '../../Pages/Home'
import Sobrepage from '../../Pages/Sobre'
import Resumepage from '../../Pages/Resume'

// Styles
import { Background } from './styles' 

import bg1 from '../../assets/backgrounds/bg2.jpg' 
import bg3 from '../../assets/backgrounds/bg3.jpg'
import bg4 from '../../assets/backgrounds/bg4.jpg'
import bg5 from '../../assets/backgrounds/bg5.jpg'
import bg6 from '../../assets/backgrounds/bg6.jpg'
import bg7 from '../../assets/backgrounds/bg7.jpg'

const images = [
  bg1, 
  bg3,
  bg4,
  bg5,
  bg6,
  bg7
]  
 

export default () => { 
  let [counter, setCounter] = useState(0) 
  
  useEffect(() => {
    const interval = setInterval(() => {
      counter === images.length ? setCounter(0) : setCounter(counter++) 
    }, 3110);  
    return () => clearInterval(interval);
  }, [counter]);
  
  return ( 
    <Background img={images[counter]} >  
      <Sidebar />
      <Sideicons />
      <Route exact path='/' component={Homepage}/>
      <Route path='/sobre' component={Sobrepage}/>
      <Route path='/resumo' component={Resumepage}/>
    </Background>
  )
}