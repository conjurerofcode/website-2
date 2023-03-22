import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
