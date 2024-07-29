import { createContext, useContext, useEffect, useState } from "react";
import SmallScreenNav from "./components/SmallScreenNav";
import NewsLetter from "./components/newsLetter";
import Cookies from "./components/Cookies";
import Header from "./components/Header";
import Store from "./components/nav/Store";
import Category from "./components/nav/Category";
import Collection from "./components/nav/Collection";
import Reviews from "./components/nav/Reviews";
import Gallery from "./components/nav/Gallery";
import FAQ from "./components/nav/FAQ";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/hero/Hero";
import CategoryLinks from "./components/nav/CategoryLinks";
import AddOn from "./components/addons/AddOn";
import Footer from "./components/Footer";
import AllGallery from "./components/gallery/AllGallery";
import LandingPage from "./components/nav/LandingPage";
import Layout from "./components/layout/Layout";
import NewArrivals from "./components/NewArrivals";

export const GlobalContext = createContext(null);
// export const GlobalValues = () => useContext(GlobalContext);

function App() {
  const [show, setShow] = useState(false);
  const [showSmall, setShowSmall] = useState(false);
  const [news, setNews] = useState(false);
  const [cookie, setCookie] = useState(false);

  // Show modal for news- which I'd change to framer motion
  useEffect(() => {
    const timeout = setTimeout(() => {
      setNews(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  // Cookie
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCookie(true);
    }, 15000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <GlobalContext.Provider value={{ show, setShow, showSmall, setShowSmall }}>
      <BrowserRouter>
        {/* Small Screen */}
        {showSmall && <SmallScreenNav />}

        {/* NewsLetter */}
        <NewsLetter news={news} handleClose={() => setNews(false)} />

        {/* Cookies */}
        <Cookies cookie={cookie} handleClose={() => setCookie(false)} />

        {/* Navigation */}
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Shop Now */}
          <Route
            path="/new-arrivals"
            element={
              <Layout>
                <NewArrivals />
              </Layout>
            }
          />

          {/* Store */}
          <Route
            path="/store"
            element={
              <Layout>
                <Store />
              </Layout>
            }
          />
          {/* FAQ */}
          <Route
            path="/faq"
            element={
              <Layout>
                <FAQ />
              </Layout>
            }
          />
          {/* All Gallery */}
          <Route
            path="/gallery"
            element={
              <Layout>
                <AllGallery />
              </Layout>
            }
          />
          {/* Reviews */}
          <Route
            path="/reviews"
            element={
              <Layout>
                <Reviews />
              </Layout>
            }
          />
          {/* Collection */}
          <Route
            path="/collection"
            element={
              <Layout>
                <Collection />
              </Layout>
            }
          />

          {/* Category */}
          <Route
            path="/category"
            element={
              <Layout>
                <Category />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
