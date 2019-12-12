import React, { useEffect, useState } from 'react';

import { TitleCenter } from './styles'

const words = [
  'Freenlancer',
  'Desenvolverdor Web',
  'Designer'
]

export default () => {
  let [counter, setCounter] = useState(0) 
  
  useEffect(() => {
    const interval = setInterval(() => {
      counter === words.length  ? setCounter(0) : setCounter(counter++) 
    }, 2000);  
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className="homepage page">
      <TitleCenter className='TitleCenter'> 
        Jeseías Domingos 
        <div className="h2">Eu sou um <span>{words[counter]} </span></div>
      </TitleCenter>
    </div>
  )
}  