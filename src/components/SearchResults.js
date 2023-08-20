import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideSuggestions } from "../utils/suggestionSlice";
import { useParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/config";
import userIcon from "../images/user-icon.png";

const VideoCard = ({ video }) => {
  const { title, description, thumbnails, channelTitle } = video.snippet;
  const thumbnailUrl = thumbnails.high.url;
  return (
    <div className="flex my-2 bg-gray-100 p-2 rounded cursor-pointer">
      <div className="w-60 h-40 bg-gray-200 rounded">
        <img
          className="rounded w-full h-full"
          alt="thumbnail"
          src={thumbnailUrl}
        />
      </div>
      <div className="p-3">
        <h2 className="font-bold">{title}</h2>
        <div className="flex items-center">
          <img className="w-5 h-5 mr-2" alt="channel profile" src={userIcon} />
          <h3 className="py-2">{channelTitle}</h3>
        </div>
        <h4>{description}</h4>
      </div>
    </div>
  );
};

const SearchResults = () => {
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideSuggestions());
  });

  useEffect(() => {
    getVideosData();
  }, []);

  const getVideosData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setVideos(json.items);
  };

  const { searchQuery } = useParams();

  if (videos.length === 0) {
    return null;
  }

  return (
    <div className="m-5">
      {videos.map((video) => (
        <VideoCard video={video} key={video.id.videoId} />
      ))}
    </div>
  );
};

export default SearchResults;
