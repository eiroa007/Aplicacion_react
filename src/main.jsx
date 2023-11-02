import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import About from "./pages/About/About.jsx";
import Databank from "./pages/Databank/Databank.jsx";
import DatabankDetail from "./pages/DatabankDetail/DatabankDetail.jsx";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/Notfound/Notfound.jsx";
import Notfound from "./pages/Notfound/Notfound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/databank" element={<Databank />} />
          <Route path="/databank/:id" element={<DatabankDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
