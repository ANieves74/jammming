import React from 'react';
import styles from './Track.module.css';

const Track = (props) => {

    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className={styles.TrackAction} onClick={passTrackToRemove}>
                    &times;
                </button>
            );
        } else {
            return (
                <button className={styles.TrackAction} onClick={passTrack}>
                    &rsaquo;
                </button>
            );
        }
    };

    const passTrack = () => {
        props.onAdd(props.track);
    };

    const passTrackToRemove = () => {
        props.onRemove(props.track);
    };

    return (

        <div className={styles.Track}>
            <div className={styles.TrackInfo}>
                <h3>{props.track.name}</h3>
                <p><span className={styles.highlight}>Artist:</span> {props.track.artist} | <span className={styles.highlight}>Album:</span> {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    );
};

export default Track;