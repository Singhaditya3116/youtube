import React from "react";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, thumbnails, channelTitle } = snippet;
  const thumbnailUrl = thumbnails?.maxres?.url;
  // console.log(props);
  return (
    <div className="w-[22rem] m-4 pb-2 bg-[#f5f5f5] rounded-2xl cursor-pointer shadow-md">
      <div className="">
        <img className="rounded-2xl" src={thumbnailUrl} alt="Video thumbnail" />
      </div>
      <div className="ml-3">
        <h2 className="font-bold pt-3">{title}</h2>
        <h3>{channelTitle}</h3>
        <h4>{statistics.viewCount} views</h4>
      </div>
    </div>
  );
};

export default VideoCard;
