import { FC } from "react";
import scss from "./Header.module.scss";

const Header: FC = () => {
  return (
    <>
      <header className={scss.Header}>
        <h3>Header</h3>
      </header>
    </>
  );
};
export default Header;
