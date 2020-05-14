import React from 'react';
import styles from './index.module.css';
import PlaceholderBG from '../../img/bg.jpg';
import BGVideo from '../../img/bgvid.webm';
import HeaderCard from '../HeaderCard';

export default () => (
  <div className={styles.videoContainer}>
    <video
      className={styles.fullVid}
      loop
      autoPlay
      muted
      poster={PlaceholderBG}
    >
      <source src={BGVideo} type="video/webm" />
    </video>
    <div className={styles.vidblock}>
      <HeaderCard />
    </div>
  </div>
);
