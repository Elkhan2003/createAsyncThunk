import { FC } from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header.tsx";
import Footer from "./footer/Footer.tsx";
import HomePage from "../pages/HomePage.tsx";

const Layout: FC = () => {
  return (
    <>
      <div className={scss.Layout}>
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
