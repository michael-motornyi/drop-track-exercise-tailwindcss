import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faBars, faBullhorn, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./logo.svg";

const iconClassNames = "text-white h-[25px] w-[25px] ml-[20px] cursor-pointer";

const Header = () => {
  return (
    <header className="fixed flex h-[50px] w-full justify-between bg-[#1d2b38] py-[10px] px-[20px]">
      <div className="flex items-center text-lg text-white">
        <img className="mr-[7px]" src={logo} alt="Chartmetric" />
        <p className="hidden sm:block">Chartmetric</p>
      </div>
      <div className="flex w-full items-center justify-end">
        <div className="relative flex w-full items-center sm:w-auto">
          <FontAwesomeIcon className="absolute left-[20px] h-[15px] w-[15px] text-[#2f4f4f]" icon={faMagnifyingGlass} />
          <input
            className="ml-[10px] w-full rounded-[3px] bg-white py-[7px] pr-[15px] pl-[35px] text-sm sm:w-auto"
            placeholder={`Search("/" for hotkey)`}
          />
        </div>
        <FontAwesomeIcon className={iconClassNames} icon={faBullhorn} />
        <FontAwesomeIcon className={iconClassNames} icon={faBell} />
        <FontAwesomeIcon className={iconClassNames} icon={faBars} />
      </div>
    </header>
  );
};

export default Header;
