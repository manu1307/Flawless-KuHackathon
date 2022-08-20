import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import EachPost from "./pages/EachPost";
import Golf from "./pages/Golf";
import Home from "./pages/Home";
import New from "./pages/New";
import Search from "./pages/Search";
import Voice from "./pages/Voice";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/new" element={<Golf />}></Route>
      <Route path="/new/:postId" element={<EachPost />}></Route>
      <Route path="/meme" element={<Golf />}></Route>
      <Route path="/meme/:postId" element={<EachPost />}></Route>
      <Route path="/voice" element={<Voice />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/reservation/:id" element={<Detail />}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
}
