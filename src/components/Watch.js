import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const Watch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const [searchParameter] = useSearchParams();
  const query = searchParameter.get("v");

  return (
    <div className="p-5 w-full">
      <iframe
        width="70%"
        height="600"
        src={"https://www.youtube.com/embed/" + query}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-2xl"
      ></iframe>

      <CommentsContainer />
    </div>
  );
};

export default Watch;
