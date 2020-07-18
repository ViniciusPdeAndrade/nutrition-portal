import React from 'react';
import styles from './Fotter.module.css';
import SocialFollow from './socialFollow/SocialFollow';

const Footer = () => {
  return(
    <div className = {styles.container}>
      <h1>Contato</h1>
      <SocialFollow/>
    </div>
  );
}

export default Footer;