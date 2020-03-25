import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './ProjectsSection.module.css';
import Project from './Project';
import Samwise from '../../img/samwise.jpg';

export default () => (
  <div className={styles.sectionContainer}>
    <h6 className={styles.subheading}>cool things I&apos;ve built!</h6>
    <h1 className={styles.heading}>Projects</h1>
    <Grid container>
      <Grid item xs={12}>
        <Grid className={styles.fullwidthGrid} container justify="center" spacing="8">
          <Grid item>
            <Project
              image={Samwise}
              altText="bruh"
              title="Samwise"
              desc="Samwise is a"
              linkText="Link To Website"
            />
          </Grid>
          <Grid item>
            <Project
              image={Samwise}
              altText="bruh"
              title="Samwise"
              desc="Samwise is a"
              linkText="Link To Website"
            />
          </Grid>
          <Grid item>
            <Project
              image={Samwise}
              altText="bruh"
              title="Samwise"
              desc="Samwise is a"
              linkText="Link To Website"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
);
