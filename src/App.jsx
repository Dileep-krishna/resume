import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css'
import { FaHome } from "react-icons/fa";
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import ResumeGenertor from './Pages/ResumeGenertor';
import PageNotFound from './Pages/PageNotFound';
import Form from './Pages/Form';
import History from "./Pages/History";


function App() {
  

  return (
    <>
   <Header/>
 
   <Routes>
    <Route path='/' element ={<Landing/>}/>
     <Route path='/resume' element ={<ResumeGenertor/>}/>
      <Route path='/form' element ={<Form/>}/>
       <Route path='/history' element ={<History/>}/>
        <Route path='/*' element ={<PageNotFound/>}/>
   </Routes>
     <Footer/>
    </>
  )
}

export default App
