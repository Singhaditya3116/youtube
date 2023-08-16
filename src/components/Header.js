import Hamburger from "../images/hamburger.png";
import Search from "../images/search.png";
import Youtube from "../images/youtube";
import UserIcon from "../images/usericon.png";
import { toggleMenu } from "../utils/navSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      {/* ICON LOGO */}
      <div className="flex col-span-1 items-center">
        <img
          className="w-8 cursor-pointer mr-5"
          src={Hamburger}
          alt="Hamburger Icon"
          onClick={toggleMenuHandler}
        />
        <div className="w-28 cursor-pointer">
          <Youtube />
        </div>
      </div>
      {/* Search Bar */}
      <div className="flex col-span-10 h-10">
        <input
          className="w-1/2 py-1 pl-3 border-y-2 border-l-2 border-gray-500 rounded-l-full outline-0"
          type="text"
          placeholder="Search"
        />
        <button className="w-14 border-y-2 border-r-2 border-gray-500 rounded-r-full bg-gray-200">
          <img className="w-9 m-auto p-2" src={Search} alt="search button" />
        </button>
      </div>
      {/* Profile Section */}
      <div className="col-span-1">
        <img className="w-8 cursor-pointer" src={UserIcon} alt="User Profile" />
      </div>
    </div>
  );
};

export default Header;
