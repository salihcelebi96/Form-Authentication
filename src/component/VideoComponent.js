import React from 'react';
import videoFile from '../videos/video.mp4'; // Import the video file

const VideoComponent = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
