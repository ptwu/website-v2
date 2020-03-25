import React from 'react';
import styles from './VideoContainer.module.css';
import PlaceholderBG from '../../img/bg.jpg';
import BGVideo from '../../img/bgvid.webm';
import HeaderCard from '../HeaderCard/HeaderCard';

export default () => (
  <div className="video-container">
    <video className={styles.fullVid} loop autoPlay muted poster={PlaceholderBG}>
      <source src={BGVideo} type="video/webm" />
    </video>
    <div className={styles.vidblock}>
      <HeaderCard />
    </div>
  </div>
);
