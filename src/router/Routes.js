import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/header';
import Favoritos from '../pages/Favoritos/favoritos';

import Filme from '../pages/Filme';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound/pageNotFound';


function RouterApp(){
  return(
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/filme/:id" element={ <Filme/> } />
        <Route path="/favoritos" element={ <Favoritos/> } />

        
        {<Route path="*" element={ <PageNotFound/> } /> }
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp;
