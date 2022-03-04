import React from 'react';
import { render } from 'react-dom';
import './index.css';
import NavbarCustom from './Components/NavBar/NavbarCustom';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Characters from './Components/Characters';
import Locations from './Components/Locations/Locations';
import Episodes from './Components/Episodes/Episode';



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="characters" element={<NavbarCustom><Characters /></NavbarCustom>} />
      <Route path="locations" element={<NavbarCustom><Locations/></NavbarCustom>} />
      <Route path="episodes" element={<NavbarCustom><Episodes/></NavbarCustom>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);