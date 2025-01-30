import React from 'react';
import Style from './Portfolio.module.scss';
import { Card, CardContent, Typography, Link, Box } from '@mui/material';
import { Launch, GitHub } from '@mui/icons-material';

const PortfolioBlock = ({
  image,
  live,
  source,
  title,
  description,
  category,
  role,
  tech,
  features,
  completionDate,
  duration,
  status,
}) => {
  return (
    <Card className={Style.portfolioCard}>
      <div className={Style.imageContainer}>
        <img 
          src={image} 
          alt={title} 
          className={Style.projectImage}
        />
      </div>
      
      <CardContent className={Style.cardContent}>
        <Typography variant="h6" className={Style.title}>
          {title}
        </Typography>
        
        <Typography variant="body2" className={Style.description}>
          {description}
        </Typography>

        <ul className={Style.infoList}>
          <li className={Style.infoItem}>
            <strong>Category:</strong> {category}
          </li>
          <li className={Style.infoItem}>
            <strong>Role:</strong> {role}
          </li>
          <li className={Style.infoItem}>
            <strong>Tech:</strong> {tech.join(', ')}
          </li>
          <li className={Style.infoItem}>
            <strong>Features:</strong> {features.join(', ')}
          </li>
          <li className={Style.infoItem}>
            <strong>Completed:</strong> {completionDate}
          </li>
          <li className={Style.infoItem}>
            <strong>Duration:</strong> {duration}
          </li>
          <li className={Style.infoItem}>
            <strong>Status:</strong> {status}
          </li>
        </ul>

        <Box className={Style.links}>
          {live && (
            <Link
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className={Style.link}
            >
              <Launch fontSize="small" /> Live Demo
            </Link>
          )}
          {source && (
            <Link
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className={Style.link}
            >
              <GitHub fontSize="small" /> Source Code
            </Link>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PortfolioBlock;
