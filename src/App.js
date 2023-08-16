import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Service from './Service';
import Search from './Search';
import Contact from './Contact';
import About from './About';
import Menu from './Menu';
import User from './User';
const App = () => {
  return (
    <>
    <Menu/>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/user" element={<User/>} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
