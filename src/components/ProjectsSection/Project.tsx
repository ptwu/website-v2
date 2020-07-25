/* eslint-disable react/forbid-prop-types */
import React, { ReactElement, CSSProperties } from 'react';
import {
  Card, CardMedia, CardContent, Typography, Button,
} from '@material-ui/core';
import styles from './Project.module.css';

type Props = {
  readonly image: string;
  readonly altText: string;
  readonly title: string;
  readonly desc: (string | JSX.Element)[] | string;
  readonly linkText: string;
  readonly url: string;
  readonly style: CSSProperties;
};

export default (props: Props): ReactElement => {
  const { image, altText, title, desc, linkText, url, style } = props;

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
