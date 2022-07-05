import React from 'react'
import {BrowserRouter} from 'react-browser-router';
import { Route, Routes } from 'react-router-dom';
import Erro from './Erro';
import { Search } from './Search';


export const Main = () => {
  return (
    
        <>

            <BrowserRouter>
           
           <Routes>

            <Route exact path='/home' element={<h1>this is home page</h1>} />
            <Route exact path='/about' element={<h1>this is about page</h1>} />
            <Route exact path='/contact' element={<h1>this is contac page</h1>} />
            <Route path='*' element={<Erro />} />
            <Route exact path='/search' element={<Search />} />

    
           </Routes>
            </BrowserRouter>

        </>

  )
}
