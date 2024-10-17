import HeaderNavigation from "./HeaderNavigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <div
      className={`fixed bg-blue-500 w-screen h-16 px-16 py-2 max-md:px-6  flex items-center  z-50`}
    >
      <Logo />
      <HeaderNavigation />
    </div>
  );
};

export default Header;
