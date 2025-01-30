import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/kiran.png';
import classNames from 'classnames';
import { Box, Button } from "@mui/material";
import { info } from "../../info/Info";
import { useNavigate } from 'react-router-dom';
import resume from '../../assets/SaikiranSalani_resume.pdf';

export default function Home({ innerRef }) {
   const navigate = useNavigate(); 
   const developerQuotes = [
      "Programming isn't about what you know; it's about what you can figure out.",
   ];

   const handleContactClick = () => {
      navigate('/contact');
   };

   const handleDownloadResume = () => {
      const link = document.createElement('a');
      link.href = resume;
      link.download = 'SaiKiranSalani_Resume.pdf'; // Desired file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   };

   return (
      <Box
         ref={innerRef}
         component={'main'}
         display={'flex'}
         flexDirection={{ xs: 'column', md: 'row' }}
         alignItems={'center'}
         justifyContent={'center'}
         minHeight={'calc(100vh - 175px)'}
         id={'home'}
         style={{
            background: 'linear-gradient(to right, #2b5876, #4e4376)', // Dark gradient background
            color: 'white',
            textAlign: 'center',
            padding: '2rem'
         }}
      >
         <Box
            className={classNames(Style.avatar, Style.shadowed)}
            alt={'image of developer'}
            component={'img'}
            src={me}
            width={{ xs: '35vh', md: '40vh' }}
            height={{ xs: '35vh', md: '40vh' }}
            borderRadius={'50%'}
            mb={{ xs: '1rem', sm: 0 }}
            mr={{ xs: 0, md: '2rem' }}
         />
         <Box>
            <h1>
               Hi, I'm <span style={{ fontWeight: 700 }}>{info.firstName} {info.lastName}</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <li key={index}>
                     <span>{bio.emoji}</span> {bio.text}
                  </li>
               ))}

               {/* Social Icons Section */}
               <Box display="flex" justifyContent="center" gap="1rem" mt={2}>
                  {info.socials.map((social, index) => (
                     <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                     >
                        <i className={social.icon} style={{ fontSize: '30px' }}></i>
                     </a>
                  ))}
               </Box>



               {/* Contact Me Button */}
               <Box mt={2}>
                  <Button
                     variant="contained"
                     style={{
                        backgroundColor: '#18cf7d',
                        color: '#000000',
                        fontWeight: 'bold',
                        borderRadius: '20px',
                     }}
                     onClick={handleDownloadResume}
                  >
                     Download Resume
                  </Button>
                  <Button variant="contained" style={{
                     backgroundColor: '#3399ff',
                     color: '#000000',
                     fontWeight: 'bold',
                     borderRadius: '20px',
                     marginLeft: '20px'
                  }}
                     onClick={handleContactClick}>
                     Contact Me
                  </Button>
               </Box>
            </Box>
         </Box>

         {/* Developer Quotes Section */}
         <Box
            component={'section'}
            style={{
               marginTop: '1rem',
               backgroundColor: '#1e1e1e',
               padding: '1rem',
               borderRadius: '90px',
               boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            }}
         >
            {/*<h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Quote</h3>*/}
            <Box
               component={'ul'}
               p={0}
               style={{
                  listStyleType: 'none',
                  fontSize: '2.1rem',
                  lineHeight: '0.8',
                  color: 'white',
                  fontStyle: 'italic',
                  borderRadius: '20px'
               }}
            >
               {developerQuotes.map((quote, index) => (
                  <li key={index} style={{ marginBottom: '1rem' }}>
                     &ldquo;{quote}&rdquo;
                  </li>
               ))}
            </Box>
         </Box>
      </Box>
   );
}
