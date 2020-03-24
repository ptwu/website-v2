import React from 'react';
import { Card, Container, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './HeaderCard.module.css';

export default () => (
  <Container maxWidth="md">
    <Card className={styles.headerCard}>
      <Container maxWidth="sm">
        <h1>Peter Wu</h1>
        <p>
          Hey there! I&apos;m Peter, and I&apos;m a CS major at Cornell
          University who likes to make things that work (but this website does not).
        </p>
        <IconButton className={styles.portfolioButton} aria-label="delete">
          <GitHubIcon />
        </IconButton>
      </Container>
    </Card>
  </Container>
);
