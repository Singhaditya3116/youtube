import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/config";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json?.items);
  };

  return (
    <div className="mt-6 flex flex-wrap">
      {videos.map((video) => {
        return <VideoCard video={video} key={video.id} />;
      })}
    </div>
  );
};

export default VideoContainer;
