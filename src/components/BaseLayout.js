import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import MultiPageRoutes from './MultiPageRoutes';
import { singlePage } from '../info/Info';
import SinglePageRoutes from './SinglePageRoutes';
import useScrollObserver from '../hooks/useScrollObserver';
import { info } from "../info/Info";
import SocialIcon from "./home/SocialIcon";

export default function BaseLayout() {
   const location = useLocation()

   const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
   const refHome = useScrollObserver(setActive);
   const refAbout = useScrollObserver(setActive);
   const refPortfolio = useScrollObserver(setActive);
   let [darkMode, setDarkMode] = useState(false);



   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} active={active} setActive={setActive} />
            </Grid>
            <Grid item flexGrow={1}>
               {singlePage ? <SinglePageRoutes refs={{ refHome, refAbout, refPortfolio }} darkMode={darkMode} /> : <MultiPageRoutes darkMode={darkMode} />}
            </Grid>
            <Grid item>
               <Box
                  component={'footer'}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  py={'2.5rem'}
                  sx={{ opacity: 0.7 }}
                  width={'100%'}
               >
                  <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
                     Thank you for visiting! 🚀 Connect with me on{' '}
                     {info.socials.map((social, index) => (
                        <SocialIcon
                           key={index}
                           link={social.link}
                           icon={social.icon}
                           label={social.label}
                        />
                     ))} to collaborate or chat.
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>&copy; 2024 Sai Kiran. </p>
               </Box>

            </Grid>
         </Grid>
      </Box>
   )
}
