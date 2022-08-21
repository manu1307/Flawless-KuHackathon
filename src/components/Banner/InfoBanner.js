import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function InfoBanner({ data }) {
  const navigate = useNavigate();
  const printRates = () => {
    const result = [];
    for (let i = 0; i < data.rate; i++) {
      result.push(
        <img style={{ width: "14px", height: "14px" }} src="/img/Star.png" />
      );
    }
    for (let i = 0; i < 5 - data.rate; i++) {
      result.push(
        <img style={{ width: "14px", height: "14px" }} src="/img/NoStar.png" />
      );
    }
    return result;
  };
  return (
    <Col
      lg={4}
      md={6}
      onClick={() => {
        window.scroll(0, 0);
        navigate(`/reservation/${data.placeIdx}`);
      }}
    >
      <Container
        fluid
        style={{
          border: "1px solid black",
          padding: 0,
          marginBottom: "24px",
          cursor: "pointer",
        }}
      >
        <TopImage>
          <img
            src="https://life.gangnam.go.kr/design/homepage/gangnamgu_pc/image/sisul_06.jpg"
            style={{ width: "100%" }}
          />
        </TopImage>
        <BottomDescription>
          <LeftInfo>
            <Title>{data.placeName}</Title>
            <SmallInfo>운영 시간: {data.time}</SmallInfo>
            <SmallInfo>
              가격 정보: {data.price.toLocaleString("ko")}원/1시간
            </SmallInfo>
            <SmallInfo>지역: {data.region}</SmallInfo>
          </LeftInfo>
          <RightInfo>{printRates()}</RightInfo>
        </BottomDescription>
      </Container>
    </Col>
  );
}
const TopImage = styled.div``;
const BottomDescription = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const LeftInfo = styled.div``;
const RightInfo = styled.div`
  font-size: 14px;
  display: flex;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const SmallInfo = styled.div`
  font-weight: 700;
  font-size: 12px;
`;
