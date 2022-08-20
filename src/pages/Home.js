import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { menuIsOpenState } from "../atoms/atom-menu";
import { useNavigate } from "react-router-dom";
import TopPart_NoDetail from "../components/TopPart_NoDetail";
import MainPageLg from "../components/MainPage/MainPageLg";

export default function Home() {
  const isOpen = useRecoilValue(menuIsOpenState);
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
        {width > 768 ? <MainPageLg /> : <div>작은화면</div>}
      </div>
    </div>
  );
}
