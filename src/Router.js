import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import EachPost from "./pages/EachPost";
import Home from "./pages/Home";
import Meme from "./pages/Meme";
import New from "./pages/New";
import Search from "./pages/Search";
import Voice from "./pages/Voice";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/new" element={<New />}></Route>
      <Route path="/new/:postId" element={<EachPost />}></Route>
      <Route path="/meme" element={<Meme />}></Route>
      <Route path="/meme/:postId" element={<EachPost />}></Route>
      <Route path="/voice" element={<Voice />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
}
