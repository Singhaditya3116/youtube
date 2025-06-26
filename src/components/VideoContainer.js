import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/config";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json?.items);
  };
  console.log("Videso :",videos)
  return (
    <div className="flex gap-4 flex-wrap">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id} className="max-w-[calc(33%_-_10px)] w-full">
            <VideoCard video={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
