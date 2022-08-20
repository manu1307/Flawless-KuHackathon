import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import SearchInputContainer from "../components/SearchInputContainer";
import RecommendBanner from "../components/RecommendBanner";
import InfoBanner from "../components/InfoBanner";
export default function Home() {
  return (
    <Container>
      <SearchContainer>
        <SearchInputContainer />
      </SearchContainer>
      <CategoryContainer>
        {/* <Row>
          <Col style={{ textAlign: "center" }}>
            <div style={{ border: "1px solid black",  }}>테니스</div>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <div style={{ border: "1px solid black",  }}>골프</div>
          </Col>
        </Row> */}
        <CategoryBox>카테고리 1</CategoryBox>
        <CategoryBox>카테고리 2</CategoryBox>
        <CategoryBox>카테고리 3</CategoryBox>
      </CategoryContainer>
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
