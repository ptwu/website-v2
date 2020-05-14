import React from 'react';
import {
  Card, Container, IconButton, Grid,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import styles from './index.module.css';
import ResumePDF from '../../docs/Peter_Wu_Resume.pdf';

export default () => (
  <Container maxWidth="md">
    <Card className={styles.headerCard}>
      <Container maxWidth="sm">
        <h1>Peter Wu</h1>
        <p>
          Hey there! I&apos;m Peter, and I&apos;m a CS major at Cornell
          University who likes to make things that work.
        </p>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing="8">
              <Grid item>
                <IconButton className={styles.portfolioButton} target="_blank" rel="noopener noreferrer" href="https://github.com/ptwu" aria-label="GitHub">
                  <GitHubIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton className={styles.portfolioButton} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/peterlingwu/" aria-label="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton className={styles.portfolioButton} target="_blank" rel="noopener noreferrer" href={ResumePDF} aria-label="Resume">
                  <AssignmentIndIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Card>
  </Container>
);
