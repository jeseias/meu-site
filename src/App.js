import React from 'react'; 
import { BrowserRouter } from 'react-router-dom'

// Components 
import Pages from './Pages/routes'

// Styles
import { GlobalStyles } from './Styles'

export default () => <BrowserRouter>  
  <Pages />
  <GlobalStyles />
</BrowserRouter>
