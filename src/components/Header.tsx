import { FC } from "react";
import { BiUser } from "react-icons/bi";

const Header: FC = () => {
  return (
    <>
      <header className="dash__top">
        <h2>Test</h2>
        <div className="dash__top__profile">
          <p>Stefan</p>
          <BiUser className="dash__top__profile__icon" />
        </div>
      </header>
    </>
  );
};

export default Header;
