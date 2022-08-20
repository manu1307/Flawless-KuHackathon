import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import InfoBanner from "../components/Banner/InfoBanner";
import TopPart from "../components/Layout/Top/TopPart";

export default function Sport() {
  return (
    <Container>
      <TopPart />
      <BannerContainer>
        <Row>
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
          <InfoBanner />
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
  display: flex;
  justify-content: center;
`;

const DetailCategoryContainer = styled(CategoryContainer)``;

const CategoryBox = styled.div`
  width: 75px;
  height: 75px;
  border: 1px solid black;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailCategoryBox = styled(CategoryBox)`
  width: 100px;
  height: 40px;
`;

const BannerContainer = styled.div``;
