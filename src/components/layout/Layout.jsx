import React, { useContext } from "react";
import Header from "../Header";
import { GlobalContext } from "../../App";
import CategoryLinks from "../nav/CategoryLinks";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const { show, setShow } = useContext(GlobalContext);
  return (
    <div>
      <Header />
      {show && (
        <CategoryLinks
          handleMouseLeave={() => setShow(false)}
          handleMouseOver={() => setShow(true)}
        />
      )}
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
