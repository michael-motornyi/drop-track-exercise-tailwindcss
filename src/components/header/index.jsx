import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faBars, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./logo";
import Search from "./search";

const iconClassNames = "text-white h-[25px] w-[25px] ml-[20px] cursor-pointer";

const Header = () => {
  return (
    <header className="fixed flex h-[50px] w-full justify-between bg-[#1d2b38] py-[10px] px-[20px]">
      <Logo />
      <div className="flex w-full items-center justify-end">
        <Search />
        <FontAwesomeIcon className={iconClassNames} icon={faBullhorn} />
        <FontAwesomeIcon className={iconClassNames} icon={faBell} />
        <FontAwesomeIcon className={iconClassNames} icon={faBars} />
      </div>
    </header>
  );
};

export default Header;
