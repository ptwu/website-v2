import React from 'react';
import './VideoContainer.module.css';
import PlaceholderBG from '../../img/bg.jpg';
import BGVideo from '../../img/bgvid.webm';

export default () => (
  <div className="video-container">
    <video loop autoPlay muted poster={PlaceholderBG}>
      <source src={BGVideo} type="video/webm" />
    </video>
  </div>
);
