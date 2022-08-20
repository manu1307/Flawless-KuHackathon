import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import TopPart_NoDetail from "../components/Layout/Top/TopPart_NoDetail";
import DetailInfoBox from "../components/Reservation/DetailInfo";

export default function Reservation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState("info");
  return (
    <>
      <Container>
        <TopPart_NoDetail />
      </Container>
      <Container
        style={{ display: "flex", border: "2px solid black", padding: 0 }}
      >
        <LeftImg>
          <img
            src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/1590136745/B.jpg?180000000"
            style={{ width: "100%" }}
          />
        </LeftImg>
        <RightContainer>
          <Tabs>
            <Tab onClick={() => setTab("info")} selected={tab === "info"}>
              테니스장 정보
            </Tab>
            <Tab onClick={() => setTab("review")} selected={tab === "review"}>
              리뷰
            </Tab>
          </Tabs>
          <InfoContainer>
            <div>
              <Title>어떤 테니스장</Title>
              <DetailInfoBox
                data={[
                  { label: "테니스장 종류", value: "잔디" },
                  { label: "장소", value: "실외" },
                  { label: "금액", value: "시간당 30,000원" },
                  { label: "특이사항", value: "정비로 인해 사용불가" },
                ]}
              />
            </div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <Btn
                onClick={() => {
                  window.scroll(0, 0);
                  navigate(`/apply/1`);
                }}
              >
                예약하기
              </Btn>
            </div>
          </InfoContainer>
        </RightContainer>
      </Container>
    </>
  );
}
const LeftImg = styled.div`
  width: 40%;
`;
const RightContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Btn = styled.div`
  padding: 20px 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #10dd3d;
  color: white;
  cursor: pointer;
  font-size: 24px;
`;
const Tabs = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Tab = styled.div`
  padding: 5px 45px;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "black" : "white")};
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
  font-weight: 700;
  font-size: 24px;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  padding-bottom: 30px;
`;
const Title = styled.div`
  width: max-content;
  font-size: 40px;
  font-weight: 700;
  border-bottom: 2px solid black;
  font-weight: bolder;
  margin-bottom: 30px;
`;
