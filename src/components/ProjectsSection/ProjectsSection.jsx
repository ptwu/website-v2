import React from 'react';
import { Grid, Container } from '@material-ui/core';
import styles from './ProjectsSection.module.css';
import Project from './Project';
import Samwise from '../../img/samwise.jpg';

export default () => (
  <div className={styles.sectionContainer}>
    <h6 className={styles.subheading}>cool things I&apos;ve built!</h6>
    <h1 className={styles.heading}>Projects</h1>
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Grid className={styles.fullwidthGrid} container justify="center" spacing="8">
            <Grid item xs>
              <Project
                image={Samwise}
                altText="Samwise"
                title="Samwise"
                desc="Samwise is a homework + schedule planner for Cornell students, developed by the Cornell Design &amp; Tech Initiative on campus."
                linkText="Link To Website"
                url="https://samwise.today/"
                style={{ background: '#F44336' }}
              />
            </Grid>
            <Grid item xs>
              <Project
                image={Samwise}
                altText="bruh"
                title="Samwise"
                desc="Samwise is a"
                linkText="Link To Website"
                url="https://samwise.today/"
                style={{ background: '#F44336' }}
              />
            </Grid>
            <Grid item xs>
              <Project
                image={Samwise}
                altText="bruh"
                title="Samwise"
                desc="Samwise is a"
                linkText="Link To Website"
                url="https://samwise.today/"
                style={{ background: '#F44336' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </div>
);
