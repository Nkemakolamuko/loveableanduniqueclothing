import React, { useContext } from "react";
import Header from "../Header";
import CategoryLinks from "./CategoryLinks";
import Hero from "../hero/Hero";
import AddOn from "../addons/AddOn";
import Gallery from "./Gallery";
import About from "./About";
import Footer from "../Footer";
import { GlobalContext } from "../../App";
import Sponsors from "../Sponsors";

const LandingPage = () => {
  const { show, setShow } = useContext(GlobalContext);
  return (
    <div>
      {/* Header/Nav */}

      <Header />
      {/* Header Category */}
      {show && (
        <CategoryLinks
          handleMouseLeave={() => setShow(false)}
          handleMouseOver={() => setShow(true)}
        />
      )}

      {/* Hero */}
      <Hero />

      {/* Add On */}
      <AddOn />

      {/* Gallery */}
      <Gallery />

      {/* About */}
      <About />

      {/* Sponsors */}
      {/* <Sponsors /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
