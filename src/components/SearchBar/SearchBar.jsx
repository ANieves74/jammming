import React, { useState } from 'react';

import styles from './SearchBar.module.css'

const SearchBar = (props) => {

    const [term, setTerm] = useState('');

    const passTerm = () => {
      props.onSearch(term);  
    };

    const handleTermChange = ({ target }) => {
        setTerm(target.value);
    };

    return (
        <div className={styles.SearchBar}>
                <input
                    className={styles.searchInput}
                    id='searchbar'
                    name='searchbar'
                    type='text'
                    placeholder="Enter a Song, Album, or Artist"
                    onChange={handleTermChange}
                    onKeyDown={(e) => e.key === 'Enter' && passTerm(e)}
                />

                <button type="button" className={styles.SearchBtn} onClick={passTerm}>Search</button>
        </div>
    );
};

export default SearchBar;