import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import subscriptionIcon from "../images/subscription-icon.png";
import libraryIcon from "../images/library-icon.png";
import historyIcon from "../images/history-icon.png";
import watchIcon from "../images/watch-later-icon.png";
import youtubeIcon from "../images/like-icon.png";
import homeIcon from "../images/home-icon.png";

const MenuItems = ({ name, icon }) => {
  return (
    <li className="p-3 my-2 mr-2  hover:bg-gray-200 rounded-lg">
      <div className="flex">
        <img className="w-6 mr-4" alt="Subscription icon" src={icon} />
        <button>{name}</button>
      </div>
    </li>
  );
};

const Sidebar = () => {
  const isMenuCollapse = useSelector((store) => store.navSlice.isMenuCollapse);

  //Early Return pattern
  if (isMenuCollapse) {
    return null;
  }

  return (
    <div className="shadow-lg pt-4 pl-4  shrink-0 basis-52">
      <ul className="">
        <Link to="/">
          <MenuItems name={"Home"} icon={homeIcon} />
        </Link>
        <MenuItems name={"Subscriptions"} icon={subscriptionIcon} />
        <MenuItems name={"Library"} icon={libraryIcon} />
        <MenuItems name={"History"} icon={historyIcon} />
        <MenuItems name={"Watch Later"} icon={watchIcon} />
        <MenuItems name={"Liked Videos"} icon={youtubeIcon} />
        {/* <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
