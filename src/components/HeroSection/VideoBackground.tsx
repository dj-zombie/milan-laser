import React from "react";

export const VideoBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <video
        className="object-cover w-full h-full"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://videos.pexels.com/video-files/7579331/7579331-uhd_2732_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};
