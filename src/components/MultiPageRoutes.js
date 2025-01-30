import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Certifications from "./Certifications/certifications";
import Contact from "./home/contact"
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function MultiPageRoutes({ darkMode }) {
    return (
        <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/portfolio'} element={<Portfolio darkMode={darkMode} />} />
            <Route exact path={'/certifications'} element={<Certifications darkMode={darkMode} />} />
            <Route exact path={'/contact'} element={<Contact />} />
        </Routes>
    )
}