import React from 'react';
import Style from './Certifications.module.scss';
import classNames from 'classnames';
import { Box, Card, CardMedia, CardContent, Typography, Link, Grid, Container } from '@mui/material';
import { info } from '../../info/Info';

const Certifications = ({ innerRef, darkMode }) => {
  const certifications = info.certifications;

  return (
    <Box 
      component="section" 
      id="certifications"
      ref={innerRef}
      className={classNames(Style.certifications, { [Style.dark]: darkMode })}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2"
          align="center"
          className={Style.sectionTitle}
          sx={{ 
            mb: 4,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600
          }}
        >
          Certifications
        </Typography>

        <Grid container spacing={4} className={Style.gridContainer}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={Style.card}>
                <CardMedia
                  component="img"
                  image={cert.certificationImage}
                  alt={`${cert.title} Certificate`}
                  className={Style.certImage}
                />
                <CardMedia
                  component="img"
                  image={cert.companyImage}
                  alt={`${cert.organization} Logo`}
                  className={Style.companyLogo}
                />
                <CardContent className={Style.cardContent}>
                  <Typography variant="h6" className={Style.title}>
                    {cert.title}
                  </Typography>
                  <Typography variant="subtitle1" className={Style.organization}>
                    {cert.organization}
                  </Typography>
                  <Typography variant="body2" className={Style.description}>
                    {cert.description}
                  </Typography>
                  <Typography variant="body2" className={Style.skills}>
                    <strong>Skills:</strong> {cert.skills.join(', ')}
                  </Typography>
                  <Typography variant="body2" className={Style.date}>
                    <strong>Issued:</strong> {cert.date}
                  </Typography>
                  {cert.expiryDate && (
                    <Typography variant="body2" className={Style.date}>
                      <strong>Expiry:</strong> {cert.expiryDate}
                    </Typography>
                  )}
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Style.link}
                  >
                    View Certification →
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certifications;
