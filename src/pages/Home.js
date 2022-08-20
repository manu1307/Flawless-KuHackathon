import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import SearchInputContainer from "../components/SearchInputContainer";
import RecommendBanner from "../components/RecommendBanner";
import Menu from "../components/Menu";
import { useRecoilValue } from "recoil";
import { menuIsOpenState } from "../atoms/atom-menu";
import { useNavigate } from "react-router-dom";
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
        <SearchContainer>
          <SearchInputContainer />
        </SearchContainer>
        <CategoryContainer>
          <CategoryBox onClick={() => navigate("/sport")}>
            카테고리 1
          </CategoryBox>
          <CategoryBox onClick={() => navigate("/sport")}>
            카테고리 2
          </CategoryBox>
          <CategoryBox onClick={() => navigate("/sport")}>
            카테고리 3
          </CategoryBox>
        </CategoryContainer>
        {width > 768 ? <MainPageLg /> : <div>작은화면</div>}

        {/* <Row>
        <InfoBanner />
        <InfoBanner />
        <InfoBanner />
        <InfoBanner />
        <InfoBanner />
        <InfoBanner />
      </Row> */}
      </div>
    </div>
  );
}
const SearchContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
const CategoryContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;
const CategoryBox = styled.div`
  width: 75px;
  height: 75px;
  border: 1px solid black;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerContainer = styled.div``;
