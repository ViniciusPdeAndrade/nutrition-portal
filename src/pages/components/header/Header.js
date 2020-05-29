import React from 'react';
import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={styles.container}>
                <h4 className={styles.logo}> Nutrição</h4>
                <h4 className={styles.message}>Bem Vindo!</h4>
        </header>
    );
}

export default Header;