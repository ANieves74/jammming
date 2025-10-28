import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

const Playlist = (props) => {

    const handleNameChange = ({ target }) => {
        props.onNameChange(target.value);
    };


    return (

        <div className={styles.Playlist}>
            <form>
                <input
                    className={styles.playlistName}
                    id='playlist'
                    name='playlist'
                    type='text'
                    placeholder='New Playlist'
                    onChange={handleNameChange}
                />

                <Tracklist
                    userSearchResults={props.playlistTracks}
                    onRemove={props.onRemove}
                    isRemoval={true}
                />

                <button className={styles.playlistSave} onClick={props.onSave}>
                    Save To Spotify
                </button>
            </form>
        </div>

    );
};

export default Playlist;