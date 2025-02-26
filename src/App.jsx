/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Stats from "./Pages/Stats";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import Search from "./Pages/Search";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/pokemon/:name" element={<Stats />}></Route>
        <Route path="*" element={<>Page Not Found</>}></Route>
      </Routes>
    </>
  );
}

export default App;
