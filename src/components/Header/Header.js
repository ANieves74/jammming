import React from 'react';
import styles from './Header.module.css';

const Header = () => {

  return (
    <div className={styles.Header}>
        <div className={styles.logo}></div>
        <h1>Ja<span className={styles.mmm}>mmm</span>ing</h1>
    </div>
  );

};

export default Header;