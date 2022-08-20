import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sport from "./pages/Sport";
import Apply from "./pages/Apply";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sport" element={<Sport />}></Route>
      <Route path="/reservation/:id" element={<Detail />}></Route>
      <Route path="/apply/:id" element={<Apply />}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
}
