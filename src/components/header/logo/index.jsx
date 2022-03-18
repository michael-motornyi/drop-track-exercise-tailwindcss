import logo from "./logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center text-lg text-white">
      <img className="mr-[7px]" src={logo} alt="Chartmetric" />
      <p className="hidden sm:block">Chartmetric</p>
    </div>
  );
};

export default Logo;
