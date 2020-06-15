import React from 'react';
import styles from './Header.module.css';
import logo from './logo.png';

const Header = () => {

    return (
      <header className={styles.container}>
        <h4 className={styles.name}>Lesão por pressão</h4>
        <img className={styles.logo} src={logo} alt="Nutrição"/>
      </header>
    );
}

export default Header;