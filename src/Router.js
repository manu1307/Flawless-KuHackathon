import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Apply from "./pages/Apply";
import Detail from "./pages/Detail";
import Golf from "./pages/Golf";
import Home from "./pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sport" element={<Golf />}></Route>
      <Route path="/reservation/:id" element={<Detail />}></Route>
      <Route path="/apply/:id" element={<Apply />}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
}
