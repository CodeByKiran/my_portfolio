import React from 'react';
import Style from './Portfolio.module.scss';
import classNames from 'classnames';
import { Grid, Box, Container, Typography } from '@mui/material';
import PortfolioBlock from './PortfolioBlock';
import { info } from '../../info/Info';

const Portfolio = ({ innerRef, darkMode }) => {
  const portfolioItems = info.portfolio;

  return (
    <Box 
      component="section" 
      id="portfolio" 
      ref={innerRef}
      className={classNames(Style.portfolio, { [Style.dark]: darkMode })}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2"
          className={Style.sectionTitle}
          sx={{ 
            mb: 4,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600
          }}
        >
          My Portfolio
        </Typography>

        <Grid container spacing={4} className={Style.gridContainer}>
          {portfolioItems.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PortfolioBlock
                image={project.image}
                live={project.liveDemo}
                source={project.source}
                title={project.title}
                description={project.description}
                category={project.category}
                role={project.role}
                tech={project.tech}
                features={project.features}
                completionDate={project.completionDate}
                duration={project.duration}
                status={project.status}
                darkMode={darkMode}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
