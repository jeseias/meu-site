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

  const [links] = useState([
    { name: 'Início', icon: 0, active: true, to: '/' },
    { name: 'Sobre', icon: 1, active: false, to: '/sobre' },
    { name: 'Resumo', icon: 2, active: false, to: '/resumo' },
    { name: 'Trabalhos', icon: 3, active: false, to: '/trabalhos' },
    { name: 'Contacto', icon: 4, active: false, to: '/contacto' }
  ])
  const icons = [<FaHome size={32}className='icon'/>,<FaUserTie size={32}className='icon'/>,<FaAddressBook size={32}className='icon'/>,
  <FaBriefcase size={32}className='icon'/>,<MdMail size={32}className='icon'/> ]    

  return (
    <>
      <Menu>
        <h1> Menu </h1>
        <FaBars size={24} className='bars' onClick={() => setMenu(!showMenuItems) }/>
      </Menu>
      <Sidebar className={showMenuItems ? 'show nav' : 'hide nav'}>
        <header> 

        </header>
        <main>
          <ul> 
            {links.map( link =>
              <Link to={ link.to } 
                key={ link.icon } 
                className={ link.active ? 'active' : '' } 
                onClick={ () => setMenu(!showMenuItems) }
              >
                { icons[link.icon] }
                <span>{ link.name }</span>
              </Link>
            )} 
          </ul>
        </main>
        <footer>
          
        </footer>
      </Sidebar>
    </>
  )
}
