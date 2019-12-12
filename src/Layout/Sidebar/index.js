import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'

// Icons
import { 
  FaHome, FaUserTie, FaAddressBook, FaBriefcase, FaBars
} from 'react-icons/fa'

import { MdMail } from 'react-icons/md'

// Styles
import { Sidebar, Menu } from './styles' 

export default () => {
  const [showMenuItems, setMenu] = useState(false) 

return (
<>
  <Menu>
    <h1> Menu </h1>
    <FaBars size={24} className='bars' onClick={() => setMenu(!showMenuItems) }/>
  </Menu>
  <Sidebar className={showMenuItems ? 'show' : 'hide'}>
    <header>
       
    </header>
    <main>
      <ul>  
        <Link to="/">
          <FaHome size={32} className='icon'/>
          <span color='active'>Início</span>
        </Link>
        <Link to="/sobre">
          <FaUserTie size={32} className='icon' />
          <span>Sobre</span>
        </Link>
        <Link to="/resumo">
          <FaAddressBook size={32} className='icon' />
          <span>resumo</span>
        </Link>
        <Link to="/trabalhos">
          <FaBriefcase size={32} className='icon' />
          <span>trabalhos</span>
        </Link>
        <Link to="/contacto">
          <MdMail size={32} className='icon' />
          <span>contacto</span>
        </Link> 
      </ul>
    </main>
    <footer>
       
    </footer>
  </Sidebar>
</>
)
}
