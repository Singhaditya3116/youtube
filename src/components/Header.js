import Hamburger from "../images/hamburger.png";
import Search from "../images/search.png";
import Youtube from "../images/youtube";
import UserIcon from "../images/user-icon.png";
import { toggleMenu } from "../utils/navSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTION_API } from "../utils/config";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchText);
    const json = await data.json();
    setSearchSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      {/* ICON LOGO */}
      <div className="flex col-span-1 items-center">
        <img
          className="box-content w-6 cursor-pointer p-2 mr-2 rounded-lg hover:bg-gray-200 "
          src={Hamburger}
          alt="Hamburger Icon"
          onClick={toggleMenuHandler}
        />
        <Link to="/">
          <div className="w-24 cursor-pointer">
            <Youtube />
          </div>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="col-span-10 h-10">
        <div className="flex">
          <input
            className="w-1/2 py-1 pl-3 border-y-2 border-l-2 border-gray-500 rounded-l-full outline-0"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onBlur={() => setShowSuggestions(false)}
            onFocus={() => setShowSuggestions(true)}
          />
          <button className="w-14 border-y-2 border-r-2 border-gray-500 rounded-r-full bg-gray-200">
            <img className="w-9 m-auto p-2" src={Search} alt="search button" />
          </button>
        </div>
        {/* Search Suggestions */}
        {showSuggestions && (
          <div className="absolute bg-white pt-5 rounded-xl w-[36.3%]">
            <ul>
              {searchSuggestions.map((suggestion) => {
                return (
                  <li
                    className="py-2 px-2 flex border-b rounded-xl hover:bg-gray-200 select-none"
                    key={suggestion}
                  >
                    <img className="w-6 p-1 mr-1" src={Search} alt="search" />
                    <span> {suggestion}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* Profile Section */}
      <div className="col-span-1">
        <img className="w-8 cursor-pointer" src={UserIcon} alt="User Profile" />
      </div>
    </div>
  );
};

export default Header;
