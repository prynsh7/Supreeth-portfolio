import NavLinks from "./NavLinks";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Michael Yeates' Logo" style={{
        visibility: "hidden",
      }} />
      <NavLinks />
    </header>
  );
};

export default Header;
