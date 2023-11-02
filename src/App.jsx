import "./App.css";

import { Outlet } from "react-router-dom";

import logo from "./assets/sw_logo.png";
import { links } from "./components/data/data";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header logo={logo} logoAlt="Sega Mega logo" links={links} />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
