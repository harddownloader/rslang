import React from 'react';
import { Player } from 'video-react';
import './video.scss'

const Video = ({src}) => {
    return (
        <Player
            playsInline
            poster=""
            src={src}
        />
    );
};

export default Video;
