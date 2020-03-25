import React from 'react';
import { Grid, Container } from '@material-ui/core';
import styles from './ProjectsSection.module.css';
import Project from './Project';
import Samwise from '../../img/samwise.jpg';
import SmartSieve from '../../img/smartsieve.jpg';
import PirateMaps from '../../img/piratemaps.jpg';
import ClassReveal from '../../img/classreveal.jpg';
import TrafficSim from '../../img/trafficsim.jpg';
import WWPMT from '../../img/wwpmt.jpg';

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
                desc={['Samwise is a homework + schedule planner for Cornell students, built with React, Redux, Firebase, and Node.js. Designed and developed by the ', <a target="_blank" rel="noopener noreferrer" href="https://www.cornelldti.org/">Cornell Design &amp; Tech Initiative.</a>]}
                linkText="Link To Website"
                url="https://samwise.today/"
                style={{ background: '#F44336' }}
              />
            </Grid>
            <Grid item xs>
              <Project
                image={SmartSieve}
                altText="SmartSieve"
                title="SmartSieve"
                desc="Chrome extension implementing the powerful Clarifai computer vision API to analyze images, flagging them as safe or unsafe for work."
                linkText="Link To Chrome Web Store"
                url="https://chrome.google.com/webstore/detail/smart-sieve/gegngkeciggmgpjdahkffpdfgdldeeib?hl=en"
                style={{ background: '#2693FF' }}
              />
            </Grid>
            <Grid item xs>
              <Project
                image={PirateMaps}
                altText="Pirate Maps"
                title="Pirate Maps"
                desc="Android mapping app made with Unity3D, made for helping new students navigate through school. Uses Dijkstra's algorithm to find optimal pathways between the &quot;nodes&quot; of school classrooms."
                linkText="Link To Google Play"
                url="https://play.google.com/store/apps/details?id=com.CSI.HSSPirateMaps"
                style={{ background: '#388E3C' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Grid className={styles.fullwidthGrid} container justify="center" spacing="8">
            <Grid item xs>
              <Project
                image={ClassReveal}
                altText="Class Reveal"
                title="Class Reveal"
                desc="Webapp crowdsourcing schedule and roster data for students across the school district, reaching over 2,500 students in
                in the summer of 2018. Built with Firebase + HTML5, CSS, and JS. The current site is no longer in my control, and may have changed since."
                linkText="Link To Website"
                url="https://classreveal.com/"
                style={{ background: '#FF9800' }}
              />
            </Grid>
            <Grid item xs>
              <Project
                image={TrafficSim}
                altText="TrafficSim"
                title="TrafficSim"
                desc={['Webapp made in HTML, CSS, and JS which optimizes intersection traffic light cycle times given input data. Makes calculations using kinematics equations. ', <a target="_blank" rel="noopener noreferrer" href="https://peterwu.dev/TrafficSim/writeup.pdf">Link to associated paper.</a>]}
                linkText="Link To Website"
                url="https://peterwu.dev/TrafficSim/"
                style={{ background: '#E91E63' }}
              />
            </Grid>
            <Grid item xs>
              <Project
                image={WWPMT}
                altText="WWPMT"
                title="WWPMT (now WWPME)"
                desc="The WW-P Mathematics Tournament website, powered by a HTML5 + CSS frontend and a Google App Engine backend, houses a scoring and problem submission database and advertises the annual competition, which draws in over 500 students per year.                "
                linkText="Link To Website"
                url="https://wwpme.org/"
                style={{ background: '#388E3C' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </div>
);
