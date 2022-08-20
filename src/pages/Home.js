import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import SearchInputContainer from "../components/SearchInputContainer";
import EachBanner from "../components/EachBanner";
export default function Home() {
  return (
    <Container>
      <SearchContainer>
        <SearchInputContainer />
      </SearchContainer>
      <CategoryContainer>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <div style={{ border: "1px solid black" }}>테니스</div>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <div style={{ border: "1px solid black" }}>골프</div>
          </Col>
        </Row>
      </CategoryContainer>
      <BannerContainer>
        <Row>
          <EachBanner />
          <EachBanner />
          <EachBanner />
          <EachBanner />
        </Row>
      </BannerContainer>
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
`;
const BannerContainer = styled.div``;
