import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

const SearchResults = (props) => {

    return (
        <div className={styles.SearchResults}>
            <h2>Search Results</h2>

            <Tracklist
                userSearchResults={props.userSearchResults}
                isRemoval={false}
                onAdd={props.onAdd}
            />

        </div>
    );
};

export default SearchResults;