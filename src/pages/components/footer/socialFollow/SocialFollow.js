import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import styles from './SocialFollow.module.css';

export default function SocialFollow(){
  return (
    <div className={styles.container}>
      <a
        onClick={()=> window.open("https://www.instagram.com/marisilvaf", "_blank")}
        className="instagram"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x"/>
      </a>
      
    </div>
  )
}