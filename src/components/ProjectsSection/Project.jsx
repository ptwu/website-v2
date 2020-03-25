import React from 'react';
import {
  Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';

export default function Project({
  image, altText, title, desc, linkText,
}) {
  return (
    <Card>
      <CardActionArea>
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
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {linkText}
        </Button>
      </CardActions>
    </Card>
  );
}

Project.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.any.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
