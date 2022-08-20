import React from "react";
import { Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function InfoBanner() {
  const navigate = useNavigate();
  return (
    <Col lg={4} md={6} onClick={() => navigate(`/reservation/1`)}>
      <Container
        fluid
        style={{ border: "1px solid black", padding: 0, marginBottom: "24px" }}
      >
        <TopImage>
          <img
            src="https://life.gangnam.go.kr/design/homepage/gangnamgu_pc/image/sisul_06.jpg"
            style={{ width: "100%" }}
          />
        </TopImage>
        <BottomDescription>
          <LeftInfo>
            <Title>어쩌구 테니스장</Title>
            <SmallInfo>시간 정보</SmallInfo>
            <SmallInfo>가격 정보</SmallInfo>
          </LeftInfo>
          <RightInfo>
            <img
              style={{ width: "14px", height: "14px" }}
              src="/img/Star.png"
            />
            <img
              style={{ width: "14px", height: "14px" }}
              src="/img/Star.png"
            />
            <img
              style={{ width: "14px", height: "14px" }}
              src="/img/Star.png"
            />
            <img
              style={{ width: "14px", height: "14px" }}
              src="/img/Star.png"
            />
            <img
              style={{ width: "14px", height: "14px" }}
              src="/img/NoStar.png"
            />
          </RightInfo>
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
