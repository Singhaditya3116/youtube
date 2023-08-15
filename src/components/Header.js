import Hamburger from "../images/hamburger.png";
import Search from "../images/search.png";
import Youtube from "../images/youtube.png";

const Header = () => {
  return (
    <div className="flex justify-between p-3">
      {/* ICON LOGO */}
      <div className="flex">
        <img
          className="w-8 cursor-pointer mr-5"
          src={Hamburger}
          alt="Hamburger Icon"
        />
        <img className="w-10 cursor-pointer" src={Youtube} alt="Youtube Icon" />
      </div>
      {/* Search Bar */}
      <div className="flex">
        <input
          className="w-64 h-8 px-2 border-y-2 border-l-2 border-black rounded-l"
          placeholder="Search"
        />
        <button className="w-9 px-2 border-y-2 border-r-2 border-black rounded-r ">
          <img className="w-full" src={Search} alt="search button" />
        </button>
      </div>
      {/* Profile Section */}
      <div>Profile</div>
    </div>
  );
};

export default Header;
