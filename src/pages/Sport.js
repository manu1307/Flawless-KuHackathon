import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import InfoBanner from "../components/Banner/InfoBanner";
import TopPart from "../components/Layout/Top/TopPart";

export default function Sport() {
  const URL = window.location.href;
  const [type, setType] = useState("");
  useEffect(() => {
    const sprotsType = URL.split("?type=")[1];
    setType(sprotsType);
  }, [URL]);
  return (
    <Container>
      <TopPart sprotsType={type} />
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
