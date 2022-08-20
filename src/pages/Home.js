import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import RecommendBanner from "../components/RecommendBanner";
import { useRecoilValue } from "recoil";
import { menuIsOpenState } from "../atoms/atom-menu";
import { useNavigate } from "react-router-dom";
import TopPart_NoDetail from "../components/TopPart_NoDetail";
export default function Home() {
  const isOpen = useRecoilValue(menuIsOpenState);
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <Container>
        <TopPart_NoDetail />
        <BannerContainer>
          <Row>
            <RecommendBanner />
            <RecommendBanner />
            <RecommendBanner />
            <RecommendBanner />
          </Row>
        </BannerContainer>
        {/* <Row>
        <InfoBanner />
        <InfoBanner />
        <InfoBanner />
        <InfoBanner />
        <InfoBanner />
        <InfoBanner />
      </Row> */}
      </Container>
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
