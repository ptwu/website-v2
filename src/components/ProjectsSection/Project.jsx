/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  Card, CardMedia, CardContent, Typography, Button,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import styles from './Project.module.css';

export default function Project({
  image, altText, title, desc, linkText, url, style,
}) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={altText}
        height="240"
        image={image}
        title={altText}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" align="left">
          {desc}
        </Typography>
      </CardContent>
      <Button className={styles.projectButton} style={style} size="large" target="_blank" rel="noopener noreferrer" href={url}>
        {linkText}
      </Button>
    </Card>
  );
}

Project.propTypes = {
  image: PropTypes.any.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.object.isRequired,
  linkText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  style: PropTypes.any.isRequired,
};
