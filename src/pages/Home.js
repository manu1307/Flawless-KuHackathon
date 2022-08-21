import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import MainPageLg from "../components/MainPage/MainPageLg";
import TopPart_NoDetail from "../components/Layout/Top/TopPart_NoDetail";
import MainPageSm from "../components/MainPage/MainPageSm";

export default function Home() {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setWidth(window.screen.width);
  });
  return (
    <div className="h-screen">
      <div className="h-screen">
        <Container>
          <TopPart_NoDetail />
        </Container>
        {width > 1024 ? <MainPageLg /> : <MainPageSm />}
      </div>
    </div>
  );
}
