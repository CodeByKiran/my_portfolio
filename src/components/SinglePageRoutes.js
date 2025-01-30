import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Certifications from "./Certifications/certifications";
import Contact from "./home/contact"
import React from 'react';
import { Box } from "@mui/material";

export default function SinglePageRoutes({refs}) {
    return (<Box mt={'3rem'}>
        <Home innerRef={refs.refHome}/>
        <About innerRef={refs.refAbout}/>
        <Portfolio innerRef={refs.refPortfolio}/>
        <Certifications innerRef={refs.refCertification}/>
        <Contact innerRef ={refs.refContact}/>
    </Box>)
}