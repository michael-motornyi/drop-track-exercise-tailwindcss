import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="relative flex w-full items-center sm:w-auto">
      <FontAwesomeIcon className="absolute left-[20px] h-[15px] w-[15px] text-[#2f4f4f]" icon={faMagnifyingGlass} />
      <input
        className="ml-[10px] w-full rounded-[3px] bg-white py-[7px] pr-[15px] pl-[35px] text-sm sm:w-auto"
        placeholder={`Search("/" for hotkey)`}
      />
    </div>
  );
};

export default Search;
