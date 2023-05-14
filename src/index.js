import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Poem from './pages/poem/Poem';
import Photo from './pages/photo/Photo';
import Nopage from './pages/nopage/Nopage';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path='home' element={<Home/>}/>
                <Route path='blogs' element={<Blog/>}/>
                <Route path='poems' element={<Poem/>}/>
                <Route path='photos' element={<Photo/>}/>
                <Route path="*" element={<Nopage />} />
            </Route>
        </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

