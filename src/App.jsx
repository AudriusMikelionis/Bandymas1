import { useContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Navbar } from './komponentai/Navbar';
import { Home } from './komponentai/Pages/Home';
import { NewEmployee } from './komponentai/Pages/NewEmployee';
import { Feedback } from './komponentai/Pages/Feedback';
import { NotFound } from './komponentai/Pages/NotFound';
import { Routes, Route } from 'react-router-dom';




function App() {
 

 

return (
  <>
  <Navbar/>

  <Routes> 
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound />} />
    <Route path="new" element={<NewEmployee />} />
    <Route path="feedback" element={<Feedback />} />
  
  </Routes>
  

  

  </>
)

}

export default App;
