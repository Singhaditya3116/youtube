import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuCollapse = useSelector((store) => store.navSlice.isMenuCollapse);

  //Early Return pattern
  if (isMenuCollapse) {
    return null;
  }

  return (
    <div className="w-48 shadow-lg pt-4 pl-4">
      <ul className="">
        <Link to="/">
          <li>Home</li>
        </Link>

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
