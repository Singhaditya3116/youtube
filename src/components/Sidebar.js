import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuCollapse = useSelector((store) => store.navSlice.isMenuCollapse);

  //Early Return pattern
  if (isMenuCollapse) {
    return null;
  }

  return (
    <div className="w-40 shadow-lg pt-4 pl-4">
      <ul className="">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <div className="mt-4 mb-1">
        <h2 className="font-bold ">Explore</h2>
        <ul>
          <li>Trending</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
        </ul>
      </div>
      <div className="mt-4 mb-1">
        <h2 className="font-bold ">Explore</h2>
        <ul>
          <li>Trending</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
