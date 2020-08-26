import React, { useState, useRef } from 'react'
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'

function VideoCard({ channel, avatarSrc, song, url, likes, shares }) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (isVideoPlaying) {
            //stop
            videoRef.current.pause();
            setIsVideoPlaying(false);
        } else {
            //play
            videoRef.current.play();
            setIsVideoPlaying(true)
        }
    }

    return (
        <div className="videoCard">
            <VideoHeader />
            <video 
                className='videoCard__player'
                ref={videoRef}
                onClick={onVideoPress}
                src={url}
                alt='IG reel video'
                loop
            />
            <VideoFooter
                channel={channel}
                song={song}
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
            />
        </div>
    )
}

export default VideoCard
