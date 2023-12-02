import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const [searchParameter] = useSearchParams();
  const query = searchParameter.get("v");

  return (
    <div className="p-5 w-full">
		<div className="flex">
			<div className="w-[70%]">
				<iframe
				width="100%"
				height="600"
				src={"https://www.youtube.com/embed/" + query}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				className="rounded-2xl"
				></iframe>
			</div>

			<div className=" w-[30%]">
				<LiveChat/> 
			</div>
	
		</div>
      	<CommentsContainer />
    </div>
  );
};

export default Watch;
